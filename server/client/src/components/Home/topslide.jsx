import "react-multi-carousel/lib/styles.css";
import {styled,Box} from '@mui/material';
import Slide from './slide';

const Component=styled(Box)`
display:flex;
`
const Left=styled(Box)(({theme})=>({
width:'80%',
[theme.breakpoints.down('md')]:{
    width:'100%',
}
}))

const Right=styled(Box)( ({theme}) =>({
    width:'20%',
    minHeight:'100%',
    marginTop:10,
    marginLeft:15,
    padding:15,
    background:'red',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))


const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const TopSlide=(props)=>{
    const {products,title,timer}=props;
   
    return(
        <Component>
            <Left>
                <Slide products={products} title={title} timer={timer}/>
            </Left>

            <Right>
                <img src={adURL} alt="advertisement" style={{width:'100%',height:'100%'}}/>
            </Right>
        </Component>
    )
}
export default TopSlide;