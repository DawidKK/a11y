import { useNavigate } from "react-router-dom"

import Layout from '../../containers/Layout'

const List = props => {
  const navigate = useNavigate()
  return (
    <Layout>
      <nav>
        <ul className="navigation">
          <li className="navigation__item">
            <button className="navigation__button">Bike</button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button" onClick={() => navigate('/car-details')}>Car</button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button">Doll</button>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default List
