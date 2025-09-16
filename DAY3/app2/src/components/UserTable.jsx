import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell } from '@mui/material';

const UserTable = () => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Qualification</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>John Doe</TableCell>
                        <TableCell>Bachelor's</TableCell>
                        <TableCell>123 Main St</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
