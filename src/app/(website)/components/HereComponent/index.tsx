'use client';
import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import bgImage from '../../../../../public/assets/images/home/bgImage.png';
import bgGrid from '../../../../../public/assets/images/home/bg_grid.png';
import bgImag2 from '../../../../../public/assets/images/home//bgImag2.png';

import cartoonMegaphones from '../../../../../public/assets/images/home/cartoon-megaphones.png';
import headerImage from '../../../../../public/assets/images/home/headerImage.png';
import star from '../../../../../public/assets//icons/star.png';

import Image from 'next/image';
import Button from '../../common/Button';

const HereComponent = () => {
  return (
    <div className="relative w-full">
      <Image
        src={bgImage}
        fill
        width={undefined}
        height={undefined}
        alt="d"
        className="object-cover"
        priority
      />
      <Image
        src={bgImag2}
        fill
        width={undefined}
        height={undefined}
        alt="d"
        className="object-cover"
        priority
      />

      <MaxWidthWrapper className="py-[2rem] md:py-[8rem]">
        <Image
          src={bgGrid}
          fill
          width={undefined}
          height={undefined}
          alt="d"
          className="object-cover"
          priority
        />
        <Image
          src={headerImage}
          width={1220}
          height={240}
          alt="32"
          className="hidden md:block"
        />
        <div className="mt-4 flex gap-2 font-nunito text-xs text-black md:mt-20">
          <Image src={star} width={18} height={17} alt="d" />
          <span className="text-[14px] md:text-xs">WELCOME TO ADAIRED</span>
        </div>
        <div className="gap- grid grid-cols-1 md:grid-cols-2">
          <div className="relative flex justify-between">
            <div className="w-[80%] md:w-[65%]">
              <p className="mt-4 text-3xl font-bold text-black md:text-lg md:text-lg2 md:font-medium md:leading-tight">
                Digital Agency That Turns Businesses Into Brands
              </p>
            </div>
            <Image
              src={cartoonMegaphones}
              width={128}
              height={100}
              alt="32"
              className="absolute right-0 top-0 mt-1 md:right-1/4 md:top-1/3 md:mr-5"
            />
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-[14px] text-black md:text-xs">
              We’re a digital agency that transforms businesses into brands.
              With the perfect blend of strategy and creativity, we help you
              stand out, connect with your audience, and grow with impact.
            </p>
            <div className="flex gap-2 py-4">
              <p className="text-[12px] text-black md:text-xs">
                🚀 Transform Your Business
              </p>
              <p className="text-[10px] text-black md:text-xs">
                🎯 Engage & Grow
              </p>
            </div>
            <Button name="Book A Demo" className="mt-3" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HereComponent;
