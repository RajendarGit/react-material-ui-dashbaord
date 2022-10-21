import { Box, Toolbar, AppBar, Typography, Menu, MenuItem, Modal, styled } from "@mui/material"
import IconButton from '@mui/material/IconButton'
import SpaIcon from '@mui/icons-material/Spa';
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from "./Sidebar";
import { sidebarProfileData } from "../data/data";
import { Link } from "react-router-dom";
// import { aLink } from "../components/Link";

const sideModal = {
    position: 'absolute',
    width: 280,
    height: '100vh',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 0,
};

const aLink = styled(Link)(({theme}) => ({
    textDecoration: 'none',
}))

const Nav = ({mode, setMode}) => {
    const [open, setOpen] = useState(false)
    const [sideOpen, setSideOpen] = useState(false)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{position: 'stick'}} color='primary'>
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: { xs: 'block' , md: 'none' } }}
                onClick={() => setSideOpen(true)}
                >
                <MenuIcon />
                </IconButton>
                <SpaIcon sx={{ mr: 1 }}/>
                <Typography variant="h6" component="h4" sx={{ flexGrow: 1 }}>
                    Nature
                </Typography>
                <Avatar
                    sx={{ mr: 1 }}
                    alt="Remy Sharp" src="/static/images/avatar/1.jpg"
                    onClick={(e) => setOpen(true)}
                />
                <IconButton color="inherit"><NotificationsNoneIcon/></IconButton>
            </Toolbar>
            <Menu
                id="basic-menu"
                open={open}
                onClose={(e) => setOpen(false)}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                {sidebarProfileData.map(profileData => (
                    <Link to={`/${profileData.link}`} key={profileData.name}>
                        <MenuItem onClick={(e) => setOpen(false)} >{profileData.link}</MenuItem>
                    </Link>
                ))}
                <MenuItem>Logout</MenuItem>
            </Menu>
            </AppBar>
                
            <Modal
                open={sideOpen}
                onClose={() => setSideOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box color={'text.primary'} sx={sideModal}>
                    <IconButton
                        variant="contained"
                        onClick={() => setSideOpen(false)}
                        sx={{ float: 'right', position: 'relative', zIndex: '1', marginTop: '1rem', marginBottom: '1rem', marginRight: '1rem' }}
                        >
                        <CloseIcon />
                    </IconButton>
                    <Sidebar setMode={setMode} mode={mode} sideOpen={sideOpen} setSideOpen={setSideOpen}/>
                </Box>
            </Modal>
        </Box>
    )
}

export default Nav