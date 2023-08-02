import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const linkClasses = ' flex items-center gap-2 font-light px-3 py-2 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
const SideBarLink = ({ item }) => {
  const isDashboard = item.key === 'dashboard'
  const linkClass = isDashboard
    ? linkClasses + ' bg-indigo-300' // change the color according to your needs
    : linkClasses

  const { pathname } = useLocation()

  return (
    <Link to={item.path} className={classNames(pathname === item.path ? 'text-zinc-600' : '', linkClass)}>
      <span className=''>{item.icon}</span>
      {item.label}
    </Link>
  )
}

export default SideBarLink