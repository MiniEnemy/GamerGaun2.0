"use client";
import AccessoriesFilterOption from '@/components/Home/AccessoriesFilterOption';
import Hero from '@/components/Home/Hero';
import ProductList from '@/components/Home/ProductList';
import SearchInput from '@/components/Home/SearchInput';
import { getaccessoriesLists } from '@/services';

import { useEffect, useState } from 'react';
import React from 'react';

export default function Home() {
  const [accessoriesLists, setAccessoriesLists] = useState<any[]>([]);

  useEffect(() => {
    fetchAccessoriesLists();
  }, []);

  const fetchAccessoriesLists = async () => {
    try {
      const result = await getaccessoriesLists();
      console.log('Full result:', result);
      console.log('Accessories Lists:', result.accessoriesLists);
      setAccessoriesLists(result.accessoriesLists || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Hero />
      <SearchInput />
      <AccessoriesFilterOption />
      <ProductList products={accessoriesLists} />
    </div>
  );
}