import React, { useEffect, useState } from 'react';

const AccessoriesFilterOption = ({
  accessoriesLists,
  setFilters,
}: {
  accessoriesLists: any[];
  setFilters: (filters: { brand: string; price: string }) => void;
}) => {
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    if (accessoriesLists.length) {
      filterProductList();
    }
  }, [accessoriesLists]);

  const filterProductList = () => {
    const brandSet = new Set<string>();
    accessoriesLists.forEach((element) => {
      if (element.brand) {
        brandSet.add(element.brand);
      }
    });

    setBrandList(Array.from(brandSet));
  };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Gaming Accessories Catalog</h2>
        <h2>Comfortable gaming gears</h2>
      </div>
      <div className="flex gap-5">
        {/* Brand Filter Dropdown */}
        <select
          className="select select-bordered w-full max-w-xs"
          defaultValue=""
          onChange={(e) => setFilters({ brand: e.target.value, price: '' })}
        >
          <option value="">All Accessories</option>
          {brandList.map((brand: string, index: number) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Price Filter Dropdown */}
        <select
          className="select select-bordered w-full max-w-xs"
          defaultValue=""
          onChange={(e) => setFilters({ brand: '', price: e.target.value })}
        >
          <option value="">Sort by Price</option>
          <option value="low-to-high">Low-to-High</option>
          <option value="high-to-low">High-to-Low</option>
        </select>
      </div>
    </div>
  );
};

export default AccessoriesFilterOption;
