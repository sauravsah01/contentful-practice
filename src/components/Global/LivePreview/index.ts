import dynamic from 'next/dynamic'

const ContentfulPreviewProvider = dynamic(() => import('./ContentfulPreviewProvider'))
const ExitPreviewButton = dynamic(() => import('./ExitPreviewButton'))

export { ContentfulPreviewProvider, ExitPreviewButton }
