import Wgrid from '@/assets/grid_wcol.jpg'
import Mgrid from '@/assets/grid_mclo.jpg'
import Jgrid from '@/assets/grid_jew.png'
import { useNavigate } from 'react-router-dom'


export const GridSection = () => {
    const navigate = useNavigate();

    return (
        <div className={`md:max-w-310  max-w-80 mt-10 flex items-center md:gap-26.5 bg-[#F0F0F0] mx-auto  pb-16 rounded-[40px]`}>
            <div className="mx-auto h-full pt-5">
                <h1 className="font-integralcf text-[16px] md:text-2xl xl:text-5xl text-center pb-16">Categories</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 px-6 gap-5">

                    <div className="md:h-72.5 rounded-4xl bg-white overflow-hidden flex cursor-pointer  hover:scale-98 transition-transform duration-300" onClick={() => navigate('/clothes')}>
                        <h2 className="font-satoshi font-bold  text-[16px] xl:text-xl uppercase p-4">
                            women's clothing
                        </h2>
                        <div className="flex items-center justify-center">
                            <img
                                src={Wgrid}
                                className="w-full md:h-[220%] object-contain"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="md:h-72.5 rounded-4xl bg-white overflow-hidden flex gap-0 md:col-span-2 cursor-pointer hover:scale-98 transition-transform duration-300" onClick={() => navigate('/clothes')}>
                        <h2 className="font-satoshi font-bold text-[16px] xl:text-3xl uppercase p-7">
                            men's clothing
                        </h2>
                        <div className="flex items-start justify-center">
                            <img
                                src={Mgrid}
                                className="w-full md:h-125 object-contain"
                                alt="men's clothes"
                            />
                        </div>
                    </div>

                    <div className="md:h-72.5 h-50 rounded-4xl bg-white overflow-hidden flex md:col-span-3 cursor-pointer hover:scale-98 transition-transform duration-300" onClick={() => navigate('/jewelery')}>
                        <h2 className="font-satoshi font-bold text-[16px] xl:text-3xl uppercase p-7">
                            jewelry
                        </h2>
                        <div className="flex-1 items-center justify-center">
                            <img
                                src={Jgrid}
                                className="w-full h-[180%] object-contain drop-shadow-xl"
                                alt=""
                            />
                        </div>
                    </div>

                    {/* <div className="md:h-[290px] rounded-[20px] bg-white overflow-hidden flex ">
                        <h2 className="font-satoshi font-bold text-xl uppercase p-4">
                            electronics
                        </h2>
                        <div className="flex items-center justify-center">
                            <img
                                src={Egrid}
                                className="w-full h-[220%] object-contain drop-shadow-xl"
                                alt=""
                            />
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
} 