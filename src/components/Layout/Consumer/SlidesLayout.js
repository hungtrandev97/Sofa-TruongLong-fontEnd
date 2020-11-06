import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import SwiperCore, { Pagination, Lazy, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/lazy/lazy.scss";
import "./SlidesLayout.css";

// install Swiper components
SwiperCore.use([Pagination, Lazy, Autoplay, EffectFade]);

const ItemSwiper = ({
  introText,
  smallTitle,
  bgImage,
  isLongText,
  titleStyles,
}) => {
  return (
    <div className="LoginSwiper__itemSwiperContainer">
      <div
        style={{
          ...titleStyles,
        }}
        className={classnames(
          "LoginSwiper__introText",
          isLongText ? "LoginSwiper__introText_LongText" : ""
        )}
        // isLongText={isLongText}
      >
        {introText}
      </div>
      {smallTitle && (
        <div className="mt-2 LoginSwiper__styledSmallTitle">{smallTitle}</div>
      )}
      {bgImage && <img className="" src={bgImage} alt="Slide" />}
    </div>
  );
};
ItemSwiper.propTypes = {
  introText: PropTypes.string,
  smallTitle: PropTypes.string,
  bgImage: PropTypes.string,
  isLongText: PropTypes.bool,
  titleStyles: PropTypes.shape({}),
};
ItemSwiper.defaultProps = {
  introText: "",
  smallTitle: "",
  bgImage: "",
  isLongText: false,
  titleStyles: {},
};

function LoginSwiper({ slides, titleStyles }) {
  return (
    <div className="LoginSwiper__container">
      {/* Swiper */}
      <Swiper
        onSlideChange={() => {}}
        pagination={{ clickable: true }}
        watchOverflow // hide pagination if empty slides, or 1 slide
        updateOnWindowResize
        autoplay
        fadeEffect={{
          crossFade: true,
        }}
      >
        {slides.map((slide, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              <ItemSwiper
                titleStyles={titleStyles}
                introText={slide.title}
                smallTitle={slide.smallTitle}
                isLongText
                bgImage={slide.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

LoginSwiper.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  titleStyles: PropTypes.shape({}),
};
LoginSwiper.defaultProps = {
  slides: [],
  titleStyles: {},
};

export default LoginSwiper;
