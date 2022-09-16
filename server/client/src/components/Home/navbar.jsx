import {navData} from '../../constants/data';
import {Box, Typography,styled} from '@mui/material';
 
const Nav=styled(Box)( ( {theme} ) =>({
display:'flex',
justifyContent:'space-between',
margin: '0px 130px',
overflow:'hidden overlay',
[theme.breakpoints.down('lg')]:{
    margin:0,
    width:'100%'
}
}))

const NavIcon=styled(Box)`
text-align:center;
margin:0px 10px;
`
const Text=styled(Typography)`
font-size:14px;
`
const Navbar=()=>{
    return(
        <Nav>
            {
                navData.map((data,index)=>{
                    return(
                        <NavIcon key={index}>
                            <img src={data.url} alt="nav-icons" style={{width:60}}></img>
                            <Text>{data.text}</Text>
                        </NavIcon>
                    )
                })
            }
        </Nav>
    )
}

export default Navbar;