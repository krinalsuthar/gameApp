import { useDispatch, useSelector } from "react-redux";
import { toggleSection } from "../../features/drawer/drawerSlice";
import { Box, Collapse, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const CollapsibleSection = ({ sectionKey, title, sx, children }) => {
    const dispatch = useDispatch();
    const activeSections = useSelector((state) => state.drawer.activeSections);

    const isOpen = activeSections.includes(sectionKey);
    const toggle = () => dispatch(toggleSection(sectionKey));

    return (
        <Box sx={sx}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
                onClick={toggle}
            >
                <Typography sx={{ mb: 1, fontSize: "15px", fontWeight: 500 }}>{title}</Typography>
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </Box>

            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </Box>
    );
};
export default CollapsibleSection