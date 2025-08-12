import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const CommonDialog = ({ open, handleClose, data = [] }) => {
    const data1 = data?.data?.title === "rules" ? data?.data?.["Specific sports rules"] : data?.data
    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                {data?.data?.title}
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>
            {
                data?.data?.title === "rules" ? (
                    <>
                        {data?.data?.title == "rules" && data?.data1?.map((data, index) => (
                            <Typography variant='subtitle1' mt={1} px={2}>
                                {index + 1} {data}
                            </Typography>
                        ))}
                        {data1?.map((item, index) => (
                            <Box px={2}>
                                <Typography variant='h6' mt={2} >
                                    {index + 1} {item?.sport}
                                </Typography>
                                {item?.rules?.map((data, index) => (
                                    <Typography variant="caption" gutterBottom>
                                        {`${index + 1}.`} {data}
                                        <br />
                                    </Typography>
                                ))}
                                {item?.sections?.map((data, index1) => (
                                    <Box>
                                        <Typography variant="body2" mt={2}>
                                            {index1 + 1} {data.title}
                                        </Typography>
                                        {data?.rules?.map((item, index) => (
                                            <Typography variant="caption" gutterBottom>
                                                {`${index1 + 1}.${index + 1}`} {item}
                                                <br />
                                            </Typography>
                                        ))}
                                    </Box>
                                ))}
                            </Box>
                        ))}
                    </>
                ) : (
                    <>
                        <Box sx={{ borderRadius: 2, width: '100%' }}>
                            {Object.entries(data)?.map(([sport, leagues]) => (
                                <Box key={sport} sx={{ mb: 2 }}>
                                    <Box sx={{ px: 2, py: 1, borderBottom: '1px solid #444' }}>
                                        <Typography variant="h6" fontWeight="bold">
                                            {sport.charAt(0).toUpperCase() + sport.slice(1)}
                                        </Typography>
                                    </Box>
                                    {leagues.map((league, index) => (
                                        <Box
                                            key={`${sport}-${index}`}
                                            sx={{
                                                px: 2,
                                                py: 1.5,
                                                borderBottom: '1px solid #444',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 1,
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography fontWeight="bold">{league.title}</Typography>

                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    sx={{
                                                        color: '#000',
                                                        borderColor: '#fff',
                                                        borderRadius: '15px',
                                                        px: 2,
                                                        py: 0.3,
                                                        textTransform: 'none',
                                                        fontSize: '0.75rem',
                                                    }}
                                                    startIcon={<AddIcon />}
                                                >
                                                    All
                                                </Button>
                                            </Box>
                                            {league.subtitle.length > 0 ? (
                                                league.subtitle.map((sub, idx) => (
                                                    <Box
                                                        key={idx}
                                                        sx={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            pl: 1,
                                                        }}
                                                    >
                                                        <Typography fontSize="0.9rem">{sub}</Typography>
                                                        <IconButton size="small" sx={{ color: '#000' }}>
                                                            <AddIcon />
                                                        </IconButton>
                                                    </Box>
                                                ))
                                            ) : (
                                                <Typography fontSize="0.9rem" pl={1}>
                                                    No Match yet!!!
                                                </Typography>
                                            )}
                                        </Box>
                                    ))}
                                </Box>
                            ))}
                        </Box>
                    </>
                )
            }
            {/* <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Save changes
                </Button>
            </DialogActions> */}
        </BootstrapDialog>
    );
};

export default CommonDialog