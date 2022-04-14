import { Container } from './styles'
import BackButton from '../../components/BackButton'
import {AiOutlineLike} from 'react-icons/ai'
import {AiOutlineDislike} from 'react-icons/ai'
import img from '../../assets/market.jpg'

const PromotionsPage = () => {
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
            <button className="new-promotion">Cadastrar Promoção</button>
          </div>
        </section>
        <section className="title">
          <h1>Promoções</h1>
        </section>
        <section className="promotions">
          <div className="product">
            <img src={img} alt="" />
            <div className="info">
              <h2 className="title">Alface Verde</h2>
              <p className="old-price">De R$ 25,00</p>
              <p className="new-price">Por R$ 10,00</p>
            </div>
            <div className="buttons">
              <button className="details"> Detalhes </button>
              <div className="like-deslike">
                <div className='like'>
                  <button><AiOutlineLike size={"7vh"}/></button>
                  <p> 5 </p>
                </div>
                <div className="deslike">
                  <button><AiOutlineDislike size={"7vh"}/></button>
                  <p>30 </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default PromotionsPage