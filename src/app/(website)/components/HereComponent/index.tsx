'use client';
import React, { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import hero_banner from '../../../../../public/assets/images/home/hero_banner-bg.png';
import bgGrid from '../../../../../public/assets/images/home/bg_grid.png';
import bgImag2 from '../../../../../public/assets/images/home//bgImag2.png';

import cartoonMegaphones from '../../../../../public/assets/images/home/cartoon-megaphones.png';
import headerImage from '../../../../../public/assets/images/home/headerImage (2).png';

import star from '../../../../../public/assets//icons/star.png';

import Image from 'next/image';
import Button from '../../common/Button';
import GetQuoteModal from '../popup/GetQuoteModal';
import SaveAndCancel from '../../common/SaveAndCancel';
import { FaLocationArrow } from 'react-icons/fa6';
import Certificate from '../home/Certificate';

const HereComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full">
      <Image
        src={hero_banner}
        fill
        width={undefined}
        height={undefined}
        alt="d"
        className="object-cover"
        priority
      />
      <MaxWidthWrapper className="py-[2rem] lg:pb-[5rem] lg:pt-[9rem]">
        {/* <Image
          src={bgGrid}
          fill
          width={undefined}
          height={undefined}
          alt="d"
          className="object-cover"
          priority
        /> */}
        {/* <Image
          src={headerImage}
          width={1220}
          height={240}
          alt="32"
          className="hidden lg:block"
        /> */}
        <div className="relative">
          <div className="animate-step1 absolute left-[160px] top-[90px] cursor-pointer">
            <p className="font-Outfit border-[1px] border-[#FB910024] bg-white px-[1rem] py-1 text-[12px] font-normal hover:bg-[#F28F17] hover:text-white">
              Adverting{' '}
            </p>
            <FaLocationArrow
              size={12}
              className="absolute -bottom-2 -right-5 -rotate-90 text-[#F28F17]"
            />
          </div>
          <div className="animate-step2 absolute right-[160px] top-[90px] cursor-pointer delay-200">
            <p className="font-Outfit border-[1px] border-[#FB910024] bg-white px-[1rem] py-1 text-[12px] font-normal hover:bg-[#F28F17] hover:text-white">
              Analytics{' '}
            </p>
            <FaLocationArrow
              size={12}
              className="absolute -bottom-2 -right-5 -rotate-90 text-[#F28F17]"
            />
          </div>
          <div className="animate-step3 delay-400 absolute left-[150px] top-[340px] cursor-pointer">
            <p className="font-Outfit border-[1px] border-[#FB910024] bg-white px-[1rem] py-1 text-[12px] font-normal hover:bg-[#F28F17] hover:text-white">
              Digital{' '}
            </p>
            <FaLocationArrow
              size={12}
              className="absolute -bottom-2 -right-5 -rotate-90 text-[#F28F17]"
            />
          </div>
          <div className="animate-step4 delay-600 absolute right-[350px] top-[340px] cursor-pointer">
            <p className="font-Outfit border-[1px] border-[#FB910024] bg-white px-[1rem] py-1 text-[12px] font-normal hover:bg-[#F28F17] hover:text-white">
              Insights{' '}
            </p>
            <FaLocationArrow
              size={12}
              className="absolute -bottom-2 -right-5 -rotate-90 text-[#F28F17]"
            />
          </div>
          <div className="flex justify-center gap-2">
            <span className="relative my-auto h-[19px] w-[21px]">
              <Image
                src={star}
                fill
                alt="d "
                className="my-auto object-cover"
              />
            </span>
            <span className="text-md font-normal text-[#000000]">
              WELCOME TO ADAIRED
            </span>
          </div>
          <p className="font-Outfit text-upercase text-center text-[92.46px] font-[700] tracking-tighter text-[#1B5A96]">
            THE DRIVING FORCE
          </p>
          <p className="font-Outfit text-center text-[92.46px] font-[700] leading-[62px] tracking-tighter text-[#000000]">
            Behind The Brands That Lead
          </p>
          <p className="font-Outfit px-[15%] py-[2.5rem] text-center text-xs font-normal leading-[28px] text-[#000000]">
            In a world where thousands of brands compete for a moment's
            attention, being seen isn’t enough. You want to be remembered,
            right? And that’s where Adaired Digital Media comes in. Offering a
            full-service, 360° digital strategy for your business, helping you
            rise above the noise and claim your space in the digital world.
          </p>
          <div className="flex justify-center gap-2">
            <SaveAndCancel name="Get a Quote" />
          </div>
        </div>
      </MaxWidthWrapper>
      <Certificate className="px-[5%] pb-[4.5rem]" />

      {<GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />}
    </div>
  );
};

export default HereComponent;
