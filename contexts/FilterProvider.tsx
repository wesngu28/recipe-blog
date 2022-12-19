'use client'

import { createContext, useState } from 'react'

type FilterContextProviderProps = {
  children: React.ReactNode
}

type FilterContextType = {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const FilterContext = createContext<FilterContextType | null>(null)

export const FilterContextProvider = ({ children }: FilterContextProviderProps) => {
  const [filter, setFilter] = useState<string>('')
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>
  )
}