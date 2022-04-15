import { Container } from './styles'
import BackButton from '../../components/BackButton'
import img from '../../assets/market.jpg'
import PromotionRow from '../../components/PromotionRow'
import { useNavigate } from 'react-router-dom'

const PromotionsPage = () => {

  let navigate = useNavigate()
  return(
    <Container>
      <BackButton/>
      <div className="sections">
        <section className="market-info">
          <img src={img} alt="" />  
          <div className="info-box">
            <h1 className="title">Carrefour - Asa Norte</h1>
            <p>Via W3 Norte, 504/505 - Bloco A</p>
            <p>Telefone: 61 3440-5757</p>
            <button className="route">Traçar Rota</button>
            <button className="new-promotion" onClick={() => navigate('/cadastro-promocao')}>Cadastrar Promoção</button>
          </div>
        </section>
        <section className="title">
          <h1>Promoções</h1>
        </section>
        <section className="promotions">
          <PromotionRow/>
          <PromotionRow/>
          <PromotionRow/>
        </section>
      </div>
    </Container>
  )
}

export default PromotionsPage