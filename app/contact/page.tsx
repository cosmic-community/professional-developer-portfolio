import ContactForm from '@/components/ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'

export const metadata = {
  title: 'Contact | Professional Developer Portfolio',
  description: 'Get in touch with me for project inquiries, collaborations, or just to say hello.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:contact@example.com" className="text-gray-600 hover:text-primary transition-colors">
              contact@example.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+1234567890" className="text-gray-600 hover:text-primary transition-colors">
              +1 (234) 567-890
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}