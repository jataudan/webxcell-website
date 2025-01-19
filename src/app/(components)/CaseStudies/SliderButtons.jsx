'use client';

import Image from 'next/image';
import { useSwiper } from 'swiper/react';

const SliderButtons = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <Image src="/assets/case-studies/left.png" alt="" width={86} height={86} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <Image src="/assets/case-studies/right.png" alt="" width={86} height={86} />
      </button>
    </div>
  );
};

export default SliderButtons;
