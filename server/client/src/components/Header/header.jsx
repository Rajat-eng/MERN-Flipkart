import { useState } from 'react';
import {styled,AppBar,Box,Toolbar,IconButton,Drawer,List,ListItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Search from './search';
import Buttons from './buttons';
import {Link} from 'react-router-dom';

const MyHeader=styled(AppBar)`
background-color: #2874f0;
height:fit-content;
`
const LogoBox=styled(Link)`
margin-left:15%;
text-decoration:none;
color:inherit;
`

const SubLogoBox=styled(Box)`
font-size:12px;
font-style:italic;
`

const MenuButton=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('lg')]:{
        display:'block',
    }
}))

const CustomButtons=styled(Box)(({theme})=>({
    marginLeft:10,
    width:500,
    [theme.breakpoints.down('lg')]:{
        display:'none'
    }
}))

const PlusImage=styled('img')({
    width:10,
    marginLeft:3,
})

const list=()=>{
        return(
            <Box style={{background:'white',width:200}}>
            <List>
                <ListItem button>
                    <Buttons />
                </ListItem>
            </List>
        </Box>
    )
}

const logoUrl="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
const sublogoUrl="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";


const Header=()=>{


    const [open,setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(true)
    }
    
    const handleClose=()=>{
        setOpen(false)
    }


    return(
        <MyHeader position="fixed">
          <Toolbar color="inherit">
          <MenuButton aria-label="delete" size="small" color="inherit" onClick={()=>handleOpen()}>
                <MenuIcon />
          </MenuButton>
            
            <Drawer open={open} onClose={()=>handleClose()}>
                {list()}
            </Drawer>

            <LogoBox to= "/">
            <Box>
                <img src={logoUrl} style={{width:75}} alt="logo"></img>
                <Box style={{display:'flex'}}>
                    <SubLogoBox>Explore&nbsp;
                        <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                    </SubLogoBox>
                    <PlusImage src={sublogoUrl} alt="sub-Logo"></PlusImage>
                </Box>
            </Box>
            </LogoBox>
            <Search />
            <CustomButtons>
                <Buttons />
            </CustomButtons>
           
          </Toolbar>
        </MyHeader>
    )
}

export default Header;