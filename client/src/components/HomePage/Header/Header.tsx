import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import ShopIco from '@/assets/header_shop.co.svg';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useProducts } from "@/utils/useProducts";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const token = useSelector((state: RootState) => state.auth.token);
    const [search, setSearch] = useState("");
    const { products, loading } = useProducts(search);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const navigate = useNavigate();

    const handleAuth = () => {
        navigate(token ? '/profile' : '/login')
    }


    return (
        <nav className="text-black py-4 md:flex md:items-center md:justify-center font-satoshi flex border-b border-b-black/10 w-[90%] mx-auto">
            <div className="md:max-w-310 flex w-screen justify-around items-center md:mx-auto md:gap-10 ">
                <div className='md:grid md:place-items-center flex gap-3 md:gap-0 flex-row-reverse items-center'>
                    <img src={ShopIco} alt="Shop Icon" className="lg:w-37.5 w-25 cursor-pointer" onClick={() => navigate('/')} />

                    {isMobile &&
                        <button onClick={() => setIsMobileMenuOpen(prev => !prev)} >
                            {isMobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                        </button>
                    }
                </div>


                {!isMobile && <ul className="md:flex gap-8">
                    <li className="hover:opacity-50 transition-all duration-200 md:cursor-pointer md:relative md:grid md:place-items-center" >
                        <Link to={'/jewelery'}>
                            Clothes
                        </Link>
                    </li>
                    <li className="hover:opacity-50 transition-all duration-200 md:cursor-pointer md:grid md:place-items-center">
                        <Link to={'/jewelery'} >
                            Jewelery
                        </Link>
                    </li>
                    <li className="hover:opacity-50 transition-all duration-200 md:cursor-pointer md:grid md:place-items-center">
                        <Link to={"/electronics"}>
                            Electronics
                        </Link>
                    </li>
                </ul>}
                {!isMobile && <div className="md:cursor-pointer md:grid md:place-items-center relative">
                    <div className="md:relative md:w-full">
                        <CiSearch className="md:absolute md:left-5 md:top-1/2 md:-translate-y-1/2 md:text-gray-500 text-black" size={'22px'} />

                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="md:pl-14 pl-5 py-1 md:py-3 w-60 lg:w-110 xl:w-144.25  rounded-[42px] lg:rounded-[62px] bg-[#F0F0F0]"
                        />
                    </div>

                    {search && (
                        <div className="absolute top-full left-0 right-0 bg-white border rounded-lg mt-1 max-h-60 overflow-y-auto shadow-md z-50">
                            {loading && <div className="p-3 text-gray-500">Loading...</div>}

                            {!loading && products.length === 0 && (
                                <div className="p-3 text-gray-500">No products found</div>
                            )}

                            {!loading &&
                                products.map(product => (
                                    <div
                                        key={product.id}
                                        className="p-2 hover:bg-gray-100 font-satoshi font-normal cursor-pointer"
                                        onClick={() => {
                                            navigate(`/clothes/${product.id}`);
                                            setSearch("");
                                        }}
                                    >
                                        {product.title}
                                    </div>
                                ))}
                        </div>
                    )}
                </div>

                }

                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="px-6 py-6 space-y-4">
                        <div
                            className="cursor-pointer"
                            onClick={() => {
                                navigate("/clothes");
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Clothes
                        </div>

                        <div
                            className="cursor-pointer"
                            onClick={() => {
                                navigate("/jewelery");
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Jewelery
                        </div>

                        <div
                            className="cursor-pointer"
                            onClick={() => {
                                navigate("/electronics");
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Electronics
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer flex md:items-center md:justify-center gap-3">
                    {isMobile && <CiSearch size={'20px'} />}
                    <LuShoppingCart size={'20px'}  className="hover:opacity-50 transition-all duration-200"/>
                    <FaRegUser size={'20px'} onClick={handleAuth} className="hover:opacity-50 transition-all duration-200"/>
                </div>


            </div>

        </nav >
    )
}