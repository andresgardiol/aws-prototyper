import {useState} from "react";
import {ListItem, ListItemIcon, ListItemText, Menu, MenuItem} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

export function AddNodeTool() {
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
