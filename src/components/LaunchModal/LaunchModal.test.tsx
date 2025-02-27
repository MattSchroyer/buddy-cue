import { render, fireEvent, waitFor } from '@testing-library/react';
import { pipe } from 'ramda';
import { describe, expect, it } from 'vitest';
import initEntryFormTestId from './InitEntryForm/testid';
import initEstContentTestId from './InitEstContent/testid';
import LaunchModal from './LaunchModal';
import launchModalTestId from './testid';
import { withRedux } from '../../utils/testHelper';

const wrapper = pipe(withRedux);

describe('LaunchModal', () => {
  it('renders InitEntryForm by default', () => {
    const { getByTestId } = render(wrapper(<LaunchModal />));

    expect(getByTestId(initEntryFormTestId('root'))).toBeInTheDocument();
  });

  it('renders InitEstContent after InitEntryForm is submitted with valid data', async () => {
    const { getByTestId } = render(wrapper(<LaunchModal />));
    expect(getByTestId(initEntryFormTestId('root'))).toBeInTheDocument();
    
    const tempInput = getByTestId(initEntryFormTestId('input-temp'));
    fireEvent.change(tempInput, { target: { value: 45 }});

    const weightInput = getByTestId(initEntryFormTestId('input-weight'));
    fireEvent.change(weightInput, { target: { value: 5 }});

    const initEntryForm = getByTestId(initEntryFormTestId('form'));
    fireEvent.submit(initEntryForm);

    await waitFor(() => {
      expect(getByTestId(initEstContentTestId('root'))).toBeInTheDocument();
    });
  });

  it('does not close the modal when onClose is triggered with backdropClick', () => {
    const { getByTestId } = render(wrapper(<LaunchModal />));

    fireEvent.click(document);
    expect(getByTestId(launchModalTestId('root'))).toBeInTheDocument();
  });
});
