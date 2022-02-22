import React from 'react'
import { TranslationsProvider } from '@eo-locale/react'
import MultiSiteContextProvider from 'src/driver/MultisiteContext'
import messages from '../messages.json'
import routes from '../routes.json'
import format from '../format.json'

const BootSite: React.FC = ({ children }) => {
  const locales = [{ messages, language: 'en-us' }]

  return (
    <TranslationsProvider language={'en-us'} locales={locales}>
      <MultiSiteContextProvider value={{ routes, format }}>
        {children}
      </MultiSiteContextProvider>
    </TranslationsProvider>
  )
}

export default BootSite
