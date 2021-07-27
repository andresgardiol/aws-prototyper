import {useState} from "react";
import {ListItem, ListItemIcon, ListItemText, Menu, MenuItem} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import {useDispatch} from "react-redux";
import {addNode} from "../../graph/state/graphSlice";
import {customNodes} from "../../graph/CustomNodes";
import {createNode} from "../../graph/utils/graphUtils";

export function AddNodeTool() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const openAddNodes = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function closeMenu() {
        setAnchorEl(null);
    }

    const handleClickNode = (node) => {
        const newNode = createNode(node);
        dispatch(addNode(newNode));
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
                  getContentAnchorEl={null}
                  anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}
            >
                {customNodes.map((node, index) => {
                    return (
                        <MenuItem key={node.name} onClick={() => handleClickNode(node.name)}>{node.title}</MenuItem>);
                })}
            </Menu>
        </>
    );
}
