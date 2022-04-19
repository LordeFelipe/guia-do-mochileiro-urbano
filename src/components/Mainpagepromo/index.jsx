
import { Container } from './styles'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import img from '../../assets/market.jpg'
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProductContext } from '../../contexts/useProductContext'

const Mainpagepromo = ({id}) => {

    const {products} = useProductContext();
    const product = products[id-1]
    
    let navigate = useNavigate()
    const [count, setCounter] = useState(product.likes);
    const [count2, setCounter2] = useState(product.deslikes);
    const increase = () => {
        setCounter(count => count + 1);
      };
      const increase2 = () => {
        setCounter2(count2 => count2 + 1);
      };
      const [disable, setDisable] = useState(false);
      const [disable2, setDisable2] = useState(false);
      const buttoncall = () => {
          increase();
          setDisable(true);
          setDisable2(true);
     }
     const buttoncall2 = () => {
        increase2();
        setDisable(true);
        setDisable2(true);
   }
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
                <button className="details" onClick={() => navigate('/products/1')}> Detalhes </button>
                <div className="like-deslike">
                    <div className='like'>
                    <button disabled={disable} onClick={buttoncall}><BiLike size={"5vh"} color={"green"}/></button>
                    <p> {count} </p>
                    </div>
                    <div className="deslike">
                    <button disabled={disable2} onClick={buttoncall2}><BiDislike size={"5vh"} color ={"red"}/></button>
                    <p>{count2} </p>
                    </div>
                </div>
                </div>
            </div>
         </Container>
    )
}

export default Mainpagepromo 
