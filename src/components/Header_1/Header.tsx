import './Header.less'
import Logo from './svg/logo.svg';
import Wallet from './svg/wallet.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__content'>
        <a className='logo' href="#"><img src={Logo} alt="" /></a>
        <nav>
          <ul>
            <li>Авторы</li>
            <li>Коллекции</li>
            <li>Сервисы</li>
          </ul>
        </nav>
        <button className='btn-wallet'>Кошелёк</button>
        <a className='icon-wallet' href="#"><img src={Wallet} alt="" /></a> 
      </div>

    </div>
  )
}

export default Header
