import { Category } from "@/types/MenuTypes";
import Link from "next/link";
import React from "react";
import { IoChevronBack } from "react-icons/io5";

const MenuItem = ({ category }: { category: Category }) => {
  return category.children.length > 0 ? (
    <li className={``}>
      <Link className="flex items-center justify-between w-full" href={""}>
        {category.name}
        <div className="text-xl text-red-500">
          <IoChevronBack />
        </div>
      </Link>
    </li>
  ) : (
    <li>
      <Link href={""}>{category.name}</Link>
    </li>
  );
};

export default MenuItem;
