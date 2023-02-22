import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IsAuthPlug from 'features/ui/isAuthPlug/IsAuthPlug';

describe('IsAuthPlug', () => {
  it('IsAuthPlug renders correctly', () => {
    render(<IsAuthPlug />);
    const textElement = screen.getByTestId('is-auth-plug');
    expect(textElement).toBeInTheDocument();
  });
});
