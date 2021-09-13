import React, {useState, useEffect} from 'react';
import Header from './Header';
import Coin from './Coin';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo, faSearch } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() =>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {setCoins(res.data)})
    .catch(error => console.log(error))
 
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  
  const fontawes = <FontAwesomeIcon icon={faSearch} />
  //MOVE COINS SEARCH IN THE HEADER
  //also make the header with a border around 
  //modify the css more so it's not like the opriginal 
  //maybe wven the names
  //make a line above the voins to tell what is what like in photo 
  //but don't go too far because the point is to upload it fast
  return (
    <>
      <Header handleChange={handleChange}/>
      <div className="coin-body">
        {filteredCoins.map(coin => {
          return (
            <Coin 
              key={coin.id} 
              name={coin.name} 
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          )
        })}
      </div>
    </>

  );
}

export default App;












/* the following were used in the program (to help me understand and for references when i write the description)
-events - handleChange with event
-forms
-api
-api call with anxios
-useEffect 
-hooks
-component based
-font awesome integration
-custom icons
*/
