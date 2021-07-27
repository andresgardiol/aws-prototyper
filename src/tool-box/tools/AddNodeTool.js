import {useState} from "react";
import {ListItem, ListItemIcon, ListItemText, Menu, MenuItem} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import {useDispatch} from "react-redux";
import {addNode} from "../../graph/state/graphSlice";
import LiteGraphJS from 'litegraph.js/build/litegraph.js';

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
        const newNode = createNode(LiteGraphJS, {nodeName: node, xPos: 200, yPos: 200});
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
                {["Lambda", "API Gateway", "math/sum"].map((node, index) => {
                    return (<MenuItem key={node} onClick={() => handleClickNode('aws/lambda')}>{node}</MenuItem>);
                })}
            </Menu>
        </>
    );
}

export function createNode(LiteGraphJS, {nodeName, xPos, yPos}) {
    let node_const = LiteGraphJS.LiteGraph.createNode(nodeName);
    node_const.pos = [xPos, yPos];
    return node_const;
}
