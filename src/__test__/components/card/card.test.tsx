import '@testing-library/jest-dom'
import Cards from '@/components/card/Card';
import { render } from '@testing-library/react';

describe('Card Component', () => {
    test('renders card with provided props', () => {
      const mockProps = {
        author: 'John',
        title: 'example title',
        url: 'https://example.com',
        urlToImage: 'https://example.com/image.jpg',
      };
      const { getByText, getByAltText } = render(
        <Cards
          author={mockProps.author}
          title={mockProps.title}
          url={mockProps.url}
          urlToImage={mockProps.urlToImage}
        />
      );
  
      expect(getByText(mockProps.title)).toBeInTheDocument();
      expect(getByText(`author : ${mockProps.author}`)).toBeInTheDocument();
      expect(getByAltText(mockProps.title)).toBeInTheDocument();

      const linkElement = getByText(mockProps.title).closest('a');
      expect(linkElement).toHaveAttribute('href', mockProps.url);
      expect(linkElement).toHaveAttribute('target', '_blank');
      expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');

    });
  });
