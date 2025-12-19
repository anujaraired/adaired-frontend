import { ContactSectionData } from '@/@core/data/website/Homepage';
import { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import Image from 'next/image';
import InputField from '../UI/InputField';
import MessageField from '../UI/MessageField';
import Button from '../../common/Button';
import useImageAnimation from '@/@core/hooks/useImageAnimation';
import reachout from '../../../../../public/assets/images/home/reachout.png';
import chat from '../../../../../public/assets/icons/chat.png';
import SelectField from '../UI/SelectField';

const Contact = () => {
  const { image, subTitle, title, description } = ContactSectionData;
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const { ref, className } = useImageAnimation({
    direction: 'left',
    delay: 350,
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
        <div className="grid grid-cols-1 gap-[4rem] lg:grid-cols-2">
          <div>
            <Heading
              subTitle={subTitle}
              title={title}
              span={''}
              description={description}
              isStyped={true}
              isBgWhite={true}
            />
            <div className={`h-full overflow-hidden ${className}`} ref={ref}>
              <Image
                src={reachout}
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

export default Contact;
