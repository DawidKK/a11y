import React, { useContext } from 'react'
import cn from 'classnames'
import { Context } from '../context'

const Layout = ({ children }) => {
  const [context, setContext] = useContext(Context)
  return (
    <div className={cn({ '-high-contrast': context })}>
      <header>
        <button className="btn" onClick={() => setContext(!context)}>switch to high contrast</button>
        {context ? 'on' : 'off'}
      </header>
      <main role="main">
        {children}
      </main>
    </div>
  )
}

export default Layout
