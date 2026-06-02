import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Shady Ridge Studios
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#visibility" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</a>
          <a href="#aroostook" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#cta" className="btn-primary text-sm">Free Visibility Check</a>
        </nav>
      </div>
    </header>
  )
}
