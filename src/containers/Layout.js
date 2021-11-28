import React, { useContext } from 'react';
import { Context } from '../context'

const Layout = ({ children }) => {
  const [context, setContext] = useContext(Context)
  return (
    <div>
      <header>
        <button onClick={() => setContext(!context)}>switch to hight contrast</button>
        {context ? 'on' : 'off'}
      </header>
      {children}
    </div>
  )
}

export default Layout
