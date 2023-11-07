"use client";

const ErrorWrapper = ({ error }) => {
  return <h1>Oops!!! {error.message}</h1>;
}

export default ErrorWrapper;