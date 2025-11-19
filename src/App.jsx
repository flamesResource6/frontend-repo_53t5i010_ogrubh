import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [cart, setCart] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const resFeat = await fetch(`${baseUrl}/products?featured=true`)
        const feat = await resFeat.json()
        setFeatured(feat)
        const res = await fetch(`${baseUrl}/products`)
        const prods = await res.json()
        setProducts(prods)
      } catch (e) {
        console.error('Failed to load products', e)
      }
    }
    load()
  }, [])

  const onAdd = (product) => {
    setCart((c) => {
      const exists = c.find((i) => i.slug === product.slug)
      if (exists) return c.map((i) => (i.slug === product.slug ? { ...i, quantity: i.quantity + 1 } : i))
      return [...c, { ...product, quantity: 1 }]
    })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onCartClick={() => alert('Cart coming soon')} />
      <Hero />

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        {featured.length > 0 && (
          <section id="featured" className="py-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Featured</h2>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900">View all</a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((p) => (
                <ProductCard key={p._id || p.slug} product={p} onAdd={onAdd} />
              ))}
            </div>
          </section>
        )}

        <section id="catalog" className="py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">All products</h2>
            <div className="text-sm text-slate-500">Wind-ready staples</div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p._id || p.slug} product={p} onAdd={onAdd} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
