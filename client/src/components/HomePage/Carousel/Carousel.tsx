import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { ProductList } from "@/api/Products.api"
import { FaRegStar, FaStar } from "react-icons/fa6"
import { FaStarHalfAlt } from "react-icons/fa"

interface PropsT {
  clothes: ProductList,
  title: string,
}

export const CarouselSize: React.FC<PropsT> = ({ clothes, title }) => {

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
    <div >
      <Carousel
        opts={{
          align: "center",
        }}
        className="mx-auto max-w-68 sm:max-w-120  md:max-w-140 pt-5 pb-10 border-b border-b-black/10"
      >
        <h1 className="font-integralcf text-[18px] text-center pb-5">
          {title}
        </h1>
        <CarouselContent>
          {clothes.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card >
                  <CardContent className="flex aspect-square items-center justify-center p-6 md:h-90">
                    <img src={item.image} alt={item.description} className="w-full h-full object-contain drop-shadow-xl" />
                  </CardContent>
                  <div className="flex flex-col gap-1 pl-2 bg-white">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-satoshi font-bold text-[12px] truncate w-32">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        {renderStars(item.rating.rate)}
                        <span className="text-[12px] text-gray-500">{item.rating.rate}/5</span>
                      </div>
                    </div>

                    <span className="font-satoshi font-bold text-sm">${item.price}</span>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      <button className="text-center block border-black/10 mx-auto border px-25 py-3.5 rounded-[62px] cursor-pointer">View All</button>
      </Carousel>
    </div>
  )
}
