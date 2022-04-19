import { createContext, useContext, useState } from "react";

const ProductContext = createContext()

const ContextProvider = ({children}) => {

  const [products, setProducts] = useState([])

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