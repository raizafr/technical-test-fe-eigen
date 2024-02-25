import '@testing-library/jest-dom'
import Home from "@/app/(home)/page";
import { render, waitFor } from '@testing-library/react'
import { useCountry } from '@/context/CountryContext'; // Mengimpor useCountry dari CountryContext
import { useSearch } from '@/context/SearchContext';
import { useCategory } from '@/context/CategoryContext';
import { topHeadlines } from '@/service/api';

jest.mock('@/context/CountryContext');
jest.mock('@/context/CategoryContext');
jest.mock('@/context/SearchContext')
jest.mock('@/service/api');

window.matchMedia = jest.fn().mockReturnValue({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });

describe('Home Page',()=>{
    test('renders loading state', async () => {     
        (useCountry as jest.Mock).mockReturnValue({ countryValue: 'us' });
        (useSearch as jest.Mock).mockReturnValue({ searchValue: 'pemilu' }); // Menggunakan useContext untuk useSearch
        (useCategory as jest.Mock).mockReturnValue({ categoryValue: 'general' });
    
        
        (topHeadlines as jest.Mock).mockResolvedValueOnce({ data: { articles: [] } });
    
        const { getByText } = render(<Home />);
        expect(getByText('loading...')).toBeInTheDocument();
    
        await waitFor(() => {
          expect(topHeadlines).toHaveBeenCalledWith('us', 'pemilu', 'general'); // Menyesuaikan dengan penggunaan useSearch
        });
      });

    test('render data not found when article not found',async()=>{
        (useCountry as jest.Mock).mockReturnValue({ countryValue: 'us' });
        (useSearch as jest.Mock).mockReturnValue({ searchValue: 'pemilu' });
        (useCategory as jest.Mock).mockReturnValue({ categoryValue: 'general' });
        (topHeadlines as jest.Mock).mockResolvedValueOnce({ data: { articles: [] } });

        const { getByText } = render(<Home />);
        await waitFor(() => {
            expect(getByText('Data not found')).toBeInTheDocument();
        });
    })
    
});