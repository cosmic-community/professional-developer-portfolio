'use client'

import { Github, Linkedin, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme, toggleTheme } = useTheme()
  
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-800 mt-20 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 dark:text-white">About</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A passionate web developer creating modern, responsive applications with cutting-edge technologies.
            </p>
          </div>
          
            <div>
              <h3 className="text-lg font-bold mb-4 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 dark:text-white">Connect</h3>
            <div className="flex gap-4 items-center">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="X (formerly Twitter)"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <button
                  onClick={toggleTheme}
                  className="ml-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
            </div>
          </div>
        </div>
        
        <div className="border-t dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {currentYear} Professional Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}