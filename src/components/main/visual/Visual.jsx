import { Container } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // 기본 스타일
import "swiper/css/navigation"; // 네비게이션 버튼 스타일
const Visual = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="./images/visual1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/visual2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/visual3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/visual4.webp" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Visual;
