import { FetchClothesList } from "@/components/Clothes/ClothesList/FetchClothesList"
import { Footer } from "@/components/HomePage/Footer/Footer"
import { Header } from "@/components/HomePage/Header/Header"

export const Clothes = () => {

    return (
        <>
        <Header/>
        <FetchClothesList/>
        <Footer/>
        </>
    )
}