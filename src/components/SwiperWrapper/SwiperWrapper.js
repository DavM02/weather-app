import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
function SwiperWrapper(props) {

    const swiperSettings = {
        slidesPerView: 1,
        loop: false,
        pagination: {
            clickable: true,
        },
        spaceBetween: 22 
    };

    return <Swiper {...swiperSettings} modules={[Pagination]}>
        {props.children}
    </ Swiper>
}

export default SwiperWrapper