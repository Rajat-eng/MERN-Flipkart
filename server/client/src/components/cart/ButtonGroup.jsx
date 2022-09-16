
import {Button,styled,Box} from '@mui/material';
import { useDispatch} from 'react-redux';
import { increaseQuantity,decreaseQuantity} from '../../redux/actions/cartActions';

const QtyBtns=styled(Button)`
margin-top:10px;
`

const StyledButton=styled(Button)`
border-radius:50%;
width:30%;
color:black;
background:#f0f0f0;
`

const Quantity=({item})=>{

    const dispatch=useDispatch();

    const increase=()=>{
        dispatch(increaseQuantity(item))
    }

    const decrease=()=>{
        if(item.quantity===1){
            return;
        }
        dispatch(decreaseQuantity(item))
    }

    

    return( 
    <QtyBtns>
        <StyledButton onClick={()=>decrease()}>-</StyledButton>
        <Box component="span">{item.quantity}</Box>
        <StyledButton onClick={()=>increase()}>+</StyledButton>
    </QtyBtns>
    )
}



export default Quantity;