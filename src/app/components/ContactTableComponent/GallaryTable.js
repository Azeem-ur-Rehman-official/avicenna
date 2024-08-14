// components/GallaryTable.js
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
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
  Avatar,
  CardMedia,
} from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import {
  deleteRequest,
  getRequest,
  postRequest,
} from "@/app/RequestsAPI/RequestsApi";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "next/link";
import { Field } from "formik";
import Image from "next/image";

// Example student contact data

const GallaryTable = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [category, setcategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [cName, setcName] = useState("");
  const [loading, setloading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageView, setImageView] = useState(null);
  console.log("categoryName", cName);
  const handleFileChange = (e, setFile) => {
    const file = e;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(file);
  };
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
    deleteData(rowToDelete);
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
    const data = await getRequest("/api/gallary");
    if (data.status == 200) {
      setFilteredRows(data.data.Data);
    }
  };
  const getCategoryData = async () => {
    const data = await getRequest("/api/gallary/category");
    if (data.status == 200) {
      setcategory(data.data.Data);
    }
  };
  const deleteData = async (payload) => {
    const data = await postRequest(`/api/gallary/delete`, { payload});
  };
  const createGallaryImage = async () => {
    setloading(true);
    const data = await postRequest("/api/gallary", {
      categoryName: cName,
      blogCategoryId: categoryName,
      image: image,
    });
    if (data.status == 201) {
      await getData();
      setloading(false);
    } else {
      setloading(false);
    }
  };
  const handleName = (id) => {
    for (let i = 0; i < category.length; i++) {
      if (id == category[i]._id) {
        setcName(category[i].heading);
      }
    }
  };
  useEffect(() => {
    getCategoryData();
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
          Avicenna Gallary
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.category()}
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
          Create Category
        </Button>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoryName}
            label="Age"
            onChange={(e) => {
              setCategoryName(e.target.value);
              handleName(e.target.value);
            }}
          >
            {category.map((val, id) => (
              <MenuItem key={id} value={val._id}>
                {val.heading}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box>
          <label>Upload Image :</label>
          <input
            type="file"
            onChange={(event) => {
              setImageView(event.currentTarget.files[0]);
              handleFileChange(event.currentTarget.files[0], setImage);
            }}
            accept="image/*"
          />
        </Box>
        {loading == true ? (
          <LoadingButton
            loading
            variant="outlined"
            sx={{
              borderRadius: "30px",
              maxHeight: "40px",

              fontWeight: 700,
              width: "120px",
            }}
          >
            Upload
          </LoadingButton>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => createGallaryImage()}
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
            Upload
          </Button>
        )}
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
              <TableCell style={{ color: "white" }}>Image</TableCell>
              <TableCell style={{ color: "white" }}>Category</TableCell>

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
                    <CardMedia
                      component="img"
                      sx={{width:"50px",height:"auto"}}
                      image={row.image.url}
                      alt="iamge"
                    />
                  </TableCell>
                  <TableCell>{row.categoryName}</TableCell>

                  <TableCell align="right">
                    {/* <IconButton>
                    <Edit style={{ color: 'blue' }} />
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
    </Container>
  );
};

export default GallaryTable;
