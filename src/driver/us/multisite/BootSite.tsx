import React from 'react'
import { TranslationsProvider } from '@eo-locale/react'
import { MultiSiteContext } from 'src/driver/MultisiteContext'
import messages from '../messages.json'
import routes from '../routes.json'

const BootSite: React.FC = ({ children }) => {
  const locales = [{ messages, language: 'en-us' }]

  return (
    <TranslationsProvider language={'en-us'} locales={locales}>
      <MultiSiteContext.Provider value={{ routes }}>
        {children}
      </MultiSiteContext.Provider>
    </TranslationsProvider>
  )
}

export default BootSite
