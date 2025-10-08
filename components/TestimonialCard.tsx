import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const clientPhoto = testimonial.metadata?.client_photo;
  const rating = testimonial.metadata?.rating;
  
  const renderStars = (ratingKey: string) => {
    const numStars = parseInt(ratingKey) || 5;
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < numStars;
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      );
    });
  };
  
  return (
    <article className="bg-white dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      {rating && (
        <div className="flex text-yellow-400 mb-4">
          {renderStars(rating.key)}
        </div>
      )}
      
      <blockquote className="text-gray-700 dark:text-gray-300 mb-6">
        "{testimonial.metadata?.testimonial_text}"
      </blockquote>
      
      <div className="flex items-center gap-4">
        {clientPhoto && (
          <img
            src={`${clientPhoto.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={testimonial.metadata?.client_name}
            className="w-12 h-12 rounded-full object-cover"
            width={120}
            height={120}
          />
        )}
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">
            {testimonial.metadata?.client_name}
          </p>
          {testimonial.metadata?.client_title && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.metadata.client_title}
              {testimonial.metadata?.company && ` at ${testimonial.metadata.company}`}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}