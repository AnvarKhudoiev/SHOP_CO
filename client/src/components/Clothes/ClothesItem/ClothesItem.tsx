import type { ProductT } from "@/api/Products.api"
import type { FC } from "react"
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface PropsT {
    item: ProductT
}


export const ClothesItem: FC<PropsT> = ({ item }) => {
    const navigate = useNavigate(); 
     const renderStars = (rate: number) => {
           const stars = [];
           for (let i = 1; i <= 5; i++) {
               if (rate >= i) {
                   stars.push(<FaStar size={'10px'} key={i} className="text-yellow-400" />);
               } else if (rate >= i - 0.5) {
                   stars.push(<FaStarHalfAlt size={'10px'} key={i} className="text-yellow-400" />);
               } else {
                   stars.push(<FaRegStar size={'10px'} key={i} className="text-yellow-400" />);
               }
           }
           return stars;
       };
       return (
           <div onClick={() => navigate(`/clothes/${item.id}`)} className="flex justify-center sm:items-start items-center flex-col gap-3 hover:scale-98 transition-transform duration-300">
               <div className="lg:w-[80%] h-50  sm:h-90 md:h-100  xl:w-full overflow-hidden lg:h-70 xl:h-90 p-5 xl:p-10 rounded-4xl bg-[#F0EEED] flex items-center justify-center">
                   <img
                       src={item.image}
                       alt={item.title}
                       className="w-full h-full object-contain drop-shadow-xl"
                   />
               </div>
   
               {/* INFO */}
               <div className=" w-40 lg:w-100 xl:w-60 pl-4">
                   <div className="flex flex-col gap-1">
                       <div className="flex flex-col gap-1">
                           <h3 className="font-satoshi font-bold text-[12px] sm:text-[1rem] truncate w-32">
                               {item.title}
                           </h3>
                           <div className="flex items-center gap-1 ">
                               {renderStars(item.rating.rate)}
                               <span className="text-xs text-gray-500 text-[12px] sm:text-[.7rem]">{item.rating.rate}/5</span>
                           </div>
                       </div>
   
                       <span className="font-satoshi font-bold text-[14px]">${item.price}</span>
                   </div>
               </div>
           </div>
       )
}