import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, price,  qunitity) {
    return { name, price,  qunitity };
}

const rows = [
    createData('Upma', 159, 6.0),
    createData('Rice Idli (3pcs.)', 237, 9.0),
    createData('Dahi Idli (3pcs.)', 262, 16.0),
    createData('Rava Idli (3pcs.)', 305, 3.7),
    createData('Kanchi Puram (spl) Idl (3pcs.)', 356, 16.0)
];

function vegitable(veginame, vegiprice, vegiq) {
return {veginame, vegiprice, vegiq};
}

const vegi_row = [
    vegitable('Matar Maharani', 159, 6.0),
    vegitable('Mater Mushroom (3pcs.)', 237, 9.0),
    vegitable('Mushroom Korma (3pcs.)', 262, 16.0),
    vegitable('Gobhi Korma (3pcs.)', 305, 3.7),
    vegitable('Aaloo Dum (spl) Idl (3pcs.)', 356, 16.0)
];

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Restaurant" value="1" />
                        <Tab label="Veg-Food" value="2" />
                        <Tab label="Non Veg-Food" value="3" />
                        <Tab label="Order List" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="2">
                    <h1>
                        Veg
                    </h1>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>All Veg Items</TableCell>
                                    <TableCell align="right">Price ₹</TableCell>

                                    <TableCell align="right">Quantity&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.price}</TableCell>

                                        <TableCell align="right">{row.qunitity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h1>Vegetable</h1>
                     <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Vegetable Items</TableCell>
                                    <TableCell align="right">Price ₹</TableCell>

                                    <TableCell align="right">Quantity&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {vegi_row.map((row) => (
                                    <TableRow
                                        key={row.veginame}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.veginame}
                                        </TableCell>
                                        <TableCell align="right">{row.vegiprice}</TableCell>

                                        <TableCell align="right">{row.vegiq}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    
                </TabPanel>
                <TabPanel value="1">
                    <h1>
                        Restaurant
                    </h1>
                </TabPanel>
                <TabPanel value="3">
                    <h1>
                        Non Veg
                    </h1>
                   
                </TabPanel>
                <TabPanel value="4">
                    <h1>
                        Order List
                    </h1>
                </TabPanel>
            </TabContext>
        </Box>
    );
}
