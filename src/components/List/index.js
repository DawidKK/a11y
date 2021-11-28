import { useNavigate } from "react-router-dom"

const List = props => {
  const navigate = useNavigate()
  return (
    <ul>
      <li>
        <button>Bike</button>
      </li>
      <li>
        <button onClick={() => navigate('/car-details')}>Car</button>
      </li>
      <li>
        <button>Doll</button>
      </li>
    </ul>
  )
}

export default List
