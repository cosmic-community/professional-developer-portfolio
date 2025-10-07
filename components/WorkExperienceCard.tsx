import type { WorkExperience } from '@/types'
import ReactMarkdown from 'react-markdown'

interface WorkExperienceCardProps {
  experience: WorkExperience;
}

export default function WorkExperienceCard({ experience }: WorkExperienceCardProps) {
  const companyLogo = experience.metadata?.company_logo;
  const startDate = experience.metadata?.start_date;
  const endDate = experience.metadata?.end_date;
  const isCurrent = experience.metadata?.current_position;
  
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };
  
  return (
    <article className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0">
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-white" />
      
      <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">
              {experience.metadata?.job_title}
            </h3>
            <p className="text-lg text-primary font-semibold mt-1">
              {experience.metadata?.company_name}
            </p>
            {experience.metadata?.location && (
              <p className="text-sm text-gray-600 mt-1">
                {experience.metadata.location}
              </p>
            )}
          </div>
          
          {companyLogo && (
            <img
              src={`${companyLogo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
              alt={experience.metadata?.company_name}
              className="w-16 h-16 rounded-lg object-cover border"
              width={100}
              height={100}
            />
          )}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          {startDate && (
            <>
              <span>{formatDate(startDate)}</span>
              <span>-</span>
              <span>
                {isCurrent ? (
                  <span className="text-primary font-semibold">Present</span>
                ) : endDate ? (
                  formatDate(endDate)
                ) : (
                  'Present'
                )}
              </span>
            </>
          )}
        </div>
        
        {experience.metadata?.description && (
          <div className="prose prose-sm max-w-none text-gray-700">
            <ReactMarkdown>{experience.metadata.description}</ReactMarkdown>
          </div>
        )}
      </div>
    </article>
  )
}