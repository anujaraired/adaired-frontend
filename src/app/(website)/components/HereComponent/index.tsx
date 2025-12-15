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
          <span className="">WELCOME TO ADAIRED</span>
        </div>
        <div className="gap- grid grid-cols-1 md:grid-cols-2">
          <div className="relative flex justify-between">
            <div className="w-[80%] md:w-[70%]">
              <h1 className="mt-4">
                The Driving Force Behind the Brands That Lead
              </h1>
            </div>
            <Image
              src={cartoonMegaphones}
              width={128}
              height={100}
              alt="32"
              className="md:top-1/5 absolute right-[20%] top-[10%]"
            />
          </div>
          <div className="pt-4 md:pt-0">
            <p className="">
              In a world where thousands of brands compete for a moment's
              attention, being seen isn’t enough. You want to be remembered,
              right? And that’s where Adaired Digital Media comes in. Offering a
              full-service, 360° digital strategy for your business, helping you
              rise above the noise and claim your space in the digital world.
            </p>
            <div className="flex gap-2 py-4">
              <p className="text-xxs text-black md:text-sm">
                🚀 Transform Your Business
              </p>
              <p className="text-xxs text-black md:text-sm">🎯 Engage & Grow</p>
            </div>
            <Button name="Start Your Journey!" className="mt-3" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HereComponent;
