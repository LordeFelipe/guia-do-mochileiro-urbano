import { createContext, useContext, useState } from "react";
import img from "../assets/default.png"
import market from "../assets/market.jpg"

const ProductContext = createContext()

const ContextProvider = ({children}) => {

  const [products, setProducts] = useState([
    {
      name: 'Alfaca Verde',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac.",
      oldPrice: 15,
      newPrice: 20,
      likes: 53,
      deslikes: 20,
      img: img
    },
    {
      name: 'Sabonete',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac.",
      oldPrice: 150,
      newPrice: 25,
      likes: 150,
      deslikes: 15,
      img: img
    },
    {
      name: 'Maçã',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac.",
      oldPrice: 8,
      newPrice: 4,
      likes: 10,
      deslikes: 15,
      img: img
    },
  ])

  const [markets, setMarkets] = useState([
    {
      name: 'Carrefour - Asa Norte',
      address: 'Via W3 Norte, 504/505 - Bloco A',
      phone: '61 3440-5757',
      img: market
    },
    {
      name: 'Carrefour - Asa Sul',
      address: 'Via W3 Sul, 504/505 - Bloco A',
      phone: '61 3440-5757',
      img: market
    }

  ])

  const addProduct = (product) => {
    product.img = img
    product.likes = 0
    product.deslikes = 0
    var newProducts = products
    newProducts.push(product)
    setProducts(newProducts)
  }

  return(
    <ProductContext.Provider value={{products, setProducts, markets, setMarkets, addProduct}}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
    const context = useContext(ProductContext)

    return context
}

export default ContextProvider