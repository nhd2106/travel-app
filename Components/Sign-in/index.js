import {
    Container,
    Avatar,
} from '@material-ui/core'
import HttpsIcon from '@material-ui/icons/Https';
import {
    TextField,
    Button,
    Grid,
    Checkbox,
    FormControlLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SignInStyles } from '../styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
      justifyContent: "center",
      flexDirection: 'column'
    },
    
  });

export default function SignIn() {
    const classes = useStyles()
    return (
        <>
            <Container >
                <SignInStyles>
                    <div className='top-sign-in' style={{ marginBottom: '20px' }}>
                        <Avatar style={{background: 'red'}}>
                            <HttpsIcon/>
                        </Avatar>
                        <h5>Đăng nhập</h5>
                    </div>
                    <div className='form-wraper'>
                        <form className='top-sign-in'>
                        <TextField autoComplete style={{ marginBottom: '20px' }} id="outlined-basic " label="Tên người dùng" variant="outlined" />
                        <TextField style={{ marginBottom: '20px' }} id="outlined-basic" label="Mật khẩu" variant="outlined" />
                        <FormControlLabel control={<Checkbox />} label="Ghi nhớ đăng nhập"/>
                        <Button style={{width:'100%',background: '#3B8AD9', color: 'white'}}>Đăng nhập</Button>
                        </form>
                    </div>
                </SignInStyles>
                
                
            </Container>
        </>
    )
}
