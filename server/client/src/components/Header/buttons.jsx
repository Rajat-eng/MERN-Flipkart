//hooks
import { useState,useContext } from 'react';
import { AuthContext } from '../../context/authProvider';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

//material-ui
import {Box,Button,styled, Typography,Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Profile from './Profile';

//components
import LoginDialog from '../login/loginDialog';

const ButtonContainer=styled(Box)( ({theme})=>({
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    marginLeft:'30',
    minWidth:'30%',
    [theme.breakpoints.down('lg')]:{
        display:'flex',
        height:200,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',    
    }
}))


const Login=styled(Button)`
background:#FFFFFF;
text-transform:none;
color:#2874f0;
padding:5px 40px;
box-shadow:none;
font-weight:bold;
&:hover{
    background:#FFFFFF;
}
`

const Buttons=()=>{

    const [open,setOpen]=useState(false);

    const {cartItems}=useSelector(state=>state.cart);

    const openDialog=()=>{
        setOpen(true);
    }

    const {user,setUser}=useContext(AuthContext);
    return(
        <>
        <ButtonContainer>
            {
                user ? 
                (<Profile user={user} setUser={setUser} />) 
                :
                (<Login variant="contained" disableElevation disableRipple onClick={()=>openDialog()} >Login</Login>)
            }
            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>

            <Link to="/cart" style={{display:'flex',color:'inherit'}}>
                <Badge badgeContent={cartItems?.length} color="secondary"><ShoppingCartIcon /></Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Link>
           
            
            
        </ButtonContainer>
        <LoginDialog open={open} setOpen={setOpen} />
        </> 
    )
}

export default Buttons;