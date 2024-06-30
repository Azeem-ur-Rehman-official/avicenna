"use client"
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Box, Container, Typography, Card, CardMedia, CardContent, IconButton, Popover, List, ListItem } from '@mui/material';
import { ThumbUp, Share } from '@mui/icons-material';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { newsData } from '../../../components/news/NewsList';

const NewsDetailPage = () => {
  const pathname = usePathname();
  const slug = pathname.split('/').pop(); // Get the last part of the path as the slug
  const [anchorEl, setAnchorEl] = useState(null);

  const newsItem = newsData.find((news) => news.slug === slug);

  const handleShareClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'share-popover' : undefined;

  if (!newsItem) {
    return <Typography variant="h4">News not found</Typography>;
  }

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {newsItem.title}
        </Typography>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={newsItem.image}
            alt={newsItem.title}
          />
          <CardContent>
            <Typography variant="body1">
              {newsItem.description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Posted on {newsItem.postedDate} by {newsItem.postedBy}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              {/* <IconButton aria-label="like">
                <ThumbUp />
              </IconButton>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                Like
              </Typography> */}
              <IconButton aria-label="share" onClick={handleShareClick}>
                <Share />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List>
          <ListItem>
            <FacebookShareButton url={`https://yourwebsite.com/news/${newsItem.slug}`} style={{ marginRight: '10px' }}>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </FacebookShareButton>
            <Typography>Facebook</Typography>
          </ListItem>
          <ListItem>
            <TwitterShareButton url={`https://yourwebsite.com/news/${newsItem.slug}`} style={{ marginRight: '10px' }}>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </TwitterShareButton>
            <Typography>Twitter</Typography>
          </ListItem>
          <ListItem>
            <WhatsappShareButton url={`https://yourwebsite.com/news/${newsItem.slug}`} style={{ marginRight: '10px' }}>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </WhatsappShareButton>
            <Typography>Whatsapp</Typography>
          </ListItem>
        </List>
      </Popover>
    </Container>
  );
};

export default NewsDetailPage;
