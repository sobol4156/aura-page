import './Email_6.less'

const Email_6 = () => {
    return (
        <section className='email'>
            <div className='email__content'>
                <h2 className='email__title'>Будь в курсе новинок! Подпишись на рассылку!</h2>
                <div className='email__inputs'>
                    <input type="text" placeholder='Имя' />
                    <input type="text" placeholder='E-mail' />
                </div>
                <button className='email__btn'>
                    <span className='email__btn-text'>Подписаться</span>
                </button>
                <div className='email__contract'>
                    <input type="checkbox" />
                    <span>Согласен на обработку персональных данных</span>
                </div>
            </div>
        </section>
    )
}

export default Email_6
