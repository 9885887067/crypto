// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyUrl} = cryptoCurrencyDetails

  return (
    <li className="list-item">
      <div className="image-container">
        <img src={currencyUrl} alt={currencyName} />
        <p className="currencyName">{currencyName}</p>
      </div>
      <div className="container">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
