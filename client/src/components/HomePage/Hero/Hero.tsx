import HeroImg from '@/assets/hero_img.png';
import Versage from '@/assets/Versage.png';
import CalvinKlein from '@/assets/CalvinKlein.png';
import Zara from '@/assets/Zara.png';
import Gucci from '@/assets/Gucci.png'
import Prada from '@/assets/Prada.png'; import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
;

export const Hero = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (<div className="relative bg-[#F2F0F1] w-screen bg-cover bg-center bg-no-repeat h-162.5 sm:h-120  lg:h-220" style={{
        backgroundImage: !isMobile ? `url(${HeroImg})` : 'none',
    }}>
        <div className='pt-10 md:pt-25 lg:max-w-310 lg:mx-auto'>
            <div className='flex flex-col gap-5.5 lg:gap-10 md:pl-10 lg:w-full'>
                <div className='flex flex-col gap-5 lg:gap-10 sm:text-center md:text-start md:max-w-112.5 lg:max-w-150'>
                    <h1 className='font-integralcf text-[38px] md:text-[32px] lg:text-[64px] leading-none'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

                    <p className='font-satoshi font-normal text-black/60 text-[14px] md:text-[12px] lg:text-[16px]'>
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of style.
                    </p>

                    <button onClick={() => navigate('/clothes')} className="bg-black text-white md:text-[14px] px-35.5 py-3.75 hover:opacity-80 transition-all duration-300 cursor-pointer rounded-[64px] md:px-14 lg:py-3 md:py-2 md:max-w-45">Shop Now</button>
                </div>

                <ul className='flex flex-wrap gap-7 md:gap-5 lg:gap-20 justify-center md:justify-start md:pl-5 items-center'>
                    <li className='border-r border-r-black/10 pr-6.75'>
                        <h2 className='font-satoshi font-bold text-[24px] md:text-[16px] lg:text-[40px]'>200+</h2>
                        <span className='text-black/60 text-[12px]'>International Brands</span>
                    </li> 

                    <li  className='md:border-r md:border-r-black/10 md:pr-6.75'>
                        <h2 className='font-satoshi font-bold text-[24px] md:text-[16px] lg:text-[40px]'>2,000+</h2>
                        <span className='text-black/60 text-[12px]'>High-Quality Products</span>
                    </li>

                    <li >
                        <h2 className='font-satoshi font-bold text-[24px] md:text-[16px] lg:text-[40px]'>30,000+</h2>
                        <span className='text-black/60 text-[12px]'>Happy Customers</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className='bg-black flex justify-center lg:justify-start absolute bottom-0 w-screen'>
            <div className='flex flex-wrap items-center  gap-3 justify-center lg:justify-between py-5 px-3 lg:px-10 w-full'>
                <img src={Versage} alt="Versage" className="w-25 md:w-28 lg:w-52"/>
                <img src={Zara} alt="Zara"  className="w-25 md:w-28 lg:w-52"/>
                <img src={Gucci} alt="Gucci" className="w-25 md:w-28 lg:w-52"/>
                <img src={Prada} alt="Prada" className="w-25 md:w-28 lg:w-52"/>
                <img src={CalvinKlein} alt="Calvin Klein" className="w-25 md:w-28 lg:w-52"/>
            </div>
        </div>
    </div>)
}