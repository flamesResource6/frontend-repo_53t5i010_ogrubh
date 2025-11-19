import { ShoppingBag, Menu } from 'lucide-react'

export default function Navbar({ onCartClick }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 grid place-items-center text-white font-bold shadow">
              W
            </div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">windstruck</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#new" className="hover:text-slate-900 transition-colors">New</a>
            <a href="#tops" className="hover:text-slate-900 transition-colors">Tops</a>
            <a href="#bottoms" className="hover:text-slate-900 transition-colors">Bottoms</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
              <Menu className="h-5 w-5" />
            </button>
            <button onClick={onCartClick} className="relative p-2 rounded-lg hover:bg-slate-100">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
