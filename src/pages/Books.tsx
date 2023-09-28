'use Client';
import AllBooks from '@/components/AllBooks';
import Footer from '@/components/Footer';
import Search from '@/components/Search';
import { useState } from 'react';

const Books = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const [Filters, setFilters] = useState<object>({});

  const handleFilterChange = (newFilters: object) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        Filters={Filters}
        onFilterChange={handleFilterChange}
      />
      <AllBooks searchValue={searchValue} Filters={Filters} />
      <Footer />
    </div>
  );
};

export default Books;
