import { getFeaturedTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

export default async function TestimonialsSection() {
  const testimonials = await getFeaturedTestimonials()
  
  if (!testimonials || testimonials.length === 0) {
    return null
  }
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Client Testimonials</h2>
          <p className="mt-4 text-lg text-gray-600">
            What clients say about working with me
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}