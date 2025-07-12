import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

const CommonNavLink = ({ item = null, children, to = "", sx = {}, ...props }) => {
    // if (!item?.title) return null;
    return (
        <Link
            component={RouterLink}
            to={{
                pathname: `/${to}`,
            }}
            state={item ? item : undefined}
            underline="none"
            sx={sx}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CommonNavLink;
