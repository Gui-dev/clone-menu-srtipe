import React, { createContext, useCallback, useState, useEffect } from 'react';

interface IContextProps {
  options: IOptionsProps[],
  targetId: string | null,
  setTargetId: (targetId: string) => void,
  cachedId: string | null,
  setCachedId: (cachedId: string) => void,
  registerOptions: (id: string, optionDimensions: string, optionCenterX: string,
    WrapperContent: string, backgroundHeight: string) => void,
  updateOptionsProps: (optionId: string, props: object) => void,
  getOptionById: (id: string) => void,
  deleteOptionById: (id: string) => void
}

const Context = createContext<IContextProps>( {} as IContextProps )

interface IOptionsProps {
  id: string
  optionDimensions: string
  optionCenterX: string
  WrapperContent: string
  backgroundHeight: string
}

export const DropdownProvider: React.FC = ( { children } ) => {

  const [ options, setOptions ] = useState<IOptionsProps[]>( [] )
  const [ targetId, setTargetId ] = useState<string | null>( null )
  const [ cachedId, setCachedId ] = useState<string | null>( null )

  const registerOptions = useCallback( ( {
    id,
    optionDimensions,
    optionCenterX,
    WrapperContent,
    backgroundHeight
  } ) => {
    setOptions( ( items ) => [
      ...items,
       {
        id,
        optionDimensions,
        optionCenterX,
        WrapperContent,
        backgroundHeight
       }
    ]  )
  }, [ setOptions ] )

  const updateOptionsProps = useCallback((optionId: string, props: object) => {
    setOptions(items => items.map(item => {
      if (item.id === optionId) {
        item = { ...item, ...props}
      }
      return item
    }))
  }, [setOptions])

  const getOptionById = useCallback((id: string) =>
    options.find((item) => item.id === id),
    [options]
  )

  const deleteOptionById = useCallback((id: string) => {
    setOptions(items => items.filter((item) => item.id !== id))
  }, [setOptions])

  useEffect(() => {
    if (targetId !== null) setCachedId(targetId)
  }, [targetId])

  return (
    <Context.Provider value={ {
      options, targetId, setTargetId, cachedId, setCachedId, registerOptions, updateOptionsProps,
      getOptionById, deleteOptionById
    } }>
      { children }
    </Context.Provider>
  )
}

