import { Container } from './styles'
import BackButton from '../../components/BackButton'
import img from '../../assets/market.jpg'
import PromotionRow from '../../components/PromotionRow'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductContext } from '../../contexts/useProductContext'

const PromotionsPage = () => {

  const { products, markets} = useProductContext();
  const {id} = useParams()
  const market = markets[id-1]

  let navigate = useNavigate()
  return(
    <Container>
      <BackButton/>
      <div className="sections">
        <section className="market-info">
          <img src={market.img} alt="" />  
          <div className="info-box">
            <h1 className="title">{market.name}</h1>
            <p>{market.address}</p>
            <p>{market.phone}</p>
            <button className="route">Traçar Rota</button>
            <button className="new-promotion" onClick={() => navigate('/cadastro-promocao')}>Cadastrar Promoção</button>
          </div>
        </section>
        <section className="title">
          <h1>Promoções</h1>
        </section>
        <section className="promotions">
          {
            products.map((product, key) => {
              return (<PromotionRow id={key+1}/>)
            })
          }
        </section>
      </div>
    </Container>
  )
}

export default PromotionsPage