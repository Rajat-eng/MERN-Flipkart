import {Dialog,Box,TextField, Typography,Button,styled,css} from '@mui/material';
import {useState} from 'react';
import { authenticateSignup,authenticateLogin } from '../../service/api';
import { AuthContext } from '../../context/authProvider';
import { useContext } from 'react';

const Component=styled(Box)`
height:70vh;
width:50vw;
display:inline-flex;
`

const Image=styled(Box)`
background:#2874F0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
min-width:30%;
max-width:30%;
padding:25px 25px;
`

const Wrapper=styled(Box)`
${props=>props.view==='login' && css`
display: inline-flex;
flex-direction:column;
padding:25px 25px;
flex:1;
align-items:center;
justify-content:space-between;`}
${props=>props.view==='signup' && css`
padding:25px 25px;
text-align:center;
&>p,&>button{
    margin-top:20px;
}`
}`

const LoginButton=styled(Button)`
text-transform:none;
background:#FB641B;
color:#FFF;
width:60%;
&:hover{
    background-color:#FB641B
}
`

const RequestOTP=styled(Button)`
text-transform:none;
background:#FFF;
color:#2874f0;
width:60%;
box-shadow: 0 2px 4px 0 rgb(0,0,0,20%);
`

const CreateAccount=styled(Typography)`
font-size:14px;
color:#2874f0;
font-weight:600;
cursor:pointer;
`
const Error=styled(Typography)`
font-size:12px;
color:red;
`
const LoginDialog=(props)=>{

    const accountValues={
        login:{
            view:'login',
            heading:"Login",
            subheading:"Get access to your Orders, Wishlist and Recommendations"
        },
        signup:{
            view:'signup',
            heading:"Looks like you're new here!",
            subheading:"Sign up with your mobile number to get started"
        }
    }

    const signUpInitialValues={
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:'',
        phone:'',
    }

    const loginInitialValues={
        username:'',
        password:''
    }

    const {open,setOpen}=props;
    const {setUser}=useContext(AuthContext);
    const[error,setError]=useState(false);
    const [account,setAccount]=useState(accountValues.login);
    const [signUp,setSignUp]=useState(signUpInitialValues);
    const [login,setLogin]=useState(loginInitialValues);

    const handleClose=()=>{
        setOpen(false);
        setError(false);
    }

    const toggleAccount=()=>{
        if(account.view==='login')
        setAccount(accountValues.signup);
        else
        setAccount(accountValues.login);
    }

    const onInputChange=(e)=>{
        setSignUp({...signUp,[e.target.name]:e.target.value});
    }

    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }

   

   const loginUser=async()=>{
        let response=await authenticateLogin(login);
        if(response.status===200){
            setUser(response.data.user.firstname);
            handleClose();
            return;
        }else{
            setError(true);
        }
        
   }
    
   const signupUser=async()=>{
    // call api
    let values=Object.values(signUp).map(value=>value==='')
    if(values.includes(true)){
        setError(true);
        return;
    }
    
    let response=await authenticateSignup(signUp);
    if(!response){
        window.alert('Error in creating user! check credentials');
        return;
    }
    //setUser(signUp.firstname);
    handleClose();
   }
    return(
        <Dialog open={open} onClose={()=>handleClose()} PaperProps={{sx:{maxWidth:'unset',maxHeight:'unset'}}}>
            <Component>
                <Image>
                    <Typography variant="h5"  style={{color:'white',fontWeight:500,fontSize:30}}>{account.heading}</Typography>    
                    <Typography  style={{marginTop:20, color:'white'}}>{account.subheading}</Typography>
                </Image> 
                {account.view==='login' ? (
                     <Wrapper view='login'>
                        <TextField onChange={(e)=>onValueChange(e)} name="username"style={{width:'90%'}} label="Enter Email/Mobile Number" variant="standard" />
                        {
                            error && <Error>Please enter valid username or password</Error>
                        }
                        <TextField onChange={(e)=>onValueChange(e)} name="password"style={{width:'90%'}} label="Enter Password" variant="standard"  />
                        <Typography style={{color:'grey', fontSize:12.5}}>By continuing, you agree to Flipkart's <Box component="span" style={{color:'#2874f0'}}> Terms of Use</Box> and <Box component="span" style={{color:'#2874f0'}}> Privacy policy.</Box></Typography>
                        <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                        <Typography>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>cy.
                        <CreateAccount onClick={()=>toggleAccount()} >New to Flipkart? Create an account</CreateAccount>
                    </Wrapper> 
                ):(
                    <Wrapper view='signup'>
                        <TextField style={{width:'90%'}} label="Enter Firstname" variant="standard" onChange={(e)=>onInputChange(e)} name="firstname"   />
                        <TextField style={{width:'90%'}} label="Enter Lastname" variant="standard"  onChange={(e)=>onInputChange(e)} name="lastname"  />
                        <TextField style={{width:'90%'}} label="Enter Email" variant="standard" onChange={(e)=>onInputChange(e)} name="email" />
                        <TextField style={{width:'90%'}} label="Enter Username" variant="standard" onChange={(e)=>onInputChange(e)} name="username" />
                        <TextField style={{width:'90%'}} label="Enter Password" variant="standard" onChange={(e)=>onInputChange(e)} name="password" />
                        <TextField style={{width:'90%'}} label="Enter Phone" variant="standard" onChange={(e)=>onInputChange(e)} name="phone" />
                        <Typography style={{color:'grey', fontSize:12.5}}>By continuing, you agree to Flipkart's <Box component="span" style={{color:'#2874f0'}}> Terms of Use</Box> and <Box component="span" style={{color:'#2874f0'}}> Privacy policy.</Box></Typography>
                        <LoginButton onClick={()=>signupUser()}>CONTINUE</LoginButton>
                        <RequestOTP onClick={()=>toggleAccount()}>Existing User?Log in</RequestOTP>
                    </Wrapper> 
                )}                   
            </Component>
        </Dialog>
    )
}

export default LoginDialog;