"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { getBusinessById } from "@/services";
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Shield, 
  Zap, 
  CheckCircle, 
  XCircle, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (params?.["product-id"]) {
      fetchProduct(params["product-id"]);
    }
  }, [params]);

  const fetchProduct = async (id) => {
    try {
      const data = await getBusinessById(id);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  // Memoized computed values
  const isInStock = useMemo(() => 
    product?.stock && product.stock > 0, 
    [product]
  );

  const availableImages = useMemo(() => 
    [product?.image, ...(product?.images || [])].filter(Boolean), 
    [product]
  );

  const handleImageChange = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % availableImages.length;
      }
      return (prevIndex - 1 + availableImages.length) % availableImages.length;
    });
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-4xl font-extrabold animate-pulse text-neon-blue">
          Loading Your Gear...
        </div>
      </div>
    );
  }

  // Not Found State
  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl text-red-500 font-extrabold">404: Gear Not Found</h1>
          <p className="text-xl text-gray-500 mt-2">The item you're looking for isn't available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Section with Navigation */}
        <div className="relative group">
          <div className="bg-gray-800 rounded-lg overflow-hidden relative">
            {availableImages.length > 1 && (
              <>
                <button 
                  onClick={() => handleImageChange('prev')} 
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
                >
                  <ChevronLeft className="text-white" />
                </button>
                <button 
                  onClick={() => handleImageChange('next')} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
                >
                  <ChevronRight className="text-white" />
                </button>
              </>
            )}
            <img
              src={availableImages[currentImageIndex]?.url}
              alt={product.name}
              className="w-full h-[500px] object-contain rounded-md transition-transform transform group-hover:scale-110"
            />
          </div>
          
          {/* Stock Indicator */}
          <span 
            className={`absolute top-4 left-4 text-sm px-4 py-1 rounded-full font-semibold ${
              isInStock 
                ? 'bg-green-500 text-black' 
                : 'bg-red-500 text-black'
            }`}
          >
            {isInStock ? 'In Stock' : 'Out of Stock'}
          </span>

          {/* Image Thumbnails */}
          {availableImages.length > 1 && (
            <div className="flex justify-center space-x-2 mt-4">
              {availableImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                    index === currentImageIndex 
                      ? 'border-blue-500' 
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img.url} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold text-neon-blue">{product.name}</h1>
          
          <div className="flex justify-between items-center">
            <p className="text-xl text-gray-400">
              Brand: <span className="text-white">{product.brand}</span>
            </p>
            <div className="flex items-center text-yellow-500 space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} fill="currentColor" />
              ))}
              <span className="text-sm text-gray-400 ml-2">(120 reviews)</span>
            </div>
          </div>

          <p className="text-4xl font-bold text-green-400">₹{product.price}</p>

          <p className="text-gray-300">{product.description?.text}</p>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <FeatureCard 
              icon={<Shield size={30} className="text-blue-400" />} 
              label="Durable" 
            />
            <FeatureCard 
              icon={<Zap size={30} className="text-yellow-400" />} 
              label="High Performance" 
            />
            <FeatureCard 
              icon={<Heart size={30} className="text-red-400" />} 
              label="Gamer Certified" 
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className={`flex-1 ${
                isInStock 
                  ? "bg-blue-600 hover:bg-blue-500" 
                  : "bg-gray-600 cursor-not-allowed"
              } text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105`}
              disabled={!isInStock}
            >
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>
            <button 
              className="flex-1 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Heart className="mr-2" size={20} />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, label }) => (
  <div className="bg-gray-900 rounded-lg p-4 text-center hover:bg-gray-800 transition duration-300">
    {icon}
    <p className="text-sm text-gray-400 mt-2">{label}</p>
  </div>
);

export default ProductDetail;