import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, Toolbar, Typography,ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import UserSidebar from './Authentication/UserSidebar';
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
const useStyle =makeStyles(()=>({
    title:{
        flex:1,
        color:'gold',
        fontFamily:'Montserrat',
        fontWeight:'bold',
        cursor:'pointer'
    }
}))


const Header = () => {
    const classes=useStyle();
    const history=useHistory();
    const {currency,setCurrency,user}= CryptoState();
    console.log(currency);
    const darkTheme=createTheme({
        palette: {
            primary:{
                main:"#fff"
            },
            type:"dark",
        },

    });
    return (
      
    
            <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography onClick={()=>history.push("/")}className={classes.title} variant='h6'>Crypto Hunter</Typography>
                        <Select varient="outlined"
                        style={{width:100,
                        height:40,
                        marginRight:15}}
                        value={currency}
                        onChange={(e)=>setCurrency(e.target.value)}>
                            <MenuItem value={"INR"}>INR</MenuItem>
                            <MenuItem value={"USD"}>USD</MenuItem>
                        </Select>
                      {user ? <UserSidebar />:  <AuthModal/>}
                    </Toolbar>
                </Container>

            </AppBar>
            </ThemeProvider>
        
    )
}

export default Header
