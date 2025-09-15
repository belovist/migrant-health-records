import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Login Page</h2>
      <Link
        to="/dashboard"
        className="text-blue-500 underline hover:text-blue-700"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}

export default Login;
