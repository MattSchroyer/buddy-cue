import { render, fireEvent, waitFor } from '@testing-library/react';
import { pipe } from 'ramda';
import { afterEach, describe, expect, it, vi } from 'vitest'
import InitEntryForm from './InitEntryForm';
import testId from './testid';
import { withRedux } from '../../../utils/testHelper';

const wrapper = pipe(withRedux);

describe('InitEntryForm', () => {
  const mockedOnSubmit = vi.fn();

  afterEach(() => {
    vi.restoreAllMocks()
  });

  it('renders the form', () => {
    const { getByTestId } = render(wrapper(<InitEntryForm onSubmit={mockedOnSubmit}/>));

    expect(getByTestId(testId('root'))).toBeInTheDocument();
    expect(getByTestId(testId('form'))).toBeInTheDocument();
    expect(getByTestId(testId('input-temp'))).toBeInTheDocument();
    expect(getByTestId(testId('input-weight'))).toBeInTheDocument();
    expect(getByTestId(testId('button-submit'))).toBeInTheDocument();
  });

  it('displays error messages for when no values are inputted', async () => {
    const { getByTestId, getByText } = render(wrapper(<InitEntryForm onSubmit={mockedOnSubmit}/>));

    await waitFor(() => {
      expect(getByTestId(testId('button-submit'))).toBeInTheDocument();
    });
    fireEvent.click(getByTestId(testId('button-submit')));

    await waitFor(() => {
      expect(getByText('Please enter a valid temperature')).toBeInTheDocument();
      expect(getByText('Please enter a valid weight')).toBeInTheDocument();
      expect(mockedOnSubmit).not.toBeCalled();
    });
  });

  it('calls onSubmit with valid inputs', async () => {
    const { getByTestId } = render(wrapper(<InitEntryForm onSubmit={mockedOnSubmit}/>));

    const tempInput = getByTestId(testId('input-temp'));
    fireEvent.change(tempInput, { target: { value: 45 }});

    const weightInput = getByTestId(testId('input-weight'));
    fireEvent.change(weightInput, { target: { value: 5 }});

    const submitButton = getByTestId(testId('button-submit'));
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedOnSubmit).toHaveBeenCalled();
    });
  });
});
