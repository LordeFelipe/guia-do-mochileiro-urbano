import { Container } from './styles'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import img from '../../assets/market.jpg'
import { useNavigate } from 'react-router-dom'
import { useProductContext } from '../../contexts/useProductContext'

const PromotionRow = ({id}) => {
  const navigate = useNavigate();
  const {products} = useProductContext();
  const product = products[id-1]
  return(
    <Container>
      <div className="product">
        <img src={product.img} alt="" />
        <div className="info">
          <h2 className="title">{product.name}</h2>
          <p className="old-price">De R$ {product.oldPrice},00</p>
          <p className="new-price">Por R$ {product.newPrice},00</p>
        </div>
        <div className="buttons">
          <button className="details" onClick={() => navigate(`/products/${id}`)}> Detalhes </button>
          <div className="like-deslike">
            <div className='like'>
              <button><BiLike size={"7vh"}/></button>
              <p> {product.likes} </p>
            </div>
            <div className="deslike">
              <button><BiDislike size={"7vh"}/></button>
              <p> {product.deslikes} </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PromotionRow