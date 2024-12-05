import React, { Dispatch, SetStateAction } from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = ({
  searchText,
  setSearchFn,
  submitSearch,
  disabled,
}: {
  searchText: string;
  setSearchFn: Dispatch<SetStateAction<string>>;
  submitSearch: () => any;
  disabled?: boolean;
}) => {
  return (
    <form
      className="relative"
      onSubmit={(e) => {
        e.preventDefault();
        setSearchFn("");
        submitSearch();
      }}>
      <input
        disabled={disabled}
        className="border border-[#d1d1d1] w-full py-2 px-4 rounded text-sm font-iransans-md hover:border-opacity-75 transition focus:outline-none focus:border-[#00aaff]"
        placeholder="جستجو در دسته بندی‌ها"
        type="text"
        value={searchText}
        onChange={(e) => setSearchFn(e.target.value)}
      />
      <button className="absolute left-2 top-2 text-xl text-[#999] cursor-pointer hover:opacity-75 transition">
        <IoSearch />
      </button>
    </form>
  );
};

export default SearchInput;
