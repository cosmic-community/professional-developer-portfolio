export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t bg-gray-50 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p className="text-gray-600 text-sm">
              A passionate web developer creating modern, responsive applications with cutting-edge technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>© {currentYear} Professional Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}