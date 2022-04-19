import { Container } from './styles'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import img from '../../assets/market.jpg'
import { useNavigate } from 'react-router-dom'

const PromotionRow = () => {
  const navigate = useNavigate()
  return(
    <Container>
      <div className="product">
        <img src={img} alt="" />
        <div className="info">
          <h2 className="title">Alface Verde</h2>
          <p className="old-price">De R$ 25,00</p>
          <p className="new-price">Por R$ 10,00</p>
        </div>
        <div className="buttons">
          <button className="details" onClick={() => navigate('/products/2')}> Detalhes </button>
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
        </div>
      </div>
    </Container>
  )
}

export default PromotionRow