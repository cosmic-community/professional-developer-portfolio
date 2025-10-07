import { getWorkExperience } from '@/lib/cosmic'
import WorkExperienceCard from '@/components/WorkExperienceCard'

export default async function WorkExperienceSection() {
  const experiences = await getWorkExperience()
  
  if (!experiences || experiences.length === 0) {
    return null
  }
  
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Work Experience</h2>
          <p className="mt-4 text-lg text-gray-600">
            Professional career history and achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map(experience => (
            <WorkExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}