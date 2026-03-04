import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../../bookService';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TablePagination, TableSortLabel, TextField, Button
} from '@mui/material';

import EditModal from '../editModal/editModal';



const columns = [
  { id: 'ratings_average', label: 'Average Rating' },
  { id: 'author_name', label: 'Author Name' },
  { id: 'title', label: 'Title' },
  { id: 'first_publish_year', label: 'First Publish Year' },
  { id: 'subject', label: 'Subject' },
  { id: 'author_birth_date', label: 'Author Birth Date' },
  { id: 'author_top_work', label: 'Author Top Work' },
];

const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('title');
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('*' || 'Charles');

  useEffect(() => {
    fetchBooks(searchTerm, page + 1, rowsPerPage).then(setBooks);
  }, [page, rowsPerPage, searchTerm]);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (book) => {
    setSelectedBook(book);
    setIsEditModalOpen(true);
  };

  const handleSave = (editedBook) => {
    setBooks(books.map(book => (book.key === editedBook.key ? editedBook : book)));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

const handleDownloadCSV = () => {
  const headers = columns.map(column => column.label);
  const csvContent = [
    headers.join(','),
    ...books.map(book => columns.map(column => book[column.id]).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'books.csv';
  a.click();
  URL.revokeObjectURL(url);
};



  return (
    <>
    <Paper>
      <TextField
        label="Search by Author"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleSearchChange}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.key}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{book[column.id]}</TableCell>
                ))}
                <TableCell>
                  <Button onClick={() => handleEditClick(book)} variant="contained">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 50, 100]}
        component="div"
        count={1000} 
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {selectedBook && (
        <EditModal
          open={isEditModalOpen}
          handleClose={() => setIsEditModalOpen(false)}
          book={selectedBook}
          handleSave={handleSave}
        />
      )}
    </Paper>
    <Button onClick={handleDownloadCSV} variant="contained" color="primary">Download CSV</Button>
    </>
  );
};

export default BookTable;
