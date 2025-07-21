import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSection } from "../../features/drawer/drawerSlice";
import { Box, Collapse, Typography, IconButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SummarizeIcon from '@mui/icons-material/Summarize';
import CommonDialog from "./CommonDialog";
import { ruleData, titleRules } from "../../data/gameData";

const CollapsibleSection = ({ sectionKey, title, sx, children }) => {
    const dispatch = useDispatch();
    const activeSections = useSelector((state) => state.drawer.activeSections);
    const isOpen = activeSections.includes(sectionKey);
    const toggle = () => dispatch(toggleSection(sectionKey));
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleOpenDialog = () => {
        setDialogOpen(true);
    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <Box sx={sx}>
            <CommonDialog
                open={dialogOpen}
                title="Rules"
                data={{ data: ruleData, data1: titleRules }}
                handleClose={handleCloseDialog}
            />
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

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                    {title?.includes("rule") && (
                        <IconButton onClick={(e) => {
                            e.stopPropagation();
                            handleOpenDialog();
                        }}>
                            <SummarizeIcon />
                        </IconButton>
                    )}
                </Box>
            </Box>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </Box>
    );
};

export default CollapsibleSection;
