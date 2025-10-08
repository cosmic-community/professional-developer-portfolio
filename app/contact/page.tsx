import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact - Professional Developer Portfolio',
  description: 'Get in touch for project inquiries and collaborations',
}

export default function ContactPage() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border dark:border-gray-700">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}