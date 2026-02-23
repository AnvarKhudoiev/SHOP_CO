import type { FC } from "react"
import type { ProductT } from "@/api/Products.api"
import { FaStarHalfAlt, FaRegStar, FaStar } from "react-icons/fa";

interface PropsT {
    item: ProductT
}


export const RecommendedClothesItem: FC<PropsT> = ({ item }) => {

    const renderStars = (rate: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rate >= i) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (rate >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        return stars;
    };
    return (
        <div className="flex  justify-center items-center flex-col gap-3 hover:scale-98 transition-transform duration-300">
            <div className="lg:w-[80%] xl:w-full overflow-hidden lg:h-70 xl:h-90 p-10 rounded-4xl bg-[#F0EEED] flex items-center justify-center">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain drop-shadow-xl"
                />
            </div>

            {/* INFO */}
            <div className="lg:w-100 xl:w-60">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-satoshi font-bold text-sm  truncate w-32">
                            {item.title}
                        </h3>
                        <div className="flex items-center gap-1 ">
                            {renderStars(item.rating.rate)}
                            <span className="text-xs text-gray-500">{item.rating.rate}/5</span>
                        </div>
                    </div>

                    <span className="font-satoshi font-bold">${item.price}</span>
                </div>
            </div>
        </div>
    )
}


{/* <div className="flex flex-col gap-2 h-full">
  <div className="w-full h-48 p-4 rounded-[20px] bg-[#F0EEED] flex items-center justify-center overflow-hidden">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-contain drop-shadow-xl"
    />
  </div>

  <div className="flex flex-col gap-1">
    <h3 className="font-satoshi font-bold text-sm line-clamp-2">
      {item.title}
    </h3>

    <div className="flex items-center gap-1">
      {renderStars(item.rating.rate)}
      <span className="text-xs text-gray-500">{item.rating.rate}/5</span>
    </div>

    <span className="font-satoshi font-bold">${item.rating.count}</span>
  </div>
</div> */}