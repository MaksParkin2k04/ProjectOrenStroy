import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import '../Containers/App.css';
export default function Form() {
   
    return (
        <form className='form' style={{ backgroundColor: '#B0E0E6' }} >


            <Typography gutterBottom variant="h5" component="div">
                Закажите консультанцию
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </Typography>

            <TextField
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Ваше имя"
            />
            <TextField
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Ваш номер"
            />
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </form>
    );
}