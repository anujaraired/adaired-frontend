'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import logo from '../../../../../public/Layer_1.svg';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Button from '../Button';
import { routes } from '../../../../config/routes';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';

const Header = () => {
  const [active, setActive] = useState(0);
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
            <div className="flex justify-between gap-4">
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
                      className={`font-Outfit flex items-center gap-1 rounded-full px-8 py-3 text-xs transition ${isHover ? 'bg-[#FFECD580]' : ''}`}
                    >
                      {menu.label}
                      {menu.subItems && <MdKeyboardArrowDown size={18} />}
                    </Link>

                    {/* MEGA MENU */}
                    {menu.subItems && (
                      <div
                        className={`absolute left-0 right-0 top-[150%] z-50 transition-all duration-300 ease-out ${
                          isHover
                            ? 'pointer-events-auto translate-y-0 opacity-100'
                            : 'pointer-events-none -translate-y-3 opacity-0'
                        } `}
                      >
                        {/* ===================== RESOURCES MENU ===================== */}
                        {menu.label === 'Resources' ? (
                          <div className="mx-auto ml-[51%] w-fit rounded-xl bg-white p-4 shadow-xl">
                            <ul className="space-y-2">
                              {menu.subItems.map((item, i) => (
                                <li key={i}>
                                  <Link
                                    href={item.href}
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-black"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          /* ===================== SERVICES MEGA MENU ===================== */
                          <div className="mx-auto max-w-[1400px] rounded-2xl bg-white p-10 shadow-xl">
                            <div className="grid grid-cols-4 gap-10">
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

                                    <ul className="space-y-2">
                                      {sub.subItems?.map(
                                        (item: any, j: number) => (
                                          <li key={j}>
                                            <Link
                                              href={item.href}
                                              className="flex items-center gap-2 text-xs text-gray-600 hover:text-black"
                                            >
                                              <span className="h-2 w-2 rounded bg-gray-300"></span>
                                              {item.name}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ))}
                              </div>

                              {/* WHAT'S NEW */}
                              <div className="border-l pl-6">
                                <p className="mb-4 text-sm font-semibold">
                                  What’s New
                                </p>

                                <div className="rounded-xl border p-3 shadow-sm">
                                  <img
                                    src="/blog-thumb.jpg"
                                    className="mb-3 w-full rounded-lg"
                                    alt=""
                                  />

                                  <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-[10px] text-purple-600">
                                    Web Development
                                  </span>

                                  <p className="mt-2 text-sm font-medium">
                                    What Skills Should Great Web Developers
                                    Have?
                                  </p>

                                  <p className="mt-1 text-xs text-gray-500">
                                    By Adaired Team · 8 min read
                                  </p>
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
