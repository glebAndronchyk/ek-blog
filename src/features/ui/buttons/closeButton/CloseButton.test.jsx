import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider, useDispatch, useSelector } from 'react-redux';
import configureStore from 'redux-mock-store';

import CloseButton from 'features/ui/buttons/closeButton/CloseButton';

describe('CloseButton', () => {
  const reactRedux = { useDispatch, useSelector };
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  it('dispatches modalClosed action when clicked', async () => {
    const mockStore = configureStore();
    const store = mockStore({});

    useDispatchMock.mockReturnValue(jest.fn());
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <CloseButton />
      </Provider>,
    );
    expect(store.dispatch).not.toHaveBeenCalled();
    const buttonElement = screen.getByRole('button');
    await user.click(buttonElement);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
