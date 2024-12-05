import React from 'react';
import ProductCard from './ProductCard';
import ProductDetail from './Product-Detail';
function ProductList({ products, showLimited }: { products: any[], showLimited: boolean }) {
  const displayProducts = showLimited ? products.slice(0, 6) : products;

  return (
    <div className="mt-14">
      <h2 className="text-[24px] font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
        {displayProducts.map((product: any, index: number) => (
          <div key={product.id || index} className="bg-red-500 p-2 rounded-lg shadow-md">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <dialog className="product" id="myproductplace">
    <ProductDetail />  
  </dialog>
    </div>
  );


}

export default ProductList;
