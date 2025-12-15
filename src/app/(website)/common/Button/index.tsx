import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

export interface IButton {
  href?: string;
  name: string;
  className?: string;
  width?: boolean;
  onClick?: () => void;
}

const Button = ({
  href,
  name,
  className = '',
  width = false,
  onClick,
}: IButton) => {
  const baseClass = `relative flex ${
    width ? 'w-full' : 'w-fit'
  } items-center justify-center gap-2 rounded-[60px] bg-custom-gradient px-[28px] py-[11px] font-nunito text-xs font-normal text-white ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        <span className="text-[14px] md:text-xs">{name}</span>
        <IoIosArrowRoundForward size={25} className="rotate-[310deg]" />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      <span className="text-[14px] md:text-xs">{name}</span>
      <IoIosArrowRoundForward size={25} className="rotate-[310deg]" />
    </button>
  );
};

export default Button;
