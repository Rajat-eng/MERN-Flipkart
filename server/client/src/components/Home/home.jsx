import Navbar from "./navbar";
import Banner from "./banner";
import Slide from "./slide";
import MidSlide from "./midslide";
import TopSlide from "./topslide";
import {styled,Box} from '@mui/material';
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import {useDispatch,useSelector } from 'react-redux';


const Container=styled(Box)`
padding:10px;
background:#F2F2F2;
`
const Home=()=>{

    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);

    const {products}=useSelector(state=>state.getProducts.products) // from redux
   

return(
    <>
    <Navbar /> 
    <Container>
        <Banner />
        {   
            products===undefined ? (<Box>Deals Coming Soon ...</Box>) : 
           
            (
            <>
            <TopSlide products={products} title="Deal of the Day" timer={true}/>
            <Slide products={products} title="Discounts For You" timer={false}/>
            <MidSlide></MidSlide>
            <Slide products={products} title="Recommended Items"timer={false}/>
            <Slide products={products} title="Trending Items"timer={false}/>
            <Slide products={products} title="Season's Top Picks"timer={false}/>
            <Slide products={products} title="Top Deals on Accessories"timer={false}/>
            </>
            )
        }
       
    </Container>
    
    </>
    
)
}
export default Home;