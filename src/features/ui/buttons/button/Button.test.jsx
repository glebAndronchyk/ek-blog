import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from 'features/ui/buttons/button/Button';

describe('Button', () => {
  it('renders correctly', () => {
    const btnProps = {
      type: 'button',
      className: 'test',
      onClick: jest.fn(),
      disabled: false,
    };
    render(<Button {...btnProps}>test</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('not pressed while disable', async () => {
    const btnProps = {
      type: 'button',
      className: 'test',
      onClick: jest.fn(),
      disabled: true,
    };
    render(<Button {...btnProps}>test</Button>);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(btnProps.onClick).not.toBeCalled();
  });

  it('pressed while not disable', async () => {
    const btnProps = {
      type: 'button',
      className: 'test',
      onClick: jest.fn(),
      disabled: false,
    };
    render(<Button {...btnProps}>test</Button>);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(btnProps.onClick).toBeCalled();
  });
});
