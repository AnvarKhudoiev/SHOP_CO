import type { ProductT } from "@/api/Products.api"
import { useState, type FC } from "react"
import { Header } from "../HomePage/Header/Header"
import { FaRegStar, FaStar, FaPlus, FaMinus } from "react-icons/fa6"
import { FaStarHalfAlt } from "react-icons/fa"
import { useSelector } from "react-redux"
import type { RootState } from "@/store"
import { useMutation } from "@tanstack/react-query"
import { addToCart, type CartT } from "@/api/Carts.api"
import { queryClient } from "@/utils/queryClient"

interface PropsT {
    data: ProductT
}

export const Product: FC<PropsT> = ({ data }) => {
    const [count, setCount] = useState(1)
    const token = useSelector((state: RootState) => state.auth.token)
    const userId = 1;
    const productMutation = useMutation({
        mutationFn: () => addToCart(userId, data.id, count),
        onSuccess: (cart: CartT) => {
            console.log("Added to cart:", cart);
            alert("Product added to cart!");
            queryClient.invalidateQueries({ queryKey: ["cart", userId] });
        },
        onError: (err) => {
            console.error(err);
            alert("Failed to add product to cart. Please Sign In");
        }

    })

    const handleMinus = () => {
        setCount(prev => prev > 1 ? prev - 1 : 1)
    }

    const handlePlus = () => {
        setCount(prev => prev < 5 ? prev + 1 : 5)
    }

    const renderStars = (rate: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rate >= i) {
                stars.push(<FaStar size={'12px'} key={i} className="text-yellow-400" />);
            } else if (rate >= i - 0.5) {
                stars.push(<FaStarHalfAlt size={'12px'} key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar size={'12px'} key={i} className="text-yellow-400" />);
            }
        }
        return stars;
    };

    return (

        <>
            <Header />
            <div className="w-[80%] mx-auto pt-10 pb-20">
                <div className="flex flex-col lg:flex-row items-center  gap-5 xl:gap-10">
                    <div className="lg:w-[80%]  h-full  sm:h-90 md:h-100  xl:w-[80%] overflow-hidden lg:h-70 xl:h-140 p-5 xl:p-10 rounded-4xl bg-[#F0EEED] flex items-center justify-center">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-[65%] h-full object-contain drop-shadow-xl"
                        />
                    </div>
                    <div className="xl:flex xl:gap-2 xl:flex-col">
                        <h1 className="font-integralcf font-bold xl:text-[2rem]">{data.title}</h1>
                        <div className="flex items-center gap-1 ">
                            {renderStars(data.rating.rate)}
                            <span className="text-xs text-gray-500 text-[12px] sm:text-[.7rem] xl:text-[1rem]">{data.rating.rate}/5</span>
                        </div>
                        <span className="font-satoshi font-bold text-[14px] xl:text-[1rem]">${data.price}</span>
                        <p className="font-satoshi font-normal text-[12px] md:text-xs xl:text-sm text-black/60 pb-5">
                            {data.description}
                        </p>
                        <div className="w-ful flex flex-col sm:flex-row justify-center gap-3 items-center xl:justify-start">
                            <div className="flex items-center gap-5 bg-black/10 px-4 py-2 rounded-[62px]">
                                <button className="cursor-pointer" onClick={handleMinus}><FaMinus /></button>
                                <span>{count}</span>
                                <button className="cursor-pointer" onClick={handlePlus}><FaPlus /></button>
                            </div>
                            <button disabled={productMutation.isPending || !token} onClick={() => productMutation.mutate()} className=" cursor-pointer rounded-[62px] bg-black text-white xl:text-[1.2rem] font-satoshi font-medium text-[12px] xl:px-50 px-20 py-3">  {productMutation.isPending ? "Adding..." : "Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}