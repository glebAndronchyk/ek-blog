import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderLogo from 'features/ui/header/headerLogo/HeaderLogo';
import { MemoryRouter } from 'react-router-dom';

describe('HeaderLogo', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HeaderLogo />
      </MemoryRouter>,
    );
  });

  it('renders correctly', () => {
    const testLink = screen.getByRole('link');
    const logoImage = screen.getByRole('img');
    const logoName = screen.getByText('Blog');
    expect(testLink).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
    expect(logoName).toBeInTheDocument();
  });

  it('image has correct src and alt attributes', () => {
    const logoImage = screen.getByRole('img');
    expect(logoImage).toHaveAttribute('src', 'logo.png');
    expect(logoImage).toHaveAttribute('alt', 'ekreative');
  });
});
