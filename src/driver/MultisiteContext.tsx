import React, { createContext, useContext } from 'react'

interface MultiSiteProps {
  routes: { [key: string]: string }
}

type iMultiSiteContext = MultiSiteProps | null

const initial = null

export const MultiSiteContext = createContext(initial as iMultiSiteContext)

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
