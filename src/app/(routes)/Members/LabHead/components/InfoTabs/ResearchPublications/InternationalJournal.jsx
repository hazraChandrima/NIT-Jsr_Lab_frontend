"use client"

import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Pagination, Container, Paper } from '@mui/material';

const InternationalJournal = ({ propData: publications }) => {
  const [open, setOpen] = useState(false);
  const [articleContent, setArticleContent] = useState(null);
  const [page, setPage] = useState(1);

  const eventsPerPage = 7;
  const pageCount = Math.ceil(publications.length / eventsPerPage);

  const startEventNo = (page - 1) * eventsPerPage;
  const endEventNo = page * eventsPerPage;
  const currPageEvents = publications.slice(startEventNo, endEventNo);

  const paginate = (event, pageNumber) => {
    setPage(pageNumber);
  };
  const FetchArticleContent = async (currentArticle) => {
    if (currentArticle) {
      setArticleContent(null);
      const Article = await fetch(
        `https://www.nitjsr.ac.in/backend/api/publications/view?id=${currentArticle.id}`
      );
      const res = await Article.json();
      setArticleContent(res.result);
    }
  };
 
  const handleOpen = (article) => {
    FetchArticleContent(article)
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container>
      {currPageEvents.length === 0
        ? `No International Journals found`
        : currPageEvents.map((value, index) => (
            <Paper
              elevation={1}
              className="mt-2 border-bottom border-left border-left-primary pl-2 pt-2"
              style={{ cursor: 'pointer', width: '100%', padding: '10px', marginBottom: '10px' }}
              key={index}
              onClick={() => handleOpen(value)}
            >
              <Typography variant="body1" style={{ textAlign: 'justify' }}>
                <b>{`${value.title}, `}</b>
                {`${value.journal}  ${value.volume ? ` ${value.volume}` : ''} (${value.pub_date})  ${
                  value.page_no ? `,pp. ${value.page_no}` : ''
                }, ${value.authors.split(',').map((item) => item)}`}
              </Typography>
            </Paper>
          ))}
      {publications.length > eventsPerPage && (
        <Pagination
          count={pageCount}
          page={page}
          color="primary"
          onChange={paginate}
          size="large"
          sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}
        />
      )}

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description" closeAfterTransition>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, bgcolor: 'background.paper', boxShadow: 24, p: 4,borderRadius: '10px' }}>
          <Typography id="modal-title" variant="h6" component="h2">
            {articleContent ? articleContent.type : '------------'}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {articleContent ? (
              <>
                <b>Title:</b> {articleContent.title}
                <br />
                <b>Date:</b> {articleContent.pub_date}
                <br />
                <b>Journal:</b> {articleContent.journal}
                <br />
                <b>{articleContent.volume ? 'Volume' : ''}</b> {articleContent.volume ? articleContent.volume : ''}
                {articleContent.volume ? <br /> : ''}
                <b>{articleContent.page_no ? 'Page No' : null}</b> {articleContent.page_no ? articleContent.page_no : null}
                {articleContent.page_no ? <br />  : null}
                <b>Authors:</b> {articleContent.authors
                  ? articleContent.authors.split(',').map((author, index) => (
                      <Typography key={index} variant="body2" component="span" sx={{ backgroundColor: '#6c757d', color: '#fff', padding: '2px 6px', borderRadius: '4px', marginRight: '4px' }}>
                        {author}
                      </Typography>
                    ))
                  : null}
                <br />
                <br />
                {articleContent.link ? (
                  <a href={articleContent.link} rel="noopener noreferrer" target="_blank">
                    <b className='text-blue-500'>Link: </b>
                    <span className='text-violet-500 underline'>{articleContent.link}</span>
                  </a>
                ) : null}
                <hr />
                <Typography variant="body2" component="div" dangerouslySetInnerHTML={{ __html: articleContent.info }} />
              </>
            ) : (
              <>
                <Paper elevation={1} style={{ width: '100%', marginTop: 16, padding: 16 }}>
                  <Typography variant="body2" component="div" className="skeleton-loading" />
                </Paper>
                <Paper elevation={1} style={{ width: '100%', marginTop: 16, padding: 16 }}>
                  <Typography variant="body2" component="div" className="skeleton-loading" />
                </Paper>
              </>
            )}
          </Typography>
          <hr />
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default InternationalJournal;
