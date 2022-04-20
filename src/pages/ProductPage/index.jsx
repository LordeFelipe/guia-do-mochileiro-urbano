import { Container } from './styles'
import BackButton from '../../components/BackButton'
import img from '../../assets/market.jpg'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const ProductPage = () => {

  let navigate = useNavigate()
  return(
    <Container>
      <BackButton/>
      <div className="sections">
        <section className="first-column">
          <h1>Alface Verde</h1>
          <div className="image-box">
            <img src={img} alt="" />
          </div>
          <div className="like-deslike">
            <div className='like'>
              <button><BiLike size={"7vh"}/></button>
              <p> 52 </p>
            </div>
            <div className="deslike">
              <button><BiDislike size={"7vh"}/></button>
              <p>30 </p>
            </div>
          </div>
          <button className='route'>Traçar Rota</button>
        </section>
        <section className="second-column">
          <p className="old-price">De R$ 25,00</p>
          <p className="new-price">Por R$ 10,00</p>
          <div className="info-box">
            <p>Promoção válida até o dia 20/05. A promoção só vale para compras de mais de 2kg de Alface Verde.</p>
          </div>
          <div className="market">
            <img src={img} alt="" />  
            <div className="market-info">
              <h1 className="title">Carrefour - Asa Norte</h1>
              <p>Via W3 Norte, 504/505 - Bloco A</p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default ProductPage