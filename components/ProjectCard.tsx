import type { Project } from '@/types'
import ReactMarkdown from 'react-markdown'

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const featuredImage = project.metadata?.featured_image;
  const status = project.metadata?.project_status;
  const technologies = project.metadata?.technologies;
  
  return (
    <article className="group relative overflow-hidden rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300">
      {featuredImage && (
        <div className="aspect-video overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={800}
            height={450}
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
            {project.metadata?.project_name || project.title}
          </h3>
          {status && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              {status.value}
            </span>
          )}
        </div>
        
        {project.metadata?.description && (
          <div className="prose prose-sm max-w-none text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            <ReactMarkdown>{project.metadata.description}</ReactMarkdown>
          </div>
        )}
        
        {technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.split(',').map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-3">
          {project.metadata?.project_url && (
            <a
              href={project.metadata.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primary-dark dark:text-primary dark:hover:text-primary-dark transition-colors"
            >
              View Project →
            </a>
          )}
          {project.metadata?.github_url && (
            <a
              href={project.metadata.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}