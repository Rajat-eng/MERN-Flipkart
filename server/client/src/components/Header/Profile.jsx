import { Typography,Box,Menu,MenuItem } from "@mui/material/";
import { useState } from "react";

const Profile=(props)=>{
  
  const {user,setUser}=props;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    console.log('clicked')
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout=()=>{
      setUser('');
  }

  return(
    <>
    <Box onClick={handleClick} style={{cursor:'pointer'}}>
        <Typography>{user}</Typography>
    </Box>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
      >
        <MenuItem onClick={()=>{handleClose(); logout();}}>Logout</MenuItem>
        {/* profile button */}
    </Menu>
    </>
)
}

export default Profile;