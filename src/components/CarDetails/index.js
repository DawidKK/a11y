import { useRef, useEffect } from 'react'

import Layout from '../../containers/Layout'
const CarDetails = props => {
  const headerNode = useRef(null)
  useEffect(() => {
    headerNode.current.focus()
  }, [])

  return (
    <Layout>
      <div className="details">
        <header>
          <h1 ref={headerNode} tabIndex={0} className="details__header">Car details</h1>
        </header>
        <p tabIndex={0} aria-label="Car details description. Car details are written here" className="details__description">
          Car details are written here
        </p>
      </div>
    </Layout>
  )
}

export default CarDetails
