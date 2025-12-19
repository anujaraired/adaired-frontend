'use client';

import { cn } from '@core/utils/class-names';
import Topbar from './Topbar';
import { useState, useEffect } from 'react';
import MaxWidthWrapper from '@web-components/MaxWidthWrapper';
import SmallWidthContainer from '@web-components/SmallWidthContainer';
import Link from 'next/link';
import CldImage from '@/app/(website)/components/CloudinaryImageComponent';
import MobileNav from './MobileNav';
import NavItems from './NavItems';
import { usePathname } from 'next/navigation';
import { debounce } from 'lodash';
import { useSession } from 'next-auth/react';
import LandingPageMobileMenu from './Landing-mobile-menu';

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isWindowScrollingUp, setIsWindowScrollingUp] = useState(true);
  const [isScreenScrolled, setIsScreenScrolled] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsAtTop(scrollTop < 100);
      setIsScreenScrolled(scrollTop > 100);
      setIsWindowScrollingUp(scrollTop < lastScrollTop);
      lastScrollTop = Math.max(0, scrollTop);
    };

    const debouncedHandleScroll = debounce(handleScroll, 50);
    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  const openSidebar = () => setIsSidebarVisible(true);
  const closeSidebar = () => setIsSidebarVisible(false);

  const isLandingPage = pathname.startsWith('/expert-content-solutions');

  const WrapperComponent = isLandingPage
    ? SmallWidthContainer
    : MaxWidthWrapper;

  return (
    <>
      <section
        className={cn(
          'sticky top-0 z-[100] transition-shadow duration-300',
          isScreenScrolled && !isAtTop
            ? 'bg-white shadow-md'
            : 'bg-transparent shadow-none'
        )}
      >
        <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white lg:h-20">
          <div className="h-[6rem] bg-[#F28F17]"></div>
          <header className="relative -mt-[3rem] flex w-[100%] items-center rounded-full border-[1px] border-[#0000001A] bg-white py-1">
            <WrapperComponent
              className={cn(
                `${pathname.startsWith('/expert-content-solutions') ? '!py-0 xl:!py-0 2xl:!py-0 3xl:!py-0' : ''}`
              )}
            >
              <div className="relative">
                <div className="flex h-16 items-center lg:h-20">
                  <div>
                    <Link
                      href={!isLandingPage ? '/' : `/${pathname.split('/')[1]}`}
                      className="sm:w-10/0 flex w-28 items-center md:w-36 lg:w-10/12 xl:w-full"
                    >
                      {/* <div className="relative h-[60px] w-[150px] md:h-[72px] lg:h-[80px] xl:h-[78px] aspect-auto"> */}
                      <div className="flex items-center justify-center">
                        <CldImage
                          src="Static Website Images/adaired_logo.png"
                          alt="Brand Logo"
                          height={55}
                          width={145}
                          priority
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ml-auto flex items-center">
                    {/* Mobile Menu Toggle */}
                    <button
                      aria-label="Open Menu"
                      className="header__menu-toggle block cursor-pointer text-3xl lg:hidden"
                      onClick={openSidebar}
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                      </svg>
                    </button>
                    {/* Desktop Nav Items */}
                    <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <NavItems />
                    </nav>
                  </div>
                </div>
              </div>
            </WrapperComponent>
            {/* Mobile Navigation */}
            {!isLandingPage ? (
              <MobileNav
                isSidebarVisible={isSidebarVisible}
                closeSidebar={closeSidebar}
              />
            ) : (
              <LandingPageMobileMenu
                isSidebarVisible={isSidebarVisible}
                closeSidebar={closeSidebar}
              />
            )}
          </header>
        </div>
      </section>
    </>
  );
};

export default Navbar;
