
import './App.css'
import Header from './components/Header_1/Header'
import PlatformOfStickers_2 from './components/PlatformOfStickers_2/PlatformOfStickers_2'
import Aiction_3 from './components/Auction_3/Aiction_3'
import OtherAuction_4 from './components/OtherAuction_4/OtherAuction_4'
import Slider_5 from './components/Slider_5/Slider_5'
import Email_6 from './components/Email_6/Email_6'
import Author_7 from './components/Author_7/Author_7'
import TopSeller_8 from './components/TopSeller_8/TopSeller_8'
import Hit_9 from './components/Hit_9/Hit_9'
import Footer_10 from './components/Footer_10/Footer_10'

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
            <Slider_5/>
            <Email_6/>
            <Author_7/>
            <TopSeller_8/>
            <Hit_9/>
      </main>
      <footer>
        <Footer_10/>
      </footer>
    </>
  )
}

export default App
