import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsItemContent from 'features/ui/newsItemContent/NewsItemContent';

describe('NewsItemContent', () => {
  it('renders correctly', () => {
    const plugData = {
      createdAt: '1011-11-11',
      title: 'test title',
      body: 'test body',
      imagePlug: 'plug',
    };
    render(<NewsItemContent {...plugData} />);
    const createdAtElement = screen.getByText('1011-11-11');
    const titleElement = screen.getByText('test title');
    const bodyElement = screen.getByText('test body');
    const imagePlugElement = screen.getByAltText('item');

    expect(createdAtElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
    expect(imagePlugElement).toBeInTheDocument();
  });
});
