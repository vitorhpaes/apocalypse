import React from 'react'
import { TranslationsProvider } from '@eo-locale/react'
import { MultiSiteContext } from 'src/driver/MultisiteContext'
import messages from '../messages.json'
import routes from '../routes.json'
import format from '../format.json'

const BootSite: React.FC = ({ children }) => {
  const locales = [{ messages, language: 'fr-fr' }]

  return (
    <TranslationsProvider language={'fr-fr'} locales={locales}>
      <MultiSiteContext.Provider value={{ routes, format }}>
        {children}
      </MultiSiteContext.Provider>
    </TranslationsProvider>
  )
}

export default BootSite
