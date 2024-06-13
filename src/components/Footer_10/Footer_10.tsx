import './Footer_10.less'

const Footer_10 = () => {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__container'>
          <a href="#">
            <img src="https://live.verstaem.online/aura/img/logo.svg" alt="" />
          </a>

          <div className='footer__nav'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href="">Соглашение</a>
              </li>
              <li className='footer__item'>
                <a href="">Лицензия</a>
              </li>
              <li className='footer__item'>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
        </div>


      </div>
      <div className='footer__lastText'>
        <span>AURA® | 2024</span>
      </div>
    </div>
  )
}

export default Footer_10
