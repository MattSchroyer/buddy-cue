import { pipe } from 'ramda';
import { withReduxCurry } from "../../../utils/testHelper";
import { fireEvent, render } from '@testing-library/react';
import InitEstContent from './InitEstContent';
import { expect, vi } from 'vitest';
import initEstContentTestId from './testid';
import { getEstTime, getEstTimeMessage, getSmokerPrepMessage } from '../../../utils';
import { setupStore } from '../../../redux/store';
import { HOURS_PER_LB, SMOKER_AMB_TEMP } from '../../../constants';
import { mockedSession } from '../../../__mocks__/session';

const mockedReduxState = mockedSession;
const mockedReduxStore = setupStore(mockedReduxState);

const wrapper = pipe(withReduxCurry({ store: mockedReduxStore }));

describe('InitEstContent', () => {
  const mockedOnClose = vi.fn();

  afterEach(() => {
    vi.restoreAllMocks()
  });

  it('renders the content', () => {
    const { getByTestId } = render(wrapper(<InitEstContent onClose={mockedOnClose}/>));

    expect(getByTestId(initEstContentTestId('root'))).toBeInTheDocument();
    expect(getByTestId(initEstContentTestId('button-close'))).toBeInTheDocument();
  });

  it('renders the correct estimated time', () => {
    const { getByText } = render(wrapper(<InitEstContent onClose={mockedOnClose}/>));

    const mockedWeight = mockedReduxState.session.weight;
    const mockedEstTime = getEstTime(mockedWeight, HOURS_PER_LB);
    const mockedEstTimeMessage = getEstTimeMessage(mockedEstTime);
    
    expect(getByText(mockedEstTimeMessage)).toBeInTheDocument();
  });

  it('renders the correct smoker prep message', () => {
    const { getByText } = render(wrapper(<InitEstContent onClose={mockedOnClose}/>));

    const mockedSmokerPrepMessage = getSmokerPrepMessage(SMOKER_AMB_TEMP);

    expect(getByText(mockedSmokerPrepMessage)).toBeInTheDocument();
  });

  it('fires the onClose callback on Close button press', () => {
    const { getByTestId } = render(wrapper(<InitEstContent onClose={mockedOnClose}/>));

    const closeButton = getByTestId(initEstContentTestId('button-close'));
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(mockedOnClose).toHaveBeenCalled();
  });
});
