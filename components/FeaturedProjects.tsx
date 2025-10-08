import { getFeaturedProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects()
  
  if (!projects || projects.length === 0) {
    return null
  }
  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Recent work and personal projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}