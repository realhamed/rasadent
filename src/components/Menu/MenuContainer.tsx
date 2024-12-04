import { fetchData } from "@/api";
import React from "react";
import { useQuery } from "react-query";
import MenuItem from "./MenuItem";
import { Category } from "@/types/MenuTypes";

const Menu = () => {
  const { data: categories, isLoading, error } = useQuery<{ data: Category[] }, Error>({ queryKey: "categories", queryFn: fetchData });
  console.log(categories?.data, isLoading, error?.message);

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : error?.message ? (
        <div>{error?.message}</div>
      ) : (
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Menu
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            {categories?.data.map((category: Category) => (
              <MenuItem key={category.id} category={category} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
