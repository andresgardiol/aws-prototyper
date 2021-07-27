import {useState} from "react";
import {Divider, Drawer, IconButton, List, makeStyles} from "@material-ui/core";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {AddNodeTool} from "./tools/AddNodeTool";
import {useStyles} from "./styles";

export function ToolBox({onClickAddNode}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    function handleDrawerToggle() {
        setOpen(!open);
    }

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
                    <AddNodeTool onClickAddNode={(node) => onClickAddNode(node)}/>
                </List>
            </Drawer>
        </>
    )
}
