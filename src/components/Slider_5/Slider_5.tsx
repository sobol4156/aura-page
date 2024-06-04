import { useState } from 'react'
import './Slider_5.less'

const Slider_5 = () => {
    const [currentSlide, setCurrenSlide] = useState(0)

    const animationScene = () => {

        switch (currentSlide) {
            case 0:
                return 'animate1'
            case 1:
                return 'animate2'
            case 2:
                return 'animate3'
            case 3:
                return 'animate4'
            default:
                return ''
        }
        
    }

    return (
        <section className="slider">
            <div className="slider__content">
                <h2 className='slider__title'><img src="https://live.verstaem.online/aura/img/fire.png" alt="" /> <span>Новые стикеры</span></h2>
                <div className='slider__wrapper'>
                    <div className={`slider__current ${animationScene()}`}>
                        <div className='slide1 slider-slide'>
                            <picture>
                                <img src="https://live.verstaem.online/aura/img/new-1.png" alt="" />
                            </picture>
                            <picture>
                                <img src="https://live.verstaem.online/aura/img/new-2.png" alt="" />
                            </picture>
                            <picture>
                                <img src="https://live.verstaem.online/aura/img/new-3.png" alt="" />
                            </picture>
                        </div>
                        <div className='slide2 slider-slide'>
                            <picture>
                                <img src="https://live.verstaem.online/aura/img/new-4.png" alt="" />
                            </picture>
                            <picture>
                                <img src="https://live.verstaem.online/aura/img/new-5.png" alt="" />
                            </picture>
                        </div>
                        <div className='slide3 slider-slide'>
                            <picture>
                                <img src="https://live.verstaem.online/aura/img/new-6.png" alt="" />
                            </picture>
                            <picture>
                                <img src="https://live.verstaem.online/aura/img/new-7.png" alt="" />
                            </picture>
                            <picture>
                                <img src="https://live.verstaem.online/aura/img/new-8.png" alt="" />
                            </picture>
                        </div>
                        <div className='slide4 slider-slide'>
                            <picture>
                                <img src="https://live.verstaem.online/aura/img/new-9.png" alt="" />
                            </picture>
                        </div>
                    </div>
                </div>
                <div className='slider__buttons'>
                    <div className='slider__menu-btn'>
                        <div
                            onClick={() => { setCurrenSlide(0) }}
                            className={!currentSlide ? 'slide-btn slide-selected' : 'slide-btn'}>
                            <span>1</span>
                        </div>
                        <div
                            onClick={() => { setCurrenSlide(1) }}
                            className={currentSlide === 1 ? 'slide-btn slide-selected' : 'slide-btn'}>
                            <span>2</span>
                        </div>
                        <div
                            onClick={() => { setCurrenSlide(2) }}
                            className={currentSlide === 2 ? 'slide-btn slide-selected' : 'slide-btn'}>
                            <span>3</span>
                        </div>
                        <div
                            onClick={() => { setCurrenSlide(3) }}
                            className={currentSlide === 3 ? 'slide-btn slide-selected' : 'slide-btn'}>
                            <span>4</span>
                        </div>
                        {/* <div className='slide-btn'><span>5</span></div>
                        <div className='slide-btn'><span>6</span></div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider_5
