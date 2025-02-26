import { describe, expect, it } from 'vitest';
import App from './App';
import { pipe } from 'ramda';
import { withRedux } from './utils/testHelper';
import { render } from '@testing-library/react';
import launchModalTestId from './components/LaunchModal/testid';
import mainTestId from './components/LaunchModal/testid';

const wrapper = pipe(withRedux);

describe('App', () => {
  it('default', () => {
    const { getByTestId } = render(wrapper(<App />));

    expect(getByTestId(launchModalTestId('root'))).toBeInTheDocument();
    expect(getByTestId(mainTestId('root'))).toBeInTheDocument();
  });
});
