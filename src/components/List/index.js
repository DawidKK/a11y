import { useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import Layout from '../../containers/Layout'

const List = props => {
  const headerNode = useRef(null)
  useEffect(() => {
    headerNode.current.focus()
  }, [])
  const navigate = useNavigate()

  return (
    <Layout>
      <h1 tabIndex={1} ref={headerNode} aria-label="View with three items to click: Bike, Car and doll ">Accessibility app</h1>
      <nav>
        <ul role="navigation" aria-label="Main header with links to click" className="navigation">
          <li className="navigation__item">
            <button tabIndex={0} className="navigation__button">Bike</button>
          </li>
          <li className="navigation__item">
            <button tabIndex={0} aria-label="Click to go to car details" className="navigation__button" onClick={() => navigate('/car-details')}>Car</button>
          </li>
          <li className="navigation__item">
            <button tabIndex={0} className="navigation__button">Doll</button>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default List
