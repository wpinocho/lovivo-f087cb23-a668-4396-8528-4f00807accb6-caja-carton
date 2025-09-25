import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Package } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template personalizado para tienda de cajas de cartón
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white shadow-sm border-b border-cardboard-200 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-cardboard-600 rounded-lg p-2">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-cardboard-800">BoxStore</h1>
                <p className="text-xs text-cardboard-600">Cajas de Cartón</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-cardboard-700 hover:text-cardboard-800 transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link 
                to="/blog" 
                className="text-cardboard-700 hover:text-cardboard-800 transition-colors font-medium"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Cart */}
          {showCart && (
            <Button
              variant="ghost"
              size="icon"
              onClick={openCart}
              className="relative hover:bg-cardboard-50"
            >
              <ShoppingCart className="h-5 w-5 text-cardboard-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-cardboard-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          )}
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-cardboard-800">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-cardboard-900 text-white py-12 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-cardboard-600 rounded-lg p-2">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">BoxStore</h3>
                <p className="text-cardboard-300 text-sm">Cajas de Cartón Profesionales</p>
              </div>
            </div>
            <p className="text-cardboard-300 mb-4 max-w-md">
              Especialistas en soluciones de embalaje desde 2014. Ofrecemos cajas de cartón 
              de alta calidad para mudanzas, envíos y almacenamiento.
            </p>
            <div className="flex space-x-4">
              <SocialLinks />
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Productos</h4>
            <div className="space-y-2">
              <p className="text-cardboard-300 hover:text-white transition-colors cursor-pointer">
                Cajas de Mudanza
              </p>
              <p className="text-cardboard-300 hover:text-white transition-colors cursor-pointer">
                Cajas de Envío
              </p>
              <p className="text-cardboard-300 hover:text-white transition-colors cursor-pointer">
                Cajas de Almacenamiento
              </p>
              <p className="text-cardboard-300 hover:text-white transition-colors cursor-pointer">
                Cajas Industriales
              </p>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Soporte</h4>
            <div className="space-y-2">
              <Link 
                to="/blog" 
                className="block text-cardboard-300 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <p className="text-cardboard-300 hover:text-white transition-colors cursor-pointer">
                Contacto
              </p>
              <p className="text-cardboard-300 hover:text-white transition-colors cursor-pointer">
                Envíos
              </p>
              <p className="text-cardboard-300 hover:text-white transition-colors cursor-pointer">
                Devoluciones
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cardboard-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cardboard-400 text-sm">
            &copy; 2024 BoxStore. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <p className="text-cardboard-400 hover:text-white transition-colors cursor-pointer text-sm">
              Política de Privacidad
            </p>
            <p className="text-cardboard-400 hover:text-white transition-colors cursor-pointer text-sm">
              Términos de Servicio
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}