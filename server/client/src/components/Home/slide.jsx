import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {styled,Box,Typography,Button,Divider} from '@mui/material';
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const Component=styled(Box)`
margin-top:10px;
padding:10px;
background:#FFFFFF;
`
const DealBox=styled(Box)`
padding:20px 30px;
display:flex;
`
const Timer=styled(Box)`
display:flex;
margin-left:20px;
align-items:center;
`

const DealText=styled(Typography)`
font-size:20px;
font-weight:600;
`
const ViewAllButton=styled(Button)`
margin-left:auto;
border-radius:2px;
font-size:13px;
font-weight:600;
`

const ProductData=styled(Box)`
padding: 25px 15px;
text-align:center;
`

const ProductImage=styled('img')({
    height:150,
    width:'auto',
})

const Image=styled('img')({
    marginLeft:20,
})

const Text=styled(Typography)`
font-size:14px;
margin-bottom:5px;
`


const Slide=(props)=>{
    const {products,title,timer}=props;
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer=({hours,minutes,seconds})=>{
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
    }
    return(
        <Component>

            <DealBox>
                <DealText>{title}</DealText> 
                {timer &&
                <Timer>
                    <Image src={timerURL} alt="timer" />
                    <Countdown date={Date.now() + 5.04e+7 } renderer={renderer} />,
                </Timer>
                }

                <ViewAllButton variant="contained">View All</ViewAllButton>
            </DealBox>
            <Divider />
            
                <Carousel responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                swipeable={false}
                draggable={false}
                infinite={true}>
                    {  
                        
                        products.map((product,index)=>(
                            <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                            <ProductData key={index}>
                                 <ProductImage src={product.url} alt="product" />
                                 <Text style={{fontWeight:'bold',color:'#212121'}}>{product.title.shortTitle}</Text>
                                 <Text style={{color:'green'}}>{product.discount}</Text>
                                 <Text style={{color:'grey',opacity:'.6'}}>{product.tagline}</Text>
                            </ProductData>
                            </Link>
                        
                        ))
                    }
                </Carousel>   
        </Component>
    )
}
export default Slide;