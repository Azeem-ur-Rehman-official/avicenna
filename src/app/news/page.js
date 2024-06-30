"use client"
import React, { useState } from 'react';
import NewsFilter from '../components/news/NewsFilter';
import NewsList from '../components/news/NewsList';
import NewsHeroSection from '../components/news/NewsHeroSection';

import { CssBaseline, Container, ThemeProvider, createTheme, Grid, Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001e60',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [selectedTag, setSelectedTag] = useState('All Tags');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const newsData = [
    // Add your news items here
  ];
  const filteredNews = newsData.filter((news) => {
    return (
      (selectedTopic === 'All Topics' || news.topic === selectedTopic) &&
      (selectedTag === 'All Tags' || news.tags.includes(selectedTag)) &&
      (searchQuery === '' || news.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewsHeroSection />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <NewsList
              searchQuery={searchQuery}
              selectedTopic={selectedTopic}
              selectedTag={selectedTag}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <Pagination
                count={Math.ceil(filteredNews.length / itemsPerPage)}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                color="primary"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <NewsFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default NewsPage;
