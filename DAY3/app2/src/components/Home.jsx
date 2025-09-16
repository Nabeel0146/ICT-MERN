import { AppBar, Table, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material'
import React from 'react'

export const Home = () => {
  return (
    <div>
    <AppBar>
        <Toolbar>
            <h2>Home Page</h2>
        </Toolbar>

    </AppBar>

    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <Tablecell></Tablecell>
                    <Tablecell></Tablecell>
                    <Tablecell></Tablecell>
                </TableRow>
            </TableHead>
        </Table>
    </TableContainer>
</div>
    
  )
}
