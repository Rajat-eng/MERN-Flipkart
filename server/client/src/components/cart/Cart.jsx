import {useSelector} from 'react-redux';
import {Grid,Box,Typography,styled,Button} from '@mui/material';
import CartItem from './cartItem';
import TotalBalance from './totalBalance';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';


const Container=styled(Grid)`
padding:30px 135px;
background:#ffffff;
`

const Header=styled(Box)`
padding: 15px 24px;
`
const ButtonWrapper=styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0/10%);
display:flex;
justify-content:flex-end;
align-items:center;
min-width:200px;
`

const StyledButton=styled(Button)`
background:#fb641b;
color:white;
min-width:200px;
font-size:16px;

`
const Cart=()=>{

    const buyNow=async()=>{
        console.log('pay')
        let res=await payUsingPaytm({amount:500,email:'mayrajat48@gmail.com'})
        let information={
            action:'https://securegw-stage.paytm.in/order/process',
            params:res
        }
        post(information)
    }

    const {cartItems}=useSelector(state=>state.cart)
    
    return(
        <>
            {
                 cartItems.length >0 ? 
                 (
                    <Container container>
                        <Grid item lg={8} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart({cartItems.length})</Typography>
                            </Header>

                            {
                                cartItems.map((item,index)=>{
                                    return(
                                        <CartItem key={index} item={item}/>
                                    )
                                })
                            }
                        <ButtonWrapper>
                            <StyledButton onClick={()=>buyNow()}>Place Order</StyledButton>
                        </ButtonWrapper>
                        </Grid>
                            
                        <Grid item lg={4} md={3} sm={12} xs={12}>
                            <TotalBalance cartItems={cartItems} />
                        </Grid>
                    </Container>
                 ):
                 (<div>Empty</div>)
            }
        </>
    )
}

export default Cart;