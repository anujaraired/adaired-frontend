import Link from 'next/link';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

export interface IButton {
  name: String;
  className?: string;
  width?: boolean;
}
const Button = ({ name, className, width }: any) => {
  return (
    <Link
      href="/contact"
      className={`${className} relative flex ${width ? 'w-full' : 'w-fit'} items-center justify-center gap-2 rounded-[60px] bg-custom-gradient px-[28px] py-[11px] font-nunito text-xs font-normal text-white`}
    >
      <span>{name}</span>
      <IoIosArrowRoundForward
        size={25}
        className="transform"
        style={{ transform: 'rotate(310deg)' }}
      />
    </Link>
  );
};

export default Button;
