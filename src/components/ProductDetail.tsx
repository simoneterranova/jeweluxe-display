import React from 'react';
import { ArrowLeft } from 'lucide-react';

// Product type definition for better type safety
type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price?: string;
  // Additional fields for detailed view
  details?: string;
  materials?: string;
  dimensions?: string;
};

type ProductDetailProps = {
  product: Product;
  onBack: () => void;
};

const ProductDetail = ({ product, onBack }: ProductDetailProps) => {
  return (
    <div className="animate-fade-in">
      <button
        onClick={onBack}
        className="mb-8 flex items-center text-gold hover:text-gold-dark transition-colors"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Torna alla collezione
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gold/90 text-white text-xs font-medium rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Information */}
        <div>
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h1 className="font-playfair text-3xl font-semibold text-slate-800">
                {product.name}
              </h1>
              {product.price && (
                <span className="text-gold font-medium text-xl">{product.price}</span>
              )}
            </div>
            <p className="text-slate-700">{product.description}</p>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {product.details && (
              <div>
                <h3 className="font-playfair text-lg font-semibold text-slate-800 mb-2">
                  Dettagli
                </h3>
                <p className="text-slate-700 text-sm">{product.details}</p>
              </div>
            )}

            {product.materials && (
              <div>
                <h3 className="font-playfair text-lg font-semibold text-slate-800 mb-2">
                  Materiali
                </h3>
                <p className="text-slate-700 text-sm">{product.materials}</p>
              </div>
            )}

            {product.dimensions && (
              <div>
                <h3 className="font-playfair text-lg font-semibold text-slate-800 mb-2">
                  Dimensioni
                </h3>
                <p className="text-slate-700 text-sm">{product.dimensions}</p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <button className="btn-gold w-full md:w-auto">
              Richiedi Informazioni
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;