import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            Portfolio
          </Link>
          
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#projects" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#experience" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          
            <div className="flex items-center gap-4">
              <Link 
                href="/contact" 
                className="text-sm font-medium text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
            </div>
        </div>
      </div>
    </header>
  )
}