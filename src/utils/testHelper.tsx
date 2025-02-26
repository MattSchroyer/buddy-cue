import { ReactElement } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import type { RenderOptions } from '@testing-library/react'
import type { AppStore, RootState } from '../redux/store'
import { setupStore } from '../redux/store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  state?: Partial<RootState>
  store?: AppStore;
}

export const defaultReduxState = {};

export const withRedux = (
  node: ReactElement,
  { state = defaultReduxState, store = setupStore(state) }: ExtendedRenderOptions = {},
) => <ReduxProvider store={store}>{node}</ReduxProvider>;

export const withReduxCurry =
  ({ state = defaultReduxState, store = setupStore(state) }: ExtendedRenderOptions = {}) =>
  (node: ReactElement) =>
    withRedux(node, { state, store });
