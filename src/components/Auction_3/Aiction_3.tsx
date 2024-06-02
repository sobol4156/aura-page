import './Auction_3.less'
import Witcher from './svg/Witcher.svg'

const Aiction_3 = () => {
    return (
        <section className='auction'>
            <h2>Аукцион <span></span></h2>
            <div className='auction__content'>
                <div>
                    <img src={Witcher} alt="" />
                    <span>Live auction</span>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <span>Serge_VM222</span>
                    </div>
                    <h3>Witcherrr_3 (xml_t5)</h3>
                    <div>
                        <div>
                            <span>Ставка:</span>
                            <span>0.10 ETH</span>
                            <span>$351.24</span>
                        </div>
                        <div>
                            <span>Окончание через:</span>
                            <div>
                                <div>
                                    <span>01</span>
                                    <span>Час</span>
                                </div>
                                <div>
                                    <span>48</span>
                                    <span>Мин</span>
                                </div>
                                <div>
                                    <span>47</span>
                                    <span>Сек</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>
                        <span>Сделать ставку</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Aiction_3
