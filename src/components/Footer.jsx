export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-slate-900">windstruck</h4>
            <p className="mt-2 text-sm text-slate-600">Modern staples inspired by the coast. Sustainable fabrics, timeless shapes.</p>
          </div>
          <div>
            <h5 className="font-medium text-slate-900">Support</h5>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>Shipping & returns</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-slate-900">Newsletter</h5>
            <p className="mt-2 text-sm text-slate-600">Sign up for early access to drops.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <button className="rounded-lg bg-slate-900 text-white px-4">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} windstruck. All rights reserved.</div>
      </div>
    </footer>
  )
}
