import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Package, Truck, Shield, Star } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz personalizada para tienda de cajas de cartón
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    searchTerm,
    selectedCollectionId,
    filteredProducts,
    setSearchTerm,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cardboard-50 via-cardboard-100 to-cardboard-200 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4834d" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg">
                <Package className="h-12 w-12 text-cardboard-600" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-cardboard-800 mb-6">
              Cajas de Cartón
              <span className="block text-cardboard-600">Profesionales</span>
            </h1>
            
            <p className="text-xl text-cardboard-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Soluciones de embalaje de alta calidad para mudanzas, envíos y almacenamiento. 
              Resistentes, económicas y amigables con el medio ambiente.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cardboard-500 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Buscar cajas..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="pl-12 h-12 bg-white/90 backdrop-blur-sm border-cardboard-200 focus:border-cardboard-400 text-lg"
              />
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-slide-up">
                <Truck className="h-8 w-8 text-cardboard-600 mx-auto mb-3" />
                <h3 className="font-semibold text-cardboard-800 mb-2">Envío Rápido</h3>
                <p className="text-cardboard-600 text-sm">Entrega en 24-48h en toda España</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-slide-up" style={{animationDelay: '0.1s'}}>
                <Shield className="h-8 w-8 text-cardboard-600 mx-auto mb-3" />
                <h3 className="font-semibold text-cardboard-800 mb-2">Calidad Garantizada</h3>
                <p className="text-cardboard-600 text-sm">Cartón corrugado de alta resistencia</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-slide-up" style={{animationDelay: '0.2s'}}>
                <Star className="h-8 w-8 text-cardboard-600 mx-auto mb-3" />
                <h3 className="font-semibold text-cardboard-800 mb-2">Mejor Precio</h3>
                <p className="text-cardboard-600 text-sm">Precios competitivos sin comprometer calidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-cardboard-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cardboard-800 mb-4">
                Nuestras Categorías
              </h2>
              <p className="text-lg text-cardboard-600 max-w-2xl mx-auto">
                Encuentra la caja perfecta para cada necesidad
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection, index) => (
                <div key={collection.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-cardboard-800 mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Productos'}` 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-cardboard-600">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description
                  : 'Las mejores cajas de cartón para todas tus necesidades'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-cardboard-300 text-cardboard-700 hover:bg-cardboard-50"
              >
                Ver Todos los Productos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-cardboard-100 rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="animate-slide-up" style={{animationDelay: `${index * 0.05}s`}}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Package className="h-16 w-16 text-cardboard-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-cardboard-600 mb-2">
                {searchTerm 
                  ? 'No encontramos cajas que coincidan con tu búsqueda' 
                  : 'No hay productos disponibles'
                }
              </h3>
              <p className="text-cardboard-500">
                {searchTerm 
                  ? 'Intenta con otros términos de búsqueda' 
                  : 'Pronto tendremos más productos disponibles'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-cardboard-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegir nuestras cajas?</h2>
            <p className="text-cardboard-200 text-lg max-w-2xl mx-auto">
              Más de 10 años de experiencia en soluciones de embalaje
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cardboard-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Resistencia Superior</h3>
              <p className="text-cardboard-200 text-sm">Cartón corrugado de alta calidad que soporta hasta 30kg</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cardboard-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Entrega Garantizada</h3>
              <p className="text-cardboard-200 text-sm">Envío gratuito en pedidos superiores a 50€</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cardboard-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">100% Reciclable</h3>
              <p className="text-cardboard-200 text-sm">Comprometidos con el medio ambiente</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cardboard-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Satisfacción Total</h3>
              <p className="text-cardboard-200 text-sm">Garantía de devolución si no estás satisfecho</p>
            </div>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};