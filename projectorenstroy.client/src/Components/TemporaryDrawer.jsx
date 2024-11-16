import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Новостройки','Проекты','О компании','Контакты']
export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250, color: '#424242'}} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {pages.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton  >
                            <ListItemIcon>
                                {index % 2 === 0 ? <FiberManualRecordIcon /> : <FiberManualRecordIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider  />
            
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)} sx={{ color: '#424242' }}> <MenuIcon /> </Button>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}