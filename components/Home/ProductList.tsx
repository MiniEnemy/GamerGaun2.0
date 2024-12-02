import React from 'react';
import CarCard from './CarCard';
function ProductList({ products }: { products: any[] }) {
  return (
    <div>
      {products && products.length > 0 ? (
        products.map((product: any, index: number) => (
         <div>
          <CarCard/>
         </div>
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
}

export default ProductList;