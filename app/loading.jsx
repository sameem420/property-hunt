"use client";
import React from "react";
import { CircleLoader } from "react-spinners";

function LoadingPage({ loading }) {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <CircleLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
}

export default LoadingPage;
