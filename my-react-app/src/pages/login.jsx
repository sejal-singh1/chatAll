import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import {  useState } from "react";
const Login=()=>{
    const [isLogin,setIsLogin]=useState(true);

    const toggleLogin =()=>setIsLogin(false);
    return(
        
        
    
            
        <Container   
        component={"main"}
        maxWidth="xs"
        sx={{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundImage: `url('https://img.freepik.com/premium-photo/collection-speech-bubbles-floating-symbolizing-communication-conversation_778980-10321.jpg?size=626&ext=jpg&ga=GA1.1.1603362466.1723695178&semt=ais_hybrid')`,  
            backgroundSize: "cover", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat" 
        }}
        >
            <Paper
            elevation={3}
            sx={{
                padding:4,
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                backgroundColor: "rgba(255, 255, 255, 0.1)", 
                backdropFilter: "blur(20px)" 
            }}
            >
                {
                   isLogin? 
                   <>
                   <Typography variant="h5">Login</Typography>
                   <form style={{
                   width:"100%",
                   marginTop:"1rem",
                   }}>
                    <TextField 
                    required 
                    fullWidth
                    label="username"
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField 
                    required 
                    fullWidth
                    label="password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    />
                    <Button
                    sx={{
                        marginTop:"1rem"
                    }}
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    
                    >Login</Button>
                    <Typography 
                    textAlign={"center"}
                    m={"1rem"}
                    >OR</Typography>
                    <Button 
                    fullWidth 
                    variant="text"
                
                    onClick={toggleLogin}
                    >SignUp</Button>
                   </form>
                   </>
                   
                   
                   : <span>register</span>
                }
            </Paper>

        </Container>
        
    )
    }
    export default  Login;