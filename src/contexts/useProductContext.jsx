import { createContext, useContext, useState } from "react";
import img from "../assets/default.png"

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
  ])

  const [markets, setMarkets] = useState([])

  const addProduct = (product) => {
    console.log("oi")
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