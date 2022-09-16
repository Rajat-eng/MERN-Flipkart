import {Box,Button,styled} from '@mui/material';
import ShoppingCartIcon  from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/api';
import {post} from '../../utils/paytm'

const LeftContainer=styled(Box)`
    padding:40px 0 0 40px;
`

const StyledButton=styled(Button)`
height:50px;
margin:0 5px;
width:46%;
`
const Image=styled('img')( ({theme})=>({
    padding:'15px 20px',
    border:'1px solid #f0f0f0'
}))
const ActionItem=({product})=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const addItemToCart=()=>{
        dispatch(addToCart(product))
        navigate("/cart")
    }

    const buyNow=async()=>{
        let res=await payUsingPaytm({amount:500,email:'mayrajat48@gmail.com'})
        let information={
            action:'https://securegw-stage.paytm.in/order/process',
            params:res
        }
        post(information)
    }


    return(
    
        <LeftContainer >
                <Image src={product.detailUrl} />
                <Box style={{width:415,padding:10}}>
                    <StyledButton onClick={()=>addItemToCart()} style={{background:'orange'}} variant="contained"><ShoppingCartIcon /> to Cart</StyledButton>
                    <StyledButton onClick={()=>buyNow()}style={{background:'#fb641b'}}variant="contained"><FlashOnIcon /> Buy Now</StyledButton>
                </Box>
        </LeftContainer>
    )
}

export default ActionItem;