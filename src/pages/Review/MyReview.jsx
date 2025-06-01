import React, { useState, useEffect } from "react";
import GerReview from "./GerReview";
import DelReview from "./DelReview";
import PostReview from "./PostReview";

const MyReview = () => {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
      <PostReview />
      <GerReview />
      <DelReview />
    </div>
  );
};

export default MyReview;
