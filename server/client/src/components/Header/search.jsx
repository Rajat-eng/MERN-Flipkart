import {styled,Paper,InputBase,Divider,IconButton, List, ListItem,} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBox=styled(Paper)`
margin-left:20px;
`

const ListWrapper=styled(List)(({theme})=>({
background:'#FFFFFF',
position:'absolute',
top:50,
width:'inherit',
  [theme.breakpoints.down('sm')]:{
    left:50,
    right:10,
  }
}))



 const Search=()=> {

  const [text,setText]=useState('');


  const {products}=useSelector(state=>state.getProducts.products)
   
  return (
    <>
    <SearchBox
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:500,height: 28 }}
    >
      <InputBase
        sx={{ ml: 3, flex: 1 }}
        placeholder="Search for products,brands and more"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e)=>setText(e.target.value)}
      />


      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {
        text && 
        <ListWrapper>
          {
            products.filter(product=>product.title.shortTitle.toLowerCase().charAt(0)===(text.toLowerCase().charAt(0))).map(product=>{
              return(
                <ListItem>
                  <Link to={`/product/${product.id}`} onClick={()=>setText('')} style={{textDecoration:'none',color:'inherit'}}>
                    {product.title.shortTitle}
                  </Link>
                </ListItem>
              )
            })
          }
        </ListWrapper>
      }
    </SearchBox>
    
      
    </>
    
  );
}

export default Search;

