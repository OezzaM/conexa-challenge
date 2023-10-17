"use client";

import { useRouter, usePathname } from "next/navigation";
import { categories } from "../common/constants";
import CategoryBox from "./CategoryBox";

const Navbar = () => {
  const router = useRouter();
  const isFavorites = usePathname() === '/favorites'
  return (
    <div className="p-5 border-b-2 md:h-16">
      <ul className="flex justify-center gap-5">
        {categories.map(({ key, name }) => (
          <CategoryBox
            key={key}
            label={key}
            name={name}
          />
        ))}
      </ul>
      <div
        className={`relative md:absolute right-0 text-center mt-3 md:-mt-6 md:mr-5 cursor-pointer select-none ${isFavorites ? 'border-b-2 mx-auto md:mx-0 w-16 ' : ''}`}
        onClick={() => router.push("/favorites")}
      >
        Favoritos
      </div>
    </div>
  );
};

export default Navbar;
