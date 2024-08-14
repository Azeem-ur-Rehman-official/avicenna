// components/CategoryTable.js
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
import LoadingButton from "@mui/lab/LoadingButton";


// Example student contact data


const CategoryTable = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);

  const [categoryName, setCategoryName] = useState('');
  const [loading, setloading] = useState(false);
 
  console.log(filteredRows);
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = filteredRows.filter(
      (row) =>
        row.heading.toLowerCase().includes(query) ||
       
        row.createdAt.toLowerCase().includes(query)
    );

    setFilteredRows(filteredData);
  };

 

  const handleDelete = (rowToDelete) => {
   
    deleteData(rowToDelete._id);
    setFilteredRows(filteredRows.filter(row => row !== rowToDelete));
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
    const data = await getRequest("/api/gallary/category");
    if (data.status == 200) {
      setFilteredRows(data.data.Data);
    }
  };
  const deleteData = async (id) => {
   
    const data = await postRequest(`/api/gallary/category/delete`,{id:id});
   
  };
  const createCategory= async()=>{
    setloading(true);
    const data = await postRequest("/api/gallary/category",{heading:categoryName});
    if (data.status == 201) {
      await getData()
      setloading(false);
     
    }
   else{
    setloading(false);
   }
  }
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
        Gallary category
      </Typography>
      <Button
          variant="contained"
          color="primary"
         onClick={()=>props.back()}
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
          Upload Images
        </Button>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
         alignItems:"center",
         gap:3
        }}
      >
         <TextField value={categoryName} id="outlined-basic" label="Write category name" variant="outlined" 
          onChange={(e)=>setCategoryName(e.target.value)}
         />
         {loading==true?<LoadingButton
                  loading
                  variant="outlined"
                  sx={{
                    borderRadius: "30px",
                    maxHeight: "40px",

                    fontWeight: 700,
                    width: "120px",
                  }}
                >
                  Create
                </LoadingButton>:<Button
          variant="contained"
          color="primary"
        onClick={()=>createCategory()}
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
          Create
        </Button>}
      
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
              <TableCell style={{ color: "white" }}>Category</TableCell>
              <TableCell style={{ color: "white" }}>Date</TableCell>
             
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
                  <TableCell>
                    {row.heading}
                  </TableCell>
                  <TableCell>
                    {row.createdAt}
                  </TableCell>

                
                  <TableCell align="right">
                   
                 
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

      
    </Container>
  );
};

export default CategoryTable;
