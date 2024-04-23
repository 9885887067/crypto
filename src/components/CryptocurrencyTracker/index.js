import './index.css'
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrenciesData: [],
    isLoading:true
  }

  componentDidMount() {
    this.getCryptoList
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyUrl: each.currency_logo,
    }))

    this.setState({
      cryptoCurrenciesData: updateData,
      isLoading:false
    })
  }



  renderCurrencyList = () => {
    const {cryptoCurrenciesData} = this.state
    return <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
  }

  renderLoader=()=>(
  <div testid="loader">
  <Loader type="Rings" height={50} width={50}/>
  </div>

)


  render() {
    const {isLoading}=this.state
    return (
      <div className="crypto-container">{isLoading?this.renderLoader():this.renderCurrencyList()}</div>
      )
  }
}
export default CryptocurrencyTracker
