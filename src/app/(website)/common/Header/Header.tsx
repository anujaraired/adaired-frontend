'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import logo from '../../../../../public/Layer_1.svg';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Button from '../Button';
import { routes } from '../../../../config/routes';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import img from '../../../../../public/assets/triexgagykxxpxhfvx8e.webp';
const Header = () => {
  const pathname = usePathname();
  const [hover, setHover] = useState<number | null>(null);
  const { websiteNav } = routes;

  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white lg:h-20">
      <div className="h-[6rem] bg-[#F28F17]"></div>
      <div className="rounded-tl-3xle rounded-tr-3xle relative -mt-[3rem] flex w-[100%] items-center rounded-full border-b-[1px] border-[#0000001A] bg-white py-[1.5rem]">
        <MaxWidthWrapper>
          <div className="relative flex justify-between">
            <div>
              <Image src={logo} width={145} height={55} alt="brand logo" />
            </div>
            <div className="flex justify-between gap-2">
              {websiteNav.map((menu, idx) => {
                const isHover = hover === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHover(idx)}
                    onMouseLeave={() => setHover(null)}
                  >
                    {/* MAIN MENU */}
                    <Link
                      href={menu.href}
                      className={`font-Outfit flex items-center rounded-full px-8 py-3 text-xs text-[#000000] transition ${pathname === menu.href && 'bg-[#FFECD580]'} ${isHover ? 'bg-[#FFECD580]' : ''}`}
                    >
                      {menu.label}
                      {menu.subItems && <MdKeyboardArrowDown size={18} />}
                    </Link>

                    {/* MEGA MENU */}
                    {menu.subItems && (
                      <div
                        className={`absolute left-0 right-0 top-[110%] z-50 transition-all duration-300 ease-out ${
                          isHover
                            ? 'pointer-events-auto translate-y-0 opacity-100'
                            : 'pointer-events-none -translate-y-3 opacity-0'
                        } `}
                      >
                        {/* ===================== RESOURCES MENU ===================== */}
                        {menu.label === 'Resources' ? (
                          <div className="mx-auto ml-[51%] w-fit rounded-xl bg-white p-4 shadow-lg">
                            <ul className="space-y-2">
                              {menu.subItems.map((item, i) => (
                                <li key={i}>
                                  <Link
                                    href={item.href}
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:text-[#F28F17]"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          /* ===================== SERVICES MEGA MENU ===================== */
                          <div className="mx-auto max-w-[1400px] rounded-2xl bg-white p-10 shadow-lg">
                            <div className="grid grid-cols-4 gap-4">
                              {/* SERVICES */}
                              <div className="col-span-3 grid grid-cols-3 gap-8">
                                {menu.subItems.map((sub, i) => (
                                  <div key={i}>
                                    <Link
                                      href={sub.href}
                                      className="mb-3 block text-sm font-semibold text-black"
                                    >
                                      {sub.name}
                                    </Link>

                                    {'subItems' in sub && (
                                      <ul className="space-y-2">
                                        {sub.subItems?.map(
                                          (item: any, j: number) => (
                                            <li key={j}>
                                              <Link
                                                href={item.href}
                                                className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#F28F17]"
                                              >
                                                <span className="h-2 w-2 rounded bg-gray-300"></span>
                                                {item.name}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    )}
                                  </div>
                                ))}
                              </div>

                              {/* WHAT'S NEW */}
                              <div className="border-l pl-6">
                                <p className="mb-4 text-sm font-semibold">
                                  What’s New
                                </p>

                                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-200/20 to-transparent shadow-lg">
                                  <Image
                                    src={img}
                                    width={208}
                                    height={208}
                                    quality={100}
                                    className="w-full object-cover"
                                    alt=""
                                  />

                                  <div className="p-3">
                                    <span className="inline-block rounded-full bg-[#A100A1] px-3 py-1 text-xxs font-normal text-white">
                                      Web Development
                                    </span>

                                    <p className="mt-2 text-sm font-medium">
                                      What Skills Should Great Web Developers
                                      Have? And How Adaired Excels Every
                                      Benchmark!
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                      By Adaired Team · 8 min read
                                    </p>
                                  </div>
                                </div>

                                <Link
                                  href="/blog"
                                  className="mt-4 inline-block rounded-lg bg-orange-500 px-4 py-2 text-xs text-white"
                                >
                                  See More
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
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
