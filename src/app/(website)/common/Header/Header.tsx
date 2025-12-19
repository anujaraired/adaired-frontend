'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../../../../public/Layer_1.svg';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Button from '../Button';
const Header = () => {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  const menues = [
    { label: 'Home', path: '' },
    { label: 'About us', path: '' },
    { label: 'Services', path: '' },
    { label: 'Resources', path: '' },
    { label: 'Contact Us', path: '' },
  ];
  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white lg:h-20">
      <div className="h-[6rem] bg-[#F28F17]"></div>
      <div className="relative -mt-[3rem] flex w-[100%] items-center rounded-tl-3xle rounded-tr-3xle rounded-full border-b-[1px] border-[#0000001A] bg-white py-[1.5rem]">
        <MaxWidthWrapper>
          <div className="flex justify-between">
            <div>
              <Image src={logo} width={145} height={55} alt="brand logo" />
            </div>
            <div className="flex justify-between gap-4">
              {menues?.map((menu, idx) => {
                const isActive = active === idx;
                const isHover = hover === idx;
                return (
                  <p
                    onMouseEnter={() => setHover(idx)}
                    onMouseLeave={() => setHover(0)}
                    className={`font-Outfit my-auto cursor-pointer rounded-full px-[2rem] py-[0.75rem] text-xs font-normal text-[#000000] transition-all duration-300 ${isActive ? 'bg-[#FFECD580]' : ''} ${isHover && !isActive ? 'bg-[#FFECD580]' : ''} `}
                  >
                    {menu.label}
                  </p>
                );
              })}
            </div>
            <div>
              <Button name={'Book A Demo'} />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Header;
