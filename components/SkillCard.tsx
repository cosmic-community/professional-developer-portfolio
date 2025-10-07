import type { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const proficiencyLevel = skill.metadata?.proficiency_level?.value || 'Intermediate';
  const yearsExperience = skill.metadata?.years_experience;
  
  const getProficiencyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert':
        return 'bg-green-100 text-green-800';
      case 'advanced':
        return 'bg-blue-100 text-blue-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'beginner':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{skill.metadata?.skill_name || skill.title}</h4>
        {yearsExperience && (
          <p className="text-sm text-gray-600 mt-1">{yearsExperience} years experience</p>
        )}
      </div>
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getProficiencyColor(proficiencyLevel)}`}>
        {proficiencyLevel}
      </span>
    </div>
  )
}