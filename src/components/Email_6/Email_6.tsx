import { useState } from 'react'
import './Email_6.less'

const Email_6 = () => {
    const [agree, setAgree] = useState(false)
    return (
        <section className='email'>
            <div className='email__content'>
                <h2 className='email__title'>Будь в курсе новинок! Подпишись на рассылку!</h2>
                <form action="" className='email__form'>
                    <div className='email__inputs'>
                        <input type="name" placeholder='Имя' />
                        <input type="email" placeholder='E-mail' />
                    </div>
                        {/* взял из Auction_3 */}
                        <button className='email__btn auction__bet-btn btn--fill'>
                            <span>Подписаться</span>
                        </button>
                    <div onClick={() => {setAgree(!agree)}} className='email__contract'>
                        <span  className={`checkbox ${agree ? 'checkbox__active' : ''}`}></span>
                        <span className='checkbox__text'>Согласен на обработку персональных данных</span>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Email_6
