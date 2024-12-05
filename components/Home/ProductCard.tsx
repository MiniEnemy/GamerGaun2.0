import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';

function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/Product-Detail/${product.id}`}>
      <div className="relative group cursor-pointer">
        {/* Featured Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">Featured</span>
        </div>

        {/* Quick Action Buttons */}
        <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transform hover:-translate-y-1 transition-all">
            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
          </button>
          <button className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transform hover:-translate-y-1 transition-all">
            <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-blue-500" />
          </button>
        </div>

        {/* Product Card Container */}
        <div className="bg-white border border-white-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="relative pt-8 pb-4 bg-gradient-to-br from-white-50 to-red-600-100 flex items-center justify-center">
            <img
              src={product.image?.url}
              alt={product.name}
              className="w-[200px] h-[200px] object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Product Details */}
          <div className="p-4 space-y-3">
            <div>
              <h2 className="text-lg font-bold text-gray-800 line-clamp-2 mb-1">{product.name}</h2>
              <p className="text-sm text-gray-500 line-clamp-1">{product.brand}</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-blue-600">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mt-4">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
