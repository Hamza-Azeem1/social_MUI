import { useState } from "react"
import PropTypes from 'prop-types';
import { Mail, Notifications, Facebook, ModeNight } from "@mui/icons-material"
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography, styled, Menu, MenuItem, Switch } from "@mui/material"


const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}))


const Navbar = ({ mode, setMode }) => {

    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    LAMA DEV
                </Typography>
                <Facebook sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder="search..." />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
                <MenuItem>
                    <ModeNight />
                    <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
                </MenuItem>
            </Menu>
        </AppBar>
    )
};

Navbar.propTypes = {
    mode: PropTypes.string.isRequired,
    setMode: PropTypes.string.isRequired,
};

export default Navbar