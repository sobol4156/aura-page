
import './App.css'
import Header from './components/Header_1/Header'
import PlatformOfStickers_2 from './components/PlatformOfStickers_2/PlatformOfStickers_2'
import Aiction_3 from './components/Auction_3/Aiction_3'
import OtherAuction_4 from './components/OtherAuction_4/OtherAuction_4'

function App() {


  return (
    <>
      <header>
        <Header />
      </header>
      <main>  
            <PlatformOfStickers_2/>
            <Aiction_3/>
            <OtherAuction_4/>
      </main>
    </>
  )
}

export default App
