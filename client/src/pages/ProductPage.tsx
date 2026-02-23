
import { Footer } from '@/components/HomePage/Footer/Footer';
import { FetchProduct } from '@/components/Product/FetchProduct';
import { FetchRecProducts } from '@/components/Product/FetchRecProducts';

export const ProductPage = () => {
    return (<>
        <FetchProduct />
        <FetchRecProducts />
        <Footer/>
    </>)
}