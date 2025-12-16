'use client';
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@web-components/Icons';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import CldImage from '@/app/(website)/components/CloudinaryImageComponent';
import parse from 'html-react-parser';
import { InfiniteMovingCards } from '../../@core/ui/aceternity-ui/infinite-moving-cards';
import HomepageForm from './components/forms/HomepageForm';
import img from '../../../public/assets/images/hero_image_bhw.png';
import expectImg from '../../../public/not-found.png';
import chat from '../../../public/assets/icons/chat.png';
import win from '../../../public/assets/icons/win.png';
import { IoCheckmark } from 'react-icons/io5';

// Data
import {
  AboutSectionData,
  AwardsSectionData,
  ContactSectionData,
  ExpectSectionData,
  GrowthSectionData,
  LogoSliderSectionData,
  ServiceSectionData,
  WhyChooseSectionData,
  CaseStudySectionData,
  TestimonialSectionData,
  BlogSectionData,
} from '../../@core/data/website/Homepage';
import HereComponent from './components/HereComponent';
import Heading from './common/Heading';
import Button from './common/Button';
import { useState } from 'react';
import serviceBg from '../../../public/assets/images/home/service-bg-img.png';
import serviceBgOpecity from '../../../public/assets/images/home/serviceBg.png';
import WhyChooseBgOpecity from '../../../public/assets/images/home/Why_Choose_bg_Opecety.png';
import WhyChooseTopVector from '../../../public/assets/images/home/WhyChooseTopVector.png';
import WhyChooseBottomVector from '../../../public/assets/images/home/WhyChooseBottomVector.png';
import ChooseIcon from '../../../public/assets/icons/Group 26.png';
import ChooseIcon2 from '../../../public/assets/icons/Group 1000004066.png';
import InputField from './components/UI/InputField';
import SelectField from './components/UI/SelectField';
import MessageField from './components/UI/MessageField';
import seo from '../../../public/assets/images/home/seo.png';
import queen from '../../../public/assets/icons/Queen.png';
import curve from '../../../public/assets/icons/curve_Imag.png';
import studiesImg from '../../../public/assets/images/home/studies.png';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MdOutlineStar } from 'react-icons/md';
import google from '../../../public/assets/icons/goole.png';
import blogImg from '../../../public/assets/images/home/blog.png';
import blog_bg_opecity from '../../../public/assets/images/home/blog_bg_opecity.png';

export default function HomePage() {
  return (
    <>
      <HereComponent />
      <About />
      <Awards />
      <Services />
      <Expect />
      <WhyChoose />
      <CaseStudy />
      <Testimonial />
      <Contact />
      <Blogs />
    </>
  );
}

const About = () => {
  const {
    image,
    subTitle,
    title,
    description,
    points,
    cursive,
    btnText,
    btnHref,
  } = AboutSectionData;

  return (
    <section className="">
      <MaxWidthWrapper className="py-[2rem] lg:py-[8rem]">
        <Heading
          subTitle={'ABOUT US'}
          title={'Every Brand Has A Story, '}
          span="And We’re Here To Tell It Better!"
          description={''}
        />

        <div className="relative grid grid-cols-1 gap-5 pt-5 lg:grid-cols-2">
          {/* Image Section */}
          <div className="mx-auto flex-1">
            <div className="h-full max-w-lg overflow-hidden lg:max-w-full">
              <Image
                src={img}
                alt="About Image"
                height={507}
                width={642}
                className="rounded-lg border-[#e3e3e3] p-1"
              />
              <Image
                src={win}
                alt="About Image"
                height={87}
                width={92}
                className="absolute bottom-[73.5%] left-[70%] lg:bottom-0 lg:left-[44.25%]"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-2 text-center lg:text-left">
            {/* Points Section */}
            <div className="gap-5 py-6 sm:flex-row">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-3 h-6 w-2 bg-[#FB9100]"></div>

                  <div>
                    <div className="relative py-2 font-nunito text-2xl font-semibold">
                      <div className="absolute bottom-1 left-1/2 h-0.5 w-14 -translate-x-1/2 rounded-lg text-black lg:left-0 lg:translate-x-0"></div>
                      <h4 className="">{point.title}</h4>
                    </div>
                    <p className="">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="py-2 text-xs font-semibold text-[#1B5A96] lg:text-sm">
              {parse(cursive)}
            </div>

            <Button href={'/about'} name={'See What’s Next'} className="mt-9" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
const Expect = () => {
  const { image, subTitle, title, description, points, para2, records } =
    ExpectSectionData;

  return (
    <section className="">
      <MaxWidthWrapper className="py-[2rem] lg:py-[8rem]">
        <Heading subTitle={subTitle} title={title} span="" description={''} />

        <div className="relative block justify-between gap-2 pt-5 lg:flex">
          {/* Image Section */}
          <div className="h-full w-[100%] overflow-hidden lg:w-[40%]">
            <Image
              src={expectImg}
              alt="About Image"
              height={507}
              width={642}
              className="rounded-lg border-[#e3e3e3] p-1"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 p-2 text-center lg:text-left">
            <p className="">{description}</p>
            {/* Points Section */}
            <div className="grid grid-cols-1 gap-2 py-6 sm:flex-row md:grid-cols-2">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-lg border border-[#FFCA8B] p-[1.25rem]"
                >
                  <Image
                    src={queen}
                    width={30}
                    height={24}
                    alt="queen"
                    className="mb-auto"
                  />
                  <p className="my-auto text-[13px] font-medium text-[#000000] md:text-xs lg:text-sm">
                    {point.title}
                  </p>
                </div>
              ))}
            </div>
            <p className="">{para2}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:pt-5 lg:grid-cols-4">
          {records?.map((record, idx) => {
            const isLast = idx === records.length - 1;

            return (
              <div
                key={idx}
                className={`${!isLast && 'border-[#FB9100w] lg:border-r'}`}
              >
                <p className="text-center font-nunito text-xl font-semibold text-[#101C3A] lg:text-[36px]">
                  {record.number}+
                </p>
                <p className="text-center text-[#656565]">{record.name}</p>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const WhyChoose = () => {
  const { subTitle, title, description, points } = WhyChooseSectionData;
  const [isHover, setIsHover] = useState<number | null>(1);
  return (
    <section className="relative pb-[3rem] pt-[5rem] md:py-[14rem]">
      <Image
        src={serviceBg}
        fill
        width={undefined}
        height={undefined}
        alt="d"
        className="object-cover"
        priority
      />
      <Image
        src={WhyChooseBgOpecity}
        fill
        width={undefined}
        height={undefined}
        alt="d"
        className="object-cover"
        priority
      />

      {/* ---- Top Curve Overlay ---- */}
      <div className="pointer-events-none absolute left-0 top-0 h-[45px] w-full md:h-[152px] lg:h-[132px]">
        <Image
          src={WhyChooseTopVector}
          alt="top curve"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ---- Bottom Curve Overlay ---- */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[45px] w-full md:h-[152px] lg:h-[132px]">
        <Image
          src={WhyChooseBottomVector}
          alt="bottom curve"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-20">
        <MaxWidthWrapper>
          <Heading
            subTitle={subTitle}
            title={title}
            span={''}
            description={description}
            isStyped={true}
            isVarticle={true}
          />
          <div className="mt-[4rem] grid grid-cols-1 gap-[2rem] lg:grid-cols-4">
            {points?.map((item, idx: any) => {
              const lastCard = idx === points.length - 1;
              const isSecond = idx === 1;
              const hovered = isHover === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setIsHover(idx)}
                  onMouseLeave={() => setIsHover(1)}
                  className="relative"
                >
                  <div className="flex flex-col items-center gap-3 text-center">
                    {/* ICON CIRCLE */}
                    <div className="relative flex h-[6rem] w-[6rem] items-center justify-center rounded-full border border-white backdrop-blur-lg">
                      <Image
                        src={hovered ? ChooseIcon2 : ChooseIcon}
                        width={70}
                        height={70}
                        alt=""
                        className={`absolute bottom-0 rounded-full object-contain p-[1rem] ${hovered ? 'bg-[#FF9E2C] text-white' : 'bg-white'} `}
                      />
                    </div>

                    {/* CARD */}
                    <div
                      className={`mt-[-2.5rem] h-[335px] w-[296px] cursor-pointer rounded-3xl px-[1.5rem] pb-[1.5rem] pt-[3rem] transition-all duration-300 md:h-[290] md:w-[420px] lg:h-[360] lg:w-[320px] ${hovered ? 'bg-white text-black' : 'bg-[#1A5A9621] text-white'} `}
                    >
                      <p
                        className={`text-lg ${hovered ? 'font-semibold text-black' : 'font-normal text-white'} `}
                      >
                        {item?.title}
                      </p>

                      <p
                        className={`pt-[1rem] ${hovered ? 'text-[#666666]' : 'text-white'} `}
                      >
                        {item?.description}
                      </p>
                    </div>
                  </div>

                  {/* CURVE LINE */}
                  {!lastCard && (
                    <Image
                      src={curve}
                      width={144}
                      height={134}
                      alt="top curve"
                      className={`absolute left-[80%] top-1 hidden lg:block ${isSecond ? 'rotate-180' : ''} `}
                      priority
                    />
                  )}
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

const CaseStudy = () => {
  const { image, subTitle, title, span, description, studies } =
    CaseStudySectionData;

  return (
    <section className="">
      <MaxWidthWrapper className="py-[2rem] lg:py-[6rem]">
        <Heading
          subTitle={subTitle}
          title={title}
          span={span}
          description={''}
        />
        <div className="grid grid-cols-1 gap-7 py-[1.5rem] md:grid-cols-2 lg:grid-cols-3">
          {studies?.map((study, idx) => {
            return (
              <div
                key={idx}
                className={`rounded-3xl p-[1.5rem]`}
                style={{ backgroundColor: study.bgColor }}
              >
                <Image src={studiesImg} width={400} height={258} alt="" />
                <div className="flex gap-2 py-[1rem]">
                  {study?.labels?.map((label) => {
                    return (
                      <span className="rounded-full bg-white px-[1rem] py-[0.25rem]">
                        {label}
                      </span>
                    );
                  })}
                </div>
                <div className="grid grid-cols-2">
                  <h3 className="">{study.title}</h3>
                  <div className="flex items-center justify-end">
                    <IoIosArrowRoundForward
                      size={40}
                      className="rounded-full bg-white p-1"
                      style={{ transform: 'rotate(310deg)' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center lg:mt-[2rem]">
          <Button href="/case-studies" name="View All Studies" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const Testimonial = () => {
  const { subTitle, title, description, testimonials } = TestimonialSectionData;
  const [isHover, setIsHover] = useState<number | null>(1);
  return (
    <section className="relative bg-[#FFFBF6] py-6 lg:py-[6rem]">
      <div className="relative z-20">
        <div className="flex w-[100%] justify-center">
          <Heading
            subTitle={subTitle}
            title={title}
            span={''}
            description={description}
            isStyped={true}
            isVarticle={true}
            isBgWhite={true}
            className="w-[90%] lg:w-[50%]"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 px-[3%] pt-[2.5rem] lg:grid-cols-3">
          {testimonials?.map((testimonial, idx: number) => {
            return (
              <div
                className={`rounded-2xl border border-transparent bg-white p-[2rem] transition-all duration-300 hover:border-8 hover:border-[#FFEFDA] ${''}`}
              >
                <div className="font-nunito text-sm font-normal text-[#262626]">
                  {testimonial?.description}
                  <div className="flex justify-between pt-[2rem]">
                    <div>
                      <p className="font-nunito text-sm font-medium">
                        {testimonial?.name}
                      </p>
                      <span className="flex gap-1">
                        <MdOutlineStar size={16} className="text-[#FB9100]" />
                        <MdOutlineStar size={16} className="text-[#FB9100]" />
                        <MdOutlineStar size={16} className="text-[#FB9100]" />
                        <MdOutlineStar size={16} className="text-[#FB9100]" />
                        <MdOutlineStar size={16} className="text-[#FB9100]" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[95px]">
                      <Image
                        src={google}
                        width={95}
                        height={25}
                        alt='"sd'
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { image, subTitle, title, description } = ContactSectionData;
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="">
      <MaxWidthWrapper className="py-[2rem] lg:py-[6rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <Heading
              subTitle={subTitle}
              title={title}
              span={''}
              description={''}
              isStyped={true}
              isBgWhite={true}
            />
            <div className="h-full w-[45%] overflow-hidden">
              <Image
                src={expectImg}
                alt="About Image"
                height={507}
                width={642}
                className="rounded-lg border-[#e3e3e3] p-1"
              />
            </div>
          </div>
          <div className="flex-1 space-y-8 rounded-2xl p-[1rem] text-center shadow-[0_0_20px_rgba(66,71,76,0.08)] lg:h-[650px] lg:w-[620px] lg:p-[3.25rem] lg:text-left">
            <div className="flex justify-between">
              <div>
                <p className="text:[2rem] text-left font-nunito font-medium text-[#120A21] md:text-xl">
                  Let’s Talk
                </p>
                <p className="text-left font-nunito text-[14px] font-normal text-[#666666] lg:text-center lg:text-xs">
                  Reach out and let’s start the conversation:
                </p>
              </div>
              <Image src={chat} width={111} height={73} alt="chat" />
            </div>
            <div>
              <InputField
                className="my-2"
                name="name"
                value={inputValue.name}
                handleChange={handleChange}
                placeholder="Name"
              />
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                <InputField
                  className="mt-2 lg:my-2"
                  name="email"
                  value={inputValue.email}
                  handleChange={handleChange}
                  placeholder="Email"
                />
                <InputField
                  className="mb-2 lg:my-2"
                  name="phone"
                  value={inputValue.phone}
                  handleChange={handleChange}
                  placeholder="Phone No"
                />
              </div>
              <SelectField
                className="my-2"
                name="service"
                value={inputValue.service}
                handleChange={handleChange}
                placeholder="Service"
                options={[
                  { label: 'Service 1', value: 'service1' },
                  { label: 'Service 2', value: 'service2' },
                ]}
              />
              <MessageField
                name={'message'}
                value={inputValue.message}
                handleChange={handleChange}
                placeholder="Message"
                className="my-2"
              />
            </div>
            <Button href="" name="Submit" className="w-full" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const Blogs = () => {
  const { subTitle, title, description, blogs } = BlogSectionData;
  const [isHover, setIsHover] = useState<number | null>(1);
  return (
    <section className="relative py-6 lg:py-[6rem]">
      <div className="absolute inset-0 -z-10 h-[500px]">
        <Image src={blog_bg_opecity} fill alt="blog" className="object-cover" />
      </div>
      <MaxWidthWrapper>
        <div className="flex w-[100%] justify-center">
          <Heading
            subTitle={subTitle}
            title={title}
            span={''}
            description={description}
            isStyped={true}
            isVarticle={true}
            isBgWhite={true}
            className="w-[100%] lg:w-[70%]"
          />
        </div>
        <div className="grid grid-cols-1 gap-7 py-[1.5rem] pt-[3rem] md:grid-cols-2 lg:grid-cols-3">
          {blogs?.map((blog, idx: number) => {
            return (
              <div
                key={idx}
                className={`rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.14)]`}
              >
                <div className="relative h-[180px] w-full lg:h-[252px]">
                  <Image src={blogImg} fill alt="" className="object-cover2" />
                </div>
                <div className="p-[2rem]">
                  <p className="pb-[0.5rem] font-nunito text-xs font-[500] text-[#101C3A] lg:text-sm">
                    {blog.title}
                  </p>
                  <div className="flex w-full justify-between border-t pt-[1rem]">
                    <Button
                      href={''}
                      name="Read More"
                      className="tex-[14px] !bg-yellow-200 py-[6px]"
                    />
                    <p className="my-auto font-nunito text-[14px] font-medium text-[#C4C4C4] lg:text-xs">
                      30, July 2025
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center lg:mt-[2rem]">
          <Button href="" name="View All Blogs" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const Services = () => {
  const { subtitle, title, description, services } = ServiceSectionData;
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="relative py-6 lg:py-[6rem]">
      <Image
        src={serviceBg}
        fill
        width={undefined}
        height={undefined}
        alt="d"
        className="object-cover"
        priority
      />
      <Image
        src={serviceBgOpecity}
        fill
        width={undefined}
        height={undefined}
        alt="d"
        className="object-cover"
        priority
      />
      <div className="relative z-20">
        <MaxWidthWrapper>
          <Heading
            subTitle={subtitle}
            title={title}
            span={''}
            description={description}
            isStyped={true}

            // isVarticle={true}
          />

          {/* Main layout */}
          <div className="z-20 mt-[2.5rem] block rounded-3xl lg:flex lg:bg-white">
            {/* LEFT SIDE - TABS */}
            <div className="z-20 w-[100%] lg:w-[32%] lg:px-[4rem] lg:py-[2.5rem]">
              {services?.map((service, idx) => (
                <h5
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`my-2 w-full cursor-pointer rounded-full border-4 px-[41px] py-[18px] lg:my-6 lg:w-[440px] ${
                    activeTab === idx
                      ? 'border-[#EAF5FF] bg-[#1B5A96] font-semibold text-white lg:py-[20px]'
                      : 'border-[#EAF5FF] bg-white font-normal text-black'
                  } `}
                >
                  {service.title}
                </h5>
              ))}
            </div>

            {/* RIGHT SIDE - ACTIVE TAB CONTENT */}
            <div className="relative col-span-2 h-[42rem] rounded-3xl bg-[#EAF5FF] p-[1rem] lg:pl-[8rem] lg:pr-[2.5rem] lg:pt-[4rem]">
              <h4 className="mb-4">{services[activeTab].title}</h4>

              <p className="mb-6">{services[activeTab].description}</p>

              <div className="ml-6 list-disc space-y-2">
                {services[activeTab].list?.map((item, i) => (
                  <div key={i} className="flex gap-2 py-1 text-black">
                    <IoCheckmark
                      size={25}
                      className="rounded-full bg-[#1EAD0B] p-1 text-sm text-white"
                    />
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 right-[2.5rem] flex items-center justify-center">
                <Image src={seo} width={472} height={317} alt="sf" />
              </div>
              <p className="mt-6">{services[activeTab].lastPara}</p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

const Awards = () => {
  return (
    <section className="bg-[#FAFDFF] py-6 sm:py-12">
      <MaxWidthWrapper>
        <div className="w-full py-2 antialiased">
          <InfiniteMovingCards
            items={AwardsSectionData}
            direction="right"
            speed="slow"
            itemClassName=" w-20 sm:w-32 h-auto lg:w-40 px-2 py-2 sm:py-5 sm:px-8"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
