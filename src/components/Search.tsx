import { SearchIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

interface SearchProps {
  setSearchValue: (value: string) => void;
  searchValue: string;
  Filters: object;
  onFilterChange: (newFilters: object) => void;
}

const Search: React.FC<SearchProps> = ({
  setSearchValue,
  searchValue,
  Filters,
  onFilterChange,
}) => {
  const { handleSubmit, control } = useForm();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleFilterChange = (filterType: string, isChecked: boolean) => {
    // Update the Filters state when a filter checkbox changes
    const newFilters = { ...Filters, [filterType]: isChecked };
    onFilterChange(newFilters);
  };

  const onSubmit = (data: any) => {
    console.log('Form submitted with data:', data);
  };

  const filterOptions = ['author', 'genre', 'title'];

  return (
    <div className="px-[50px] md:h-36 flex flex-col md:flex-row justify-around items-center mt-5 gap-5 md:gap-0">
      <div className="relative">
        <input
          placeholder="Search ..."
          className="px-5 py-2 md:min-w-[500px] rounded-full border border-black focus:outline-0"
          value={searchValue}
          onChange={handleInputChange}
        />
        <SearchIcon className="absolute top-2 right-5 text-gray-400" />
      </div>
      <div>
        <form
          id="filterForm"
          className="flex flex-col gap-2 mb-5"
          onSubmit={handleSubmit(onSubmit)} // Use handleFormSubmit here
        >
          <fieldset className="flex flex-row gap-5 text-lg text-center">
            <legend className="font-semibold text-lg text-indigo-400 mb-2">
              Filter by:
            </legend>
            {filterOptions?.map((filterOption: any) => (
              <label
                key={filterOption}
                className="flex flex-row gap-2 cursor-pointer"
              >
                <Controller
                  name={`filterOptions.${filterOption}`}
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="checkbox"
                      value="true"
                      className="your-checkbox-class"
                      onChange={(e) =>
                        handleFilterChange(filterOption, e.target.checked)
                      }
                    />
                  )}
                />
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </label>
            ))}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Search;
