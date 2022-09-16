import { Typography,Box,styled,Table, TableCell,TableBody,TableRow } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText=styled(Box)`
&>p{
    font-size:14px;
    margin-top:10px;
}
`
const ColumnText=styled(TableRow)`
border:none;
&>td{
    font-size:14px;
    margin-top:10px;
}
`;
const StyledBadge=styled(LocalOfferIcon)`
margin-right:10px;
color:#00CC00;
font-size:15px;
vertical-align:middle;
`;

const myDate = new Date(new Date().getTime()+(5*24*60*60*1000));
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
const ProductDetail=({product})=>{
    return(
        <>
        <Typography style={{fontSize:20,fontWeight:'bold',margin:'8px 0px',color:'darkgrey'}}>Available Offers</Typography>
        <SmallText>
            <Typography><Box style={{fontWeight:'bold'}} component="span"><StyledBadge /> Price</Box> Get extra 29% off (price inclusive of cashback/coupon)<Box component="span" style={{color:'#2874f0',fontWeight:'bold'}}>T&C</Box></Typography>
            <Typography><Box style={{fontWeight:'bold'}} component="span"><StyledBadge /> Bank Offer</Box> 10% off on Axis Bank Credit Card and Credit Card EMI Trxns,up to ₹1750. On orders of ₹5000 and above <Box component="span" style={{color:'#2874f0',fontWeight:'bold'}}>T&C</Box> </Typography>
            <Typography><Box style={{fontWeight:'bold'}} component="span"><StyledBadge /> Bank Offer</Box> 8% off on Flipkart Axis Bank Credit Card, up to ₹1750. On orders of ₹5000 and above <Box component="span" style={{color:'#2874f0',fontWeight:'bold'}}>T&C</Box></Typography>
            <Typography><Box style={{fontWeight:'bold'}} component="span"><StyledBadge /> Bank Offer</Box> 10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1,750. On orders of ₹5,000 and above <Box component="span" style={{color:'#2874f0',fontWeight:'bold'}}>T&C</Box></Typography>
        </SmallText>
        <Typography style={{color:'#2874f0',fontWeight:'bold',marginTop:12,pointer:'cursor',}}>View 12 more Offers</Typography>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell align="left" style={{color:'#878787',maxWidth:50}}>Delivery</TableCell>
                    <TableCell style={{fontWeight:'bold'}}>Delivery By {myDate.toDateString()}</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell align="left" style={{color:'#878787',maxWidth:50}}>Warranty</TableCell>
                    <TableCell style={{fontWeight:'bold'}}>1 year</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell align="left" style={{color:'#878787',maxWidth:50}}>Seller</TableCell>
                    <TableCell>
                        <Box style={{color:'#2874f0'}}>SuperComNet</Box>
                    </TableCell>
                </ColumnText>
                <ColumnText colspan={2} rowspan={2}>
                    <img src={adURL} style={{maxWidth:300,height:120}} alt="flipimage" />
                </ColumnText>
                <ColumnText>
                    <TableCell align="left" style={{color:'#878787',maxWidth:50}}>Description</TableCell>
                    <TableCell style={{}}>{product.description}</TableCell>
                </ColumnText>
                
            </TableBody>

        </Table>
        </>
    )
}
export default ProductDetail;