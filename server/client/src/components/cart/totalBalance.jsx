
import {Box,Typography,styled} from '@mui/material';
import { useState,useEffect } from 'react';


const Header=styled(Box)`
padding:15px 25px;
border-bottom:1px solid #f0f0f0;
`

const Heading=styled(Typography)`
color:#878787;
`

const Container=styled(Box)`
padding:15px 24px;
min-width:200px;
max-width:330px;
&>p{
    margin-bottom:20px;
    font-size:14px;
}
`
const Price=styled(Box)`
float:right;
`
const TotalBalance=({cartItems})=>{

    const [price,setprice]=useState(0);
    const [discount,setdiscount]=useState(0);
  
    useEffect(()=>{
        totalAmount();
    },[cartItems])


    const totalAmount=()=>{
        let price=0,discount=0;
        cartItems.forEach(item=>{
            price+=item.price.mrp*item.quantity
            discount+=(item.price.mrp-item.price.cost)*item.quantity
        })
        setprice(price);
        setdiscount(discount);
    }

    
    return(

        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>

            <Container>
                <Typography>Price ({cartItems?.length})
                    <Price component="span">₹{price}</Price>
                </Typography>

                <Typography>Discount
                    <Price style={{color:'green'}}component="span">-₹{discount}</Price>
                </Typography>

                <Typography style={{borderBottom:'1px dotted #f0f0f0'}}>Delivery Charges
                    <Price style={{color:'green'}} component="span">₹40</Price>
                </Typography>

                <Typography style={{marginBottom:20}} variant="h6">Total Amount 
                    <Price component="span">₹{price-discount+40}</Price>
                </Typography>

                <Typography style={{color:'green',fontWeight:500}}> 
                   You will save ₹{discount} on this order
                </Typography>

            </Container>

        </Box>
    )
}

export default TotalBalance;