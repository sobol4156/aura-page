import {  useRef, useState } from 'react'
import './Slider_5.less'

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import SwiperCore from 'swiper';
// Import Swiper styles
import 'swiper/css';


const Slider_5 = () => {
const [currentSlide, setCurrentSlide] = useState<number>(0)
const swiperRef = useRef<SwiperRef>(null);

    const goToSlide = (index: number) => {
        
        if (swiperRef.current && swiperRef.current.swiper) {
            setCurrentSlide(index)
            swiperRef.current.swiper.slideTo(index);
        }
    };

    const handleSlideChange = (swiper: SwiperCore) => {
        setCurrentSlide(swiper.activeIndex);
    };

return (
    <section className="slider">
        <div className="slider__content">
            <h2 className='slider__title'>
                <img src="https://live.verstaem.online/aura/img/fire.png" alt="" />
                <span>Новые стикеры</span>
            </h2>
            <div className='slider__swiper'>
            <Swiper
                ref={swiperRef}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                
            >
                <SwiperSlide>
                    <div className='slide-content'>
                        <div>
                            <img src="https://live.verstaem.online/aura/img/new-1.png" alt="" />
                        </div>

                        <div>
                            <img src="https://live.verstaem.online/aura/img/new-2.png" alt="" />
                        </div>

                        <div>
                            <img src="https://live.verstaem.online/aura/img/new-3.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <div>
                            <img src="https://live.verstaem.online/aura/img/new-4.png" alt="" />
                        </div>

                        <div>
                            <img src="https://live.verstaem.online/aura/img/new-5.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <div>
                            <img src="https://live.verstaem.online/aura/img/new-6.png" alt="" />
                        </div>

                        <div>
                            <img src="https://live.verstaem.online/aura/img/new-7.png" alt="" />
                        </div>

                        <div>
                            <img src="https://live.verstaem.online/aura/img/new-8.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <div>
                            <img src="https://live.verstaem.online/aura/img/new-9.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            

            <div className='slider__buttons'>
                <div className='slider__menu-btn'>
                    <div
                        onClick={() => goToSlide(0)}
                        className={!currentSlide ? 'slide-btn slide-selected' : 'slide-btn'}>
                        <span>1</span>
                    </div>
                    <div
                        onClick={() => goToSlide(1)}
                        className={currentSlide === 1 ? 'slide-btn slide-selected' : 'slide-btn'}>
                        <span>2</span>
                    </div>
                    <div
                        onClick={() => goToSlide(2)}
                        className={currentSlide === 2 ? 'slide-btn slide-selected' : 'slide-btn'}>
                        <span>3</span>
                    </div>
                    <div
                        onClick={() => goToSlide(3)}
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
