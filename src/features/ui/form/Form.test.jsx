import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Form from 'features/ui/form/Form';

describe('Form', () => {
  const defProps = {
    className: 'test',
    onSubmit: jest.fn().mockImplementation(e => e.preventDefault()),
    type: 'test',
  };
  const mockStore = configureStore();

  it('renders only with children if type not modal', () => {
    render(
      <Form {...defProps}>
        <span>test</span>
      </Form>,
    );
    const closeBtn = screen.queryByTestId('close-button');
    const testText = screen.getByText('test');
    expect(closeBtn).not.toBeInTheDocument();
    expect(testText).toBeInTheDocument();
  });

  it('renders closeButton and children if type is modal', () => {
    render(
      <Provider store={mockStore({})}>
        <Form
          {...defProps}
          type="modal"
        >
          <span>test</span>
        </Form>
      </Provider>,
    );
    const testText = screen.getByText('test');
    const closeBtn = screen.queryByTestId('close-button');
    waitFor(() => expect(closeBtn).toBeInTheDocument());
    expect(testText).toBeInTheDocument();
  });

  it('uses onSubmit function', async () => {
    render(
      <Form {...defProps}>
        <button type="submit">submit</button>
      </Form>,
    );
    const submitButton = screen.getByRole('button', { type: 'submit' });
    await user.click(submitButton);
    expect(defProps.onSubmit).toHaveBeenCalled();
  });
});
