import { TypeGlobalAlertBanner } from '@/types'

export type AlertBannerWrapperProps = TypeGlobalAlertBanner<'WITHOUT_UNRESOLVABLE_LINKS'> & {
  useLivePreview?: boolean
}
