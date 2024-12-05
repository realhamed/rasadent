"use client";

import { getCategories } from "@/api";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import MenuItem from "./MenuItem";
import { Category } from "@/types/MenuTypes";
import { ThreeDots } from "react-loader-spinner";
import SearchInput from "../SearchInput";

const Menu = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery<{ data: Category[] }, Error>({ queryKey: ["categories"], queryFn: getCategories, staleTime: Infinity });

  const [search, setSearch] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (categories?.data) {
      setFilteredCategories([...categories.data]);
    }
  }, [categories?.data]);

  const submitSearch = () => {
    if (categories?.data) {
      const filteredCategories = categories.data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      if (typeof filteredCategories != "undefined") {
        setFilteredCategories(filteredCategories);
      } else {
        setFilteredCategories(categories.data);
      }
    }
  };

  return (
    <div className="w-48 mr-4 mt-4">
      <SearchInput searchText={search} setSearchFn={setSearch} submitSearch={submitSearch} disabled={categories?.data ? false : true} />
      {isLoading ? (
        <div className="h-[calc(100dvh-75px)] flex items-center justify-center">
          <ThreeDots
            visible={true}
            height="16"
            width="50"
            color="#00aaff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="py-1 flex justify-center"
          />
        </div>
      ) : error?.message ? (
        <div className="py-1 px-2 bg-[#CC0000] text-white rounded text-xs m-4 text-left">{error?.message}</div>
      ) : (
        <div className="flex flex-col">
          {filteredCategories.length == 0 ? (
            <div className="py-2 px-2 bg-[#CC0000] text-white rounded text-xs m-4 font-iransans-md">موردی یافت نشد!</div>
          ) : (
            filteredCategories?.map((category: Category) => (
              <div key={category.id} className="border-b border-b-[#d1d1d1] py-2">
                <MenuItem name={category.name} children={category.children.length > 0 ? category.children : []} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
