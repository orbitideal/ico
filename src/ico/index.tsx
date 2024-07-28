// Ico.tsx
import React from 'react'
import map from './map'

interface IcoProps {
  name: string
  set?: string
  className?: string
  notFoundIcon?: string
}

const Ico: React.FC<IcoProps> = ({
  name,
  set = 'mdi',
  notFoundIcon = 'alert',
  className = '',
}) => {
  let iconClass = map[name]?.[set]
  if (!iconClass) {
    // return null;
    iconClass = map[notFoundIcon]?.[set]
    // console.warn(`Icon "${name}" for set "${set}" not found.`)
  }

  const fullClassName = `${iconClass} ${className}`

  return <span aria-hidden className={fullClassName}></span>
}

export default Ico
