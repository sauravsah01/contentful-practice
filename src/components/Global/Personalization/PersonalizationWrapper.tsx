'use client'

import NinetailedInsightsPlugin from '@ninetailed/experience.js-plugin-insights'
import { NinetailedProvider } from '@ninetailed/experience.js-react'
import { NinetailedPreviewPlugin } from '@ninetailed/experience.js-plugin-preview'

const PersonalizationWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <NinetailedProvider
      // REQUIRED. An API key uniquely identifying your Ninetailed account.
      // clientId="NINETAILED_API_KEY"
      clientId={process.env.NEXT_PUBLIC_CONTENTFUL_PERSONALIZATION_CLIENT_ID!}
      // === ALL OF THE FOLLOWING PROPS ARE OPTIONAL ===
      // === DEFAULT VALUES ARE SHOWN ===

      // Your Ninetailed environment, typically either "main" or "development"
      // environment="main"

      environment={process.env.NEXT_PUBLIC_CONTENTFUL_PERSONALIZATION_ENVIRONMENT!}
      // Add any plugin instances
      plugins={[
        new NinetailedInsightsPlugin(),
        // new NinetailedPreviewPlugin({
        //   experiences: [],
        //   audiences: [],
        // }),
      ]}
      // Specify an amount of time (ms) that an <Experience /> component must be present in the viewport to register a component view
      componentViewTrackingThreshold={2000}
      // Specify a maximum amount of time (ms) to wait for an Experience API response before falling back to baseline content
      requestTimeout={5000}
      // Specify a locale to localize profile location information
      locale="en-US"
      // Specify an alternative Experience API base URL
      url="https://experience.ninetailed.co"
      // Set to to true ONLY if using an unindexed CMS
      useSDKEvaluation={true}
    >
      {children}
    </NinetailedProvider>
  )
}

export default PersonalizationWrapper
