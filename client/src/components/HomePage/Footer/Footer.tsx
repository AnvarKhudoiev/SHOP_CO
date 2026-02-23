import footerIco from '@/assets/header_shop.co.svg';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FooterList } from './FooterList';
import { FaCcVisa } from "react-icons/fa";
import { SiApplepay } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";


type DataT = {
    title: string
    items: string[]
}

export const Footer = () => {


    const footerData: DataT[] = [
        {
            title: "Company",
            items: ["About", "Features", "Works", "Career"],
        },
        {
            title: "FAQ",
            items: ["Account", "Manage Deliveries", "Orders", "Payments"],
        },
        {
            title: "Resources",
            items: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
        },
        {
            title: "Support",
            items: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
        },
    ]

    return (
        <div className="bg-[#F0F0F0] min-h-12.5 mt-16">
            <div className="max-w-310 px-10 xl:px-0 flex flex-wrap flex-col md:flex-row md:items-center md:gap-26.5 md:mx-auto bg-[#F0F0F0] pt-35 pb-20 border-b-black/10 border-b ">
                <div className="md:max-w-62.5 w-40 md:w-full flex flex-col md:pb-0 pb-5 gap-5 md:gap-8.75">
                    <div className="flex flex-col gap-6.25">
                        <img src={footerIco} className="w-42.5" alt='shop.co' />
                        <p className='font-satoshi font-normal text-black/60 text-[12px] md:text-[14px]'>
                            We have clothes that suits your style and which you’re proud to wear. From women to men.
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <div className='border-black/20  border rounded-full bg-white'>
                            <div className='p-2'>
                                <FaTwitter size={'14px'} />
                            </div>
                        </div>
                        <div className='border-black/20  border rounded-full bg-white'>
                            <div className='p-2'>
                                <FaFacebookF size={'14px'} />
                            </div>
                        </div>
                        <div className='border-black/20  border rounded-full bg-white'>
                            <div className='p-2'>
                                <FaInstagram size={'14px'} />
                            </div>
                        </div>
                        <div className='border-black/20  border rounded-full bg-white'>
                            <div className='p-2'>
                                <FaGithub size={'14px'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-30">
                    {footerData.map((item, index) => (
                        <FooterList key={index} data={item} />
                    ))}
                </div>
            </div>
            <div className='max-w-310 md:flex text-center md:text-start md:justify-between md:items-center md:gap-26.5 md:mx-auto bg-[#F0F0F0] pb-6 pt-8'>
                    <span className='text-black/60 font-satoshi font-normal tetx-[12px] md:text-[16px]'>Shop.co © 2000-2023, All Rights Reserved</span>

                    <ul className='flex gap-3 justify-center md:justify-between'>
                        <li>
                            <FaCcVisa size={'45px'}/>
                        </li>
                        <li>
                            <FaCcMastercard size={'45px'}/>
                        </li>
                        <li>
                            <FaCcPaypal size={'45px'}/>
                        </li>
                        <li>
                            <SiApplepay size={'45px'}/>
                        </li>
                        <li>
                            <SiGooglepay size={'45px'}/>
                        </li>
                    </ul>
            </div>
        </div>
    )
}