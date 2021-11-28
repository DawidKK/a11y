import React, { useContext } from 'react';
import { Context } from '../context'

const Layout = ({ children }) => {
  const [context, setContext] = useContext(Context)
  return (
    <div>
      <header>
        <button onClick={() => setContext(!context)}>switch to high contrast</button>
        {context ? 'on' : 'off'}
      </header>
      <main role="main">
        {children}
      </main>
    </div>
  )
}

export default Layout
