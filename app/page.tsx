"use client";

import AccessoriesFilterOption from '@/components/Home/AccessoriesFilterOption';
import Hero from '@/components/Home/Hero';
import ProductList from '@/components/Home/ProductList';
import SearchInput from '@/components/Home/SearchInput';
import { getaccessoriesLists } from '@/services';
import { useEffect, useState } from 'react';

export default function Home() {
  const [accessoriesLists, setAccessoriesLists] = useState<any[]>([]);
  const [accessoriesOrgLists, setAccessoriesOrgLists] = useState<any[]>([]);
  const [filters, setFilters] = useState<{ brand: string; price: string }>({
    brand: '',
    price: '',
  });

  useEffect(() => {
    fetchAccessoriesLists();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const fetchAccessoriesLists = async () => {
    try {
      const result: any = await getaccessoriesLists();
      setAccessoriesLists(result || []);
      setAccessoriesOrgLists(result || []);
    } catch (error) {
      console.error("Error fetching accessories:", error);
    }
  };

  const applyFilters = () => {
    let filteredList = [...accessoriesOrgLists];

    // Apply brand filter
    if (filters.brand) {
      filteredList = filteredList.filter(
        (item: any) => item.brand === filters.brand
      );
    }

    // Apply price sorting ONLY if there are filtered results
    if (filters.price === 'low-to-high') {
      filteredList.sort((a: any, b: any) => a.price - b.price);
    } else if (filters.price === 'high-to-low') {
      filteredList.sort((a: any, b: any) => b.price - a.price);
    }

    setAccessoriesLists(filteredList);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <AccessoriesFilterOption
        accessoriesLists={accessoriesOrgLists}
        setFilters={(newFilters) =>
          setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }))
        }
      />
      <ProductList products={accessoriesLists} showLimited={false} />
    </div>
  );
}
