import React, { useState } from 'react';
import axios from 'axios';

const Texting = () => {
  const [review, setReview] = useState({
    bookId: '',
    reviewer: '',
    content: ''
  });
  const [submittedReview, setSubmittedReview] = useState(null);

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://review-service-428s.onrender.com/reviews',
        review,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setSubmittedReview(res.data);
      setReview({ bookId: '', reviewer: '', content: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to post review');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Post a Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bookId"
          placeholder="Book ID"
          value={review.bookId}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="text"
          name="reviewer"
          placeholder="Reviewer"
          value={review.reviewer}
          onChange={handleChange}
          required
        />
        <br /><br />
        <textarea
          name="content"
          placeholder="Review content"
          value={review.content}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Submit Review</button>
      </form>

      {submittedReview && (
        <div style={{ marginTop: 20 }}>
          <h3>Review Submitted:</h3>
          <p><strong>ID:</strong> {submittedReview.id}</p>
          <p><strong>Book ID:</strong> {submittedReview.bookId}</p>
          <p><strong>Reviewer:</strong> {submittedReview.reviewer}</p>
          <p><strong>Content:</strong> {submittedReview.content}</p>
          <p><strong>Created At:</strong> {submittedReview.createdAt}</p>
        </div>
      )}
    </div>
  );
};

export default Texting;