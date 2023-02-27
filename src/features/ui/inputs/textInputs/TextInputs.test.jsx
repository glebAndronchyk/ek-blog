import { render, screen } from '@testing-library/react';
import TextInputs from 'features/ui/inputs/textInputs/TextInputs';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

jest.mock('react-redux');
const mockStore = configureStore();

describe('TextInputs', () => {
  xit('renders several FormInput components', () => {
    const initialState = { user: { error: false } };
    const store = mockStore(initialState);
    const castObject = {
      input1: {
        className: 'test',
        placeholder: 'input1',
        type: 'text',
        label: 'input1',
        options: {},
      },
      input2: {
        className: 'test',
        placeholder: 'input2',
        type: 'text',
        label: 'input1',
        options: {},
      },
    };
    const RHFMethods = {
      register: jest.fn(),
      errors: {},
      watch: jest.fn(),
    };
    render(
      <Provider store={store}>
        <TextInputs
          {...RHFMethods}
          castObject={castObject}
        />
      </Provider>,
    );
    const input1 = screen.getAllByPlaceholderText('input1');
    expect(input1).toBeInTheDocument();
  });
});
