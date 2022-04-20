import { Container } from './styles'
import img from '../../assets/market.jpg'
import { useProductContext } from '../../contexts/useProductContext'
import { useNavigate } from 'react-router-dom'

const MarketRow = ({id}) => {

  const navigate = useNavigate()
  const { markets } = useProductContext()
  const market = markets[id-1]
  return(
    <Container>
      <div className="market">
        <img src={img} alt="" />
        <div className="info">
          <h2 className="title">{market.name}</h2>
          <p className="address">{market.address}</p>
        </div>
        <div className="buttons">
          <button className="details" onClick={() => navigate(`/markets/${id}`)}> Detalhes </button>
          <button className="route">Traçar Rota</button>
        </div>
      </div>
    </Container>
  )
}

export default MarketRow