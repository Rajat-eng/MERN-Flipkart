import ActionItem from './actionItem';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import {Box,Typography,styled,Grid} from '@mui/material';
import ProductDetail from './prductDetail';

const DetailView=()=>{

    const {id}=useParams();
    const dispatch=useDispatch();
    const {loading,product:{product}}=useSelector(state=>state.getProductDetails)

    useEffect(()=>{
        dispatch(getProductDetails(id));
    },[dispatch,id])

const Component=styled(Box)`
background:#F2F2F2;
`
const Container=styled(Grid)`
background:#FFFFFF;

`
const  RightContainer=styled(Grid)( ({theme})=>({
    marginTop:55,
    [theme.breakpoints.down('md')]:{
        marginLeft:60,
      }
}))




const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return(
        <Component>
            {
                loading ? 
                (<Typography variant="h1">
                    Loading Details
                </Typography>
                ):
                (
                    <Container id container>
                        <Grid item lg={4.5} md={6} sm={12} xs={12}>
                            <ActionItem  product={product}/>
                        </Grid>

                        <RightContainer item lg={7.5} md={6} sm={12} xs={12}>
                            <Typography>{product.title.longTitle}</Typography>

                            <Typography style={{marginTop:5,color:'#878787',fontSize:14,display:'inline-flex',alignItems:'center'}}>8 Rating & Reviews
                                <Box style={{width:100,marginLeft:20,}}component="span"><img src={fassured} style={{width:'inherit'}} alt="fassured"/></Box>
                            </Typography>
                            
                            <Typography>
                                <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
                            </Typography>
                            <ProductDetail product={product} />
                        </RightContainer>
                    </Container>
                )
                
            }
        </Component>
    )
}

export default DetailView