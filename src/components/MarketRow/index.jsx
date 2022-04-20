import { Container } from './styles'
import img from '../../assets/market.jpg'

const MarketRow = () => {
  return(
    <Container>
      <div className="product">
        <img src={img} alt="" />
        <div className="info">
          <h2 className="title">Carrefour - Asa Norte</h2>
          <p className="old-price">Via W3 Norte, 504/505 - Bloco A</p>
        </div>
        <div className="buttons">
          <button className="details"> Detalhes </button>
          <button className="route">Traçar Rota</button>
        </div>
      </div>
    </Container>
  )
}

export default MarketRow