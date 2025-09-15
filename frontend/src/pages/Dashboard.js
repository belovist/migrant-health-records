import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <p>the dashboard page.</p>
      <Link
        to="/"
        className="text-blue-500 underline hover:text-blue-700"
      >
        Back to Login
      </Link>
    </div>
  );
}

export default Dashboard;
