import { useState } from "react";
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency,setToCurrency] = useState("inr")
  const [count, setCount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0);  
  const currencyInfo = useCurrencyInfo(1);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
}
 
  return (
    <>
    
    </>
  )
}

export default App
