
import { imageURL } from '../../constants/data';
import {styled,Grid} from '@mui/material';

const Wrapper=styled(Grid)`
margin: 10px 0px;
padding:0px 10px;
`

const Image=styled('img')( ( {theme} )=>({
    width:'100%',
    marginTop:10,
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }
}))
const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
const MidSlide=()=>{
    return(
        <>
         <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map((image,index)=>{
                    return(
                    <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                         <img style={{width:'100%'}}src={image} alt="midsection"/>
                    </Grid>
                   
                    )
                })
            }
        </Wrapper>
        <Image src={url} alt="covid" />
        </>
       
    )
}

export default MidSlide;