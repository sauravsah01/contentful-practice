import { draftMode } from 'next/headers'
import { getGlobalAlertBannerData } from '@/lib/contentful/contentfulService'
import AlertBannerExperience from './SubComponents/AlertBannerExperience'

const AlertBanner = async () => {
  const { isEnabled } = await draftMode()
  const alertBannerData = await getGlobalAlertBannerData()

  if (!alertBannerData.ok || !alertBannerData.data) {
    return <></>
  }

  return <AlertBannerExperience {...alertBannerData.data} useLivePreview={isEnabled} />
}

export default AlertBanner
