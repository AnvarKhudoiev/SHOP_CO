import { Header } from "@/components/HomePage/Header/Header"
import { Hero } from "@/components/HomePage/Hero/Hero"
import { FetchMenRecommendedClothes } from "@/components/HomePage/RecommendedClothes/FetchMenRecommendedClothes"
import { FetchWomenRecommendedClothes } from "../components/HomePage/RecommendedClothes/FetchWomenRecommendedClothes"
import { GridSection } from '../components/HomePage/GridSection/GridSection';
import { Footer } from "../components/HomePage/Footer/Footer";


export const HomePage = () => {
    return (<>
        <Header />
        <Hero/>
        <FetchMenRecommendedClothes/>
        <FetchWomenRecommendedClothes/>
        <GridSection/>
        <Footer/>
    </>)
}