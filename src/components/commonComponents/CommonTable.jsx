import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props) {
    const { onRequestSort, data } = props;
    return (
        <TableHead>
            <TableRow>
                {data[0]?.tableCol?.map((headCell) =>
                    headCell.children ? (
                        <TableCell
                            key={headCell.id}
                            align="center"
                            colSpan={headCell.colSpan}
                            sx={{ fontWeight: 'bold' }}
                        >
                            {headCell.label}
                        </TableCell>
                    ) : (
                        <TableCell
                            key={headCell.id}
                            align="center"
                            rowSpan={headCell.rowSpan}
                            sx={{ fontWeight: 'bold' }}
                        >
                            {headCell.label}
                        </TableCell>
                    )
                )}
            </TableRow>

            <TableRow>
                {data[0]?.tableCol?.flatMap((headCell) =>
                    headCell.children?.map((child) => (
                        <TableCell
                            key={child.id}
                            align="center"
                            sx={{ fontWeight: 'bold' }}
                        >
                            {child.label}
                        </TableCell>
                    )) || []
                )}
            </TableRow>

            <TableRow>
                {data
                    .filter((cell) => cell.children)
                    .flatMap((cell) => cell.children)
                    .map((child) => (
                        <TableCell
                            key={child.id}
                            align="center"
                            sx={{ fontWeight: 'bold' }}
                        >
                            {child.label}
                        </TableCell>
                    ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected, rowsPerPage, page, count, onPageChange, onRowsPerPageChange } = props;
    return (
        <Toolbar
            sx={[
                {
                    borderBottom: "1px solid #ddd",
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                },
                numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                },
            ]}
        >
            <Typography
                variant={numSelected > 0 ? "subtitle1" : "h6"}
                color={numSelected > 0 ? "inherit" : "text.primary"}
                component="div"
            >
                {numSelected > 0 ? `${numSelected} selected` : "Nutrition"}
            </Typography>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
                sx={{ mt: { xs: 2, sm: 0 } }}
            />
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onRowsPerPageChange: PropTypes.func.isRequired,
};

const CommonTable = () => {
    const location = useLocation();
    const { data } = location?.state || {};
    const tableRows = data?.[0]?.tableRows || [];

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = tableRows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableRows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            [...tableRows]
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage, tableRows],
    );

    return (
        <Box>
            <Paper sx={{ width: "-webkit-fill-available", p: 2 }}>
                <EnhancedTableToolbar
                    numSelected={selected.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    count={tableRows.length}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={tableRows.length}
                            data={data}
                        />
                        <TableBody>
                            {visibleRows?.length > 0 ? (
                                visibleRows?.map((row, index) => {
                                    const isItemSelected = selected.includes(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={index}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            {Object.values(row).map((value, valueIndex) => (
                                                <TableCell key={valueIndex} align="center">
                                                    {value}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        colSpan={data?.[0]?.tableCol?.reduce((acc, item) => acc + (item.children?.length || 1), 0) || 1}
                                    >
                                        No data available
                                    </TableCell>
                                </TableRow>
                            )}
                            {emptyRows > 0 && (
                                <TableRow>
                                    <TableCell colSpan={data?.[0]?.tableCol?.length || 1} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box >
    );
};

export default CommonTable;