import React, { useCallback, useLayoutEffect, useState, FC } from 'react'

interface IUseDimension {
  responsive?: boolean
}

export const useDimension: FC<IUseDimension> = ({ responsive = true }) => {
  const [dimensions, setDimensions] = useState(null)
  const [element, setElement] = useState(null)
  const getDimensions = (element: any) => element.getBoundingClientRect()
  const hook = useCallback((element) => {

  }, [])

  return (
    <div></div>
  )
}
