import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import FormSubmitButton from 'features/ui/buttons/formSubmitButton/FormSubmitButton';

describe('FormSubmitButton', () => {
  const defProps = {
    label: 'Submit',
    className: 'test',
    loadingStatus: 'idle',
    disabled: false,
  };

  it('renders label while idle', () => {
    render(<FormSubmitButton {...defProps} />);
    const label = screen.getByText(defProps.label);
    expect(label).toBeInTheDocument();
  });

  it('renders spinner while loading', () => {
    render(
      <FormSubmitButton
        {...defProps}
        loadingStatus="loading"
      />,
    );
    const spinner = screen.getByTestId('button-spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('disables button while loading', async () => {
    render(
      <FormSubmitButton
        {...defProps}
        loadingStatus="loading"
      />,
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('disabled');
  });

  it('disables button if it disabled', async () => {
    render(
      <FormSubmitButton
        {...defProps}
        disabled
      />,
    );
    const btn = screen.getByRole('button');
    await user.click(btn);
    expect(btn).toHaveAttribute('disabled');
  });

  it('makes button available if it is not disabled', async () => {
    render(<FormSubmitButton {...defProps} />);
    const btn = screen.getByRole('button');
    await user.click(btn);
    expect(btn).not.toHaveAttribute('disabled');
  });

  it('makes button available if it loading status is idle', async () => {
    render(
      <FormSubmitButton
        {...defProps}
        loadingStatus="idle"
      />,
    );
    const btn = screen.getByRole('button');
    expect(btn).not.toHaveAttribute('disabled');
  });
});
