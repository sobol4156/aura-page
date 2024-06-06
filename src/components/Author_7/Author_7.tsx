import './Author_7.less'

const Author_7 = () => {
    return (
        <section className='author'>
            <div className='author__content'>
                <div className='author__text'>
                    <h2 className='author__title'>Стать автором</h2>
                    <p className='author__paragraph-1'>Если ты художник или стремишься им стать — добро пожаловать к нам!</p>
                    <p className='author__paragraph-2'>Отправь нам от трёх до пяти своих работ и напиши свой ник в телеграме. Если наши кураторы решат, что нам по пути, то мы обязательно свяжемся с тобой и обговорим условия сотрудничества! <strong>Удачи!</strong></p>
                    <img src="https://live.verstaem.online/aura/img/become-decorate.png" alt="" />
                </div>
                <div className='author__form'>
                    <label className='author__add'>
                        <input type="file" accept='image/*'/>
                        <span className='author__add-btn'></span>
                        <span className='author__add-text'>Прикрепить работы (.jpeg / .png)</span>
                    </label>
                    <input className='author__connect' type="text" placeholder='@telegram_nickname'/>
                        {/* взял из Auction_3 */}
                        <button className='email__btn auction__bet-btn btn--fill'>
                            <span>Отправить</span>
                        </button>
                </div>
            </div>
        </section>
    )
}

export default Author_7
