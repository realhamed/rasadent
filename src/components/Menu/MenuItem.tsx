"use client";

import { Category } from "@/types/MenuTypes";
import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const MenuItem = ({ name, children }: { name: string; children: Category[] }) => {
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [level, setLevel] = useState(0);

  return children.length > 0 ? (
    <div
      className={`font-iransans-md cursor-pointer transition select-none text-sm`}
      onClick={(e) => {
        e.stopPropagation();
        setShowSubCategory((l) => !l);
        setLevel((l) => (showSubCategory ? --l : ++l));
      }}>
      <div className="flex items-center gap-2 py-1">
        <div className="">{name}</div>
        <div className="text-xl text-[#CC0000]">
          <LuChevronDown className={`${showSubCategory && "rotate-180"} transition-all duration-300 ease-in-out`} />
        </div>
      </div>
      {showSubCategory &&
        children.map((item: Category) => (
          <div key={item.id} className="" style={{ paddingRight: `${level * 20}px` }}>
            <MenuItem name={item.name} children={item.children.length > 0 ? item.children : []} />
          </div>
        ))}
    </div>
  ) : (
    <div className="font-iransans-md cursor-pointer transition hover:opacity-75 select-none text-sm">{name}</div>
  );
};

export default MenuItem;
