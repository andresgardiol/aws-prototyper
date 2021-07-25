import {useState} from "react";
import {ListItem, ListItemIcon, ListItemText, Menu, MenuItem} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

export function AddNodeTool({onClickAddNode}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const openAddNodes = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function closeMenu() {
        setAnchorEl(null);
    }

    const handleClickNode = (node) => {
        onClickAddNode(node)
        closeMenu();
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
                  onClose={closeMenu}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                  }}>
                {["Lambda", "API Gateway", "math/sum"].map((node, index) => {
                    return (<MenuItem key={node} onClick={() => handleClickNode(node)}>{node}</MenuItem>);
                })}
            </Menu>
        </>
    );
}
