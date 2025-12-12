import React from 'react';
export interface InputFieldProps {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}
const index = ({ name, value, handleChange, placeholder,className }: InputFieldProps) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      className={`${className} border-none outline-none w-full rounded-md  bg-[#F8F8F8] px-4 py-3 text-xs font-normal text-black placeholder:text-[#A3A3A3] focus:border-[#000000]`}
      placeholder={placeholder}
    />
  );
};

export default index;
