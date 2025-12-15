import Image from 'next/image';
import React from 'react';
import star from '../../../../../public/assets/icons/star.png';
export interface IHeading {
  subTitle: String;
  title: String;
  span: String;
  description: String;
  isStyped?: boolean;
  isVarticle?: boolean;
  isBgWhite?: boolean;
  className?: string;
}
const Heading = ({
  subTitle,
  title,
  span,
  description,
  isStyped,
  isVarticle,
  isBgWhite,
  className,
}: IHeading) => {
  return (
    <div className={className}>
      {isStyped ? (
        <div>
          <div
            className={`flex w-fit items-center gap-3 ${isBgWhite ? 'text-black' : 'text-white'} ${
              isVarticle ? 'mx-auto' : ''
            }`}
          >
            <Image
              src={star}
              width={18}
              height={17}
              alt=""
              className="mb-auto mt-1"
            />
            <p className="text-xxs font-nunito md:text-xs">{subTitle}</p>
            <div className="my-auto h-0.5 w-24 bg-[#D7EBFF]"></div>
          </div>

          {isVarticle ? (
            <div
              className={`text-center md:px-[15%] ${isBgWhite ? 'text-black' : 'text-white'} `}
            >
              <p className="pt- font-nunito text-[1.6rem] font-medium md:pt-4 md:text-3xl">
                {title} <br />
                {span}
              </p>
              <p
                className={`py-3 font-nunito text-xs font-normal md:text-sm ${isBgWhite ? 'text-black' : 'text-white'} `}
              >
                {description}
              </p>
            </div>
          ) : (
            <div
              className={`grid ${isBgWhite ? 'grid-cols-1' : 'grid-cols-3'} gap-5`}
            >
              <div
                className={`col-span-2 w-[60%] leading-[60px] ${isBgWhite ? 'text-black' : 'text-white'} `}
              >
                <p className="pt- font-nunito text-[1.6rem] font-medium md:pt-4 md:text-3xl">
                  {title} <br />
                  {span}
                </p>
              </div>
              <p className="py-3 font-nunito text-sm text-white">
                {description}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="block w-fit gap-3 md:flex">
            <div className="flex gap-3">
              <Image
                src={star}
                width={18}
                height={17}
                alt=""
                className="mb-auto mt-1"
              />
              <p className="text-xxs font-nunito md:text-xs"> {subTitle}</p>
              <div className="mb-auto mt-3 h-0.5 w-24 bg-[#D7EBFF]"></div>
            </div>
            <div className="mt-[10px] md:mt-[-20px]">
              <p className="font-nunito text-lg font-medium leading-tight text-black md:text-3xl">
                {title} <br></br>
                {span}
              </p>
            </div>
          </div>
          <div>
            <p className="hyphens-auto py-3 text-justify font-nunito text-base sm:text-lg">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Heading;
