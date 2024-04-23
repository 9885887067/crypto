// Write your JS code here

import './index.css'

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  rendercryptoCurrencyHeader = () => {
    return (
      <div className="list-header">
        <p className="coin-type">Coin Type</p>
        <div className="u-e-container">
          <p className="usd">USD</p>
          <p className="euro">EURO</p>
        </div>
      </div>
    )
  }

  renderCryptocurrencyview = () => {
    const {cryptoCurrenciesData} = this.props
    return (
      <div className="cryptocurrency-list-container">
        {this.rendercryptoCurrencyHeader()}
        <ul className="cryptocurrency-list">
          {cryptoCurrenciesData.map(currency => (
            <CryptocurrencyItem
              key={currency.id}
              cryptoCurrencyDetails={currency}
            />
          ))}
        </ul>
      </div>
    )
  }
  render() {
    return (
      <div className="Cryptocurrencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />
        {this.renderCryptocurrencyview()}
      </div>
    )
  }
}

export default CryptocurrenciesList
