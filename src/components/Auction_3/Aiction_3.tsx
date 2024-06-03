import './Auction_3.less'
import Witcher from './svg/Witcher.svg'
import Avatar from './svg/avatar.svg'


const Aiction_3 = () => {
    return (
        <section className='auction'>

            <div className='auction__content'>
                <h2 className='auction__title'>Аукцион <span>Live auction</span></h2>
                <div className='auction__bet-content'>
                    <div className='auction__logo'>
                        <img src={Witcher} alt="" />
                    </div>
                    <div className='auction__bet'>
                        <div className='auction__bet-user'>
                            <img className='auction__bet-avatar' src={Avatar} alt="" />
                            <span className='auction__bet-nickName'>Serge_VM222</span>
                        </div>
                        <h3 className='auction__bet-subtitle'>Witcherrr_3 (xml_t5)</h3>
                        <div className='auction__bet-props'>
                            <div className='auction__bet-info'>
                                <span className='auction__bet-caption'>Ставка:</span>
                                <span className='auction__bet-price'>0.10 ETH</span>
                                <span className='auction__bet-dollar'>$351.24</span>
                            </div>
                            <div className='auction__timer'>
                                <span className='auction__timer-caption'>Окончание через:</span>
                                <div className='auction__timer-content'>
                                    <div className='auction__timer-hours'>
                                        <span className='auction__timer-value'>01</span>
                                        <span className='auction__timer-text'>Час</span>
                                    </div>
                                    <div className='auction__timer-minutes'>
                                        <span className='auction__timer-value'>48</span>
                                        <span className='auction__timer-text'>Мин</span>
                                    </div>
                                    <div className='auction__timer-seconds'>
                                        <span className='auction__timer-value'>47</span>
                                        <span className='auction__timer-text'>Сек</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='auction__bet-btn'>
                            <span>Сделать ставку</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Aiction_3
