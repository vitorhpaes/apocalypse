import React, { createContext, useContext } from 'react'
import { SiteRoutes } from 'src/@config/Site/Routes'

interface MultiSiteProps {
  routes: SiteRoutes
  format: { [key: string]: string }
}

type iMultiSiteContext = MultiSiteProps

export const MultiSiteContext = createContext({} as iMultiSiteContext)

const MultiSiteContextProvider: React.FC<{
  value: iMultiSiteContext
}> = ({ children, value }) => {
  return (
    <MultiSiteContext.Provider value={value}>
      {children}
    </MultiSiteContext.Provider>
  )
}

export default MultiSiteContextProvider
export const useSite = () => useContext(MultiSiteContext)
