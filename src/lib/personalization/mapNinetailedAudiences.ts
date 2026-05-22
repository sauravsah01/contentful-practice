import { AudienceMapper } from '@ninetailed/experience.js-utils-contentful'

export function mapNinetailedAudiences(nt_audiences: any[]) {
  return (nt_audiences || []).filter(Boolean).filter(AudienceMapper.isAudienceEntry).map(AudienceMapper.mapAudience)
}
