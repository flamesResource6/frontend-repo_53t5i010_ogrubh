export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-slate-100">
        <img src={product.images?.[0]} alt={product.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-slate-900">{product.name}</h3>
          <span className="text-slate-900 font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <p className="mt-1 text-sm text-slate-500 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <a href={`/#${product.slug}`} className="text-sm font-medium text-slate-900 hover:underline">View</a>
          <button onClick={() => onAdd(product)} className="text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-3 py-2 rounded-lg">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
