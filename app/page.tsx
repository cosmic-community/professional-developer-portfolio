import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import SkillsSection from '@/components/SkillsSection'
import WorkExperienceSection from '@/components/WorkExperienceSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
      <WorkExperienceSection />
      <TestimonialsSection />
    </div>
  )
}