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

  return (
    <Context.Provider value={ {

    } }>
      { children }
    </Context.Provider>
  )
}

