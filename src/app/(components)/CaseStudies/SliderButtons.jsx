"use client";

import Image from "next/image";

const SliderButtons = ({ containerStyles, btnStyles, onPrev, onNext }) => {
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={onPrev}>
        <Image
          src="/assets/case-studies/left.png"
          alt="Previous"
          width={86}
          height={86}
        />
      </button>
      <button className={btnStyles} onClick={onNext}>
        <Image
          src="/assets/case-studies/right.png"
          alt="Next"
          width={86}
          height={86}
        />
      </button>
    </div>
  );
};

export default SliderButtons;
