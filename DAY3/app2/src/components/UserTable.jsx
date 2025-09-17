import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import axios from 'axios';

const UserTable = () => {

    var [userdata, changedata] = useState([])
    var [postdata, changepostdata]=useState([])

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            changedata(response.data)
        })

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        changepostdata(response.data)
    })

    return (


        <div>
            {/* <p>{userdata}</p> */}

            <TableContainer sx={{ border: "1px solid #848484ff", borderRadius: "8px" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Qualification</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {userdata.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.address.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainer>
                <Table sx={{border:"1px solide #848484ff" , borderRadius:"8px"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>UserId</TableCell>
                            <TableCell>Id</TableCell>
                        </TableRow>
                        

                    </TableHead>
                    <TableBody>    
                        {postdata.map((postt)=>(
                            <TableRow>
                                <TableCell >{postt.userId}</TableCell>
                                <TableCell> {postt.id}</TableCell>
                                <TableCell>{postt.body}</TableCell>
                                   
                            </TableRow>

                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </div>

    );
};

export default UserTable;
