import { Drawer, List, ListItem, ListItemButton, ListItemText, Link } from '@mui/material';

export default function SideNav() {
    return (
        <List sx={{ mt: 8 }}>
            <ListItem>
            <ListItemButton component={Link} href="/">
                <ListItemText primary="Home" />
            </ListItemButton>
            </ListItem>
            <ListItem>
            <ListItemButton component={Link} href="/about">
                <ListItemText primary="About" color='red' />
            </ListItemButton>
            </ListItem>
        </List>

    );
};