import { Link } from "react-router";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#0F1115] text-white min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-bold mb-4 bg-linear-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">404</div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-slate-400 mb-8">Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-0.5"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
