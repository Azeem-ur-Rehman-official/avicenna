// components/OfficesTable.js
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Container,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useMediaQuery,
  useTheme,
  TablePagination,
  Grid,
} from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { deleteRequest, getRequest, postRequest } from "@/app/RequestsAPI/RequestsApi";
import Link from "next/link";
import Image from "next/image";

const createData = (title, slug, dateTime) => {
  return { title, slug, dateTime };
};

// Example student contact data


const OfficesTable = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(filteredRows);
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = filteredRows.filter(
      (row) =>
        row.firstName.toLowerCase().includes(query) ||
        row.lastName.toLowerCase().includes(query) ||
        row.email.toLowerCase().includes(query) ||
        row.message.toLowerCase().includes(query) ||
        row.createdAt.toLowerCase().includes(query)
    );

    setFilteredRows(filteredData);
  };

  const handleView = (row) => {
    setSelectedRow(row);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedRow(null);
  };

  const handleDelete = async(rowToDelete) => {
    await deleteData(rowToDelete);
    setFilteredRows(filteredRows.filter((row) => row !== rowToDelete));
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const getData = async () => {
    const data = await getRequest("/api/offices");
    if (data.status == 200) {
      setFilteredRows(data.data.Data);
    }
  };
  const deleteData = async (payload) => {
    
    await postRequest(`/api/offices/delete`,{id:payload._id});
  
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, lineHeight: "1.2em", color: "#382153" }}
        >
          All Offices
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="offices/new-offices"
          sx={{
            borderRadius: "30px",
            maxHeight: "35px",

            fontWeight: 700,
            background: "#213b75",
            "&:hover": {
              background: "#001e60",
            },
          }}
        >
          Add Office
        </Button>
      </Grid>

      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearch}
      />
      <TableContainer component={Paper}>
        <Table aria-label="student contact table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#382153" }}>
              <TableCell style={{ color: "white" }}>Heading</TableCell>
              <TableCell style={{ color: "white" }}>Email</TableCell>
              <TableCell style={{ color: "white" }}>Phone</TableCell>
              <TableCell style={{ color: "white" }}>Type</TableCell>
              
              
              <TableCell align="right" style={{ color: "white" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                 
                  <TableCell>{row.heading} </TableCell>

                 

                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.type=="row1"?"Pakistan and UAE":"India, Nepal, and Bangladesh"}</TableCell>
                  <TableCell align="right">
                    {/* <IconButton  component={Link}
                        href={`/admin/dashboard/news/update/${row._id}`}>
                      <Edit
                        style={{ color: "blue" }}
                       
                      />
                    </IconButton> */}
                    <IconButton onClick={() => handleDelete(row)}>
                      <Delete style={{ color: "red" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 30, 45]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ backgroundColor: "#382153", color: "white" }}
        />
      </TableContainer>

      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        fullScreen={fullScreen}
        maxWidth="md"
        PaperProps={{
          style: {
            backgroundColor: "#382153",
            color: "white",
            width: fullScreen ? "97%" : "40%",
          },
        }}
      >
        <DialogTitle>View Contact</DialogTitle>
        {selectedRow && (
          <DialogContent>
            <Typography>Name: {selectedRow.title} </Typography>
            <Typography>Email: {selectedRow.slug}</Typography>

            <Typography>Date & Time: {selectedRow.createdAt}</Typography>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default OfficesTable;
