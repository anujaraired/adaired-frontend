import Image from 'next/image';
import MaxWidthWrapper from '../MaxWidthWrapper';
import certificate_1 from '../../../../../public/assets/images/certificate/Amazon-Ads.png';
import certificate_2 from '../../../../../public/assets/images/certificate/bing_add.png';
import certificate_3 from '../../../../../public/assets/images/certificate/GooglePartner.png';
import certificate_4 from '../../../../../public/assets/images/certificate/klavivo.png';
import certificate_5 from '../../../../../public/assets/images/certificate/Meta-Logo.png';
import certificate_6 from '../../../../../public/assets/images/certificate/shopify.png';
import certificate_7 from '../../../../../public/assets/images/certificate/Semrush_logo 1.png';
import certificate_8 from '../../../../../public/assets/images/certificate/Group 4.png';
const Certificate = ({ className }: any) => {
  const certificates = [
    certificate_7,
    certificate_3,
    certificate_2,
    certificate_6,
    certificate_4,
    certificate_1,
    certificate_5,
    // certificate_8,
  ];

  return (
    <section className={className}>
      <div className="animate- flex flex-wrap justify-between gap-[1.5rem]">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className={`relative my-auto ${cert === certificate_6 ? 'h-[190px] w-[167px]' : 'h-[45px] w-[220px]'}`}
          >
            <Image
              src={cert}
              alt={`Certificate ${idx + 1}`}
              fill
              quality={100}
              priority
              className="my-auto object-contain duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
