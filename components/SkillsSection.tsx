import { getSkills } from '@/lib/cosmic'
import SkillCard from '@/components/SkillCard'

export default async function SkillsSection() {
  const skills = await getSkills()
  
  if (!skills || skills.length === 0) {
    return null
  }
  
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.metadata?.category?.value || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  
  const categoryOrder = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];
  
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Skills & Technologies</h2>
          <p className="mt-4 text-lg text-gray-600">
            Technical expertise and proficiency levels
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {categoryOrder
            .filter(categoryKey => {
              const skills = skillsByCategory[categoryKey];
              return skills && skills.length > 0;
            })
            .map((categoryKey) => {
              const skills = skillsByCategory[categoryKey];
              
              if (!skills || skills.length === 0) {
                return null;
              }
              
              return (
                <div key={categoryKey}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{categoryKey}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.map(skill => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  )
}