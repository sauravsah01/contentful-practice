import { ExperienceMapper } from '@ninetailed/experience.js-utils-contentful'

export function mapNinetailedExperiences(nt_experiences: any[]) {
  return (nt_experiences || [])
    .filter(Boolean)
    .filter(ExperienceMapper.isExperienceEntry)
    .map(ExperienceMapper.mapExperience)
}
