import {Box,Typography,styled, Button} from '@mui/material';
import Quantity from './ButtonGroup';
import { useDispatch } from 'react-redux';
import {removeFromCart} from '../../redux/actions/cartActions'; 

const Component=styled(Box)`
border-top:1 px solid #f0f0f0;
display:flex;
background:#ffffff;
`

const LeftComponent=styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`

const RemoveBtn=styled(Button)`
margin-top:30px;
font-size:16px;
color:black;
font-weight:bold;
`


const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

const CartItem=({item})=>{

    const dispatch=useDispatch();

    const removeItem=(id)=>{
        dispatch(removeFromCart(id))
    }

    return(
        <Component>

            <LeftComponent>
                <img src={item.url} style={{height:150,width:150}} alt="product"/>
                <Quantity item={item} style={{width:'inherit'}} />
            </LeftComponent>

            <Box style={{marginTop:10}}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography style={{marginTop:5,color:'#878787',fontSize:14,display:'inline-flex',alignItems:'center'}}>Seller:RetailNet
                    <Box component="span" style={{width:50,marginLeft:20,}}><img src={fassured} style={{width:'inherit'}} alt="flipkart" /></Box>
                </Typography>
                <Typography style={{marginTop:20}}>
                        <Box component="span" style={{fontWeight:600,fontSize:17}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span" style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span" style={{color:'#388E3C'}}>{item.price.discount}</Box>
                </Typography>
                <RemoveBtn onClick={()=>removeItem(item.id)}>Remove</RemoveBtn>
            </Box>

        </Component>
    )
}

export default CartItem;