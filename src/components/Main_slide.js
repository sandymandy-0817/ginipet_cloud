import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Main_slide(props) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{position:'relative'}}>
                    <img src={`${process.env.PUBLIC_URL}/images/mo_bg_full_23.png`} />
                    <div style={{position: 'absolute', top: '0px'}}>
                        <img src={`${process.env.PUBLIC_URL}/images/mo_bg_23.png`} />
                        <img src={`${process.env.PUBLIC_URL}/images/mo_txt_01.png`} style={{position: 'absolute', left: '0px'}}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{position:'relative'}}>
                    <img src={`${process.env.PUBLIC_URL}/images/mo_bg_01.jpg`} />
                    <div style={{position: 'absolute', top: '0px'}}>
                        <img src={`${process.env.PUBLIC_URL}/images/mo_txt_01.png`} style={{position: 'absolute', left: '0px'}}/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Main_slide;