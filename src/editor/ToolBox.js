import {useState} from "react";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Menu, MenuItem,
    useTheme
} from "@material-ui/core";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddBoxIcon from '@material-ui/icons/AddBox';

export function ToolBox() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAddNodes = Boolean(anchorEl);

    function handleDrawerToggle() {
        setOpen(!open);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Drawer variant="permanent" className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}>
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerToggle}>
                        {open ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <AddNodeTool/>
                </List>
            </Drawer>
        </>
    )
}

function AddNodeTool() {
    const [anchorEl, setAnchorEl] = useState(null);
    const openAddNodes = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <ListItem button onClick={handleClick} aria-controls="long-menu" aria-haspopup="true">
                <ListItemIcon><AddBoxIcon/></ListItemIcon>
                <ListItemText primary="Agregar Nodo"/>
            </ListItem>
            <Menu id="long-menu"
                  keepMounted
                  open={openAddNodes}
                  onClose={handleClose}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                  }}>
                <MenuItem onClick={handleClose}>Lambda</MenuItem>
                <MenuItem onClick={handleClose}>API Gateway</MenuItem>
                <MenuItem onClick={handleClose}>DynamoDB</MenuItem>
            </Menu>
        </>
    );
}


const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }
}));
