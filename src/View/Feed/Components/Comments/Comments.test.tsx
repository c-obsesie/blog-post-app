import React from "react";
import { render } from "@testing-library/react";
import Comments from "./Comments";

test("renders a comment", () => {
  const comment = {
    "id": 1,
    "email": "test@example.com",
    "name": "Test User",
    "body": "This is a test comment"
  };

  const { getByText } = render(<Comments comment={comment} />);
  
  const email = getByText("Email: test@example.com");
  const name = getByText("Name: Test User");
  const body = getByText("This is a test comment");

  expect(email).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});
