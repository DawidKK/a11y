import { useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import Layout from '../../containers/Layout'
const CarDetails = props => {
  const navigate = useNavigate()
  const headerNode = useRef(null)
  useEffect(() => {
    headerNode.current.focus()
  }, [])

  return (
    <Layout>
      <div className="details">
        <button className="btn" onClick={() => navigate('/')}>Go back</button>
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
