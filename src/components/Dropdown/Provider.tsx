import React, { createContext, useCallback, useState } from 'react';

const Context = createContext( {} )


interface IOptions {
  id: string
  optionDimensions: string
  optionCenterX: string
  WrapperContent: string
  backgroundHeight: string
}

export const DropdownProvider: React.FC = ( { children } ) => {

  const [ options, setOptions ] = useState<IOptions[]>( [] )
  const [ targetId, setTargetId ] = useState( null )
  const [ cacheId, setCacheId ] = useState( null )

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

  return (
    <Context.Provider value={ {

    } }>
      { children }
    </Context.Provider>
  )
}

