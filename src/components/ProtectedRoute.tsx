import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // const { user, isLoading } = useAuth();
  // const location = useLocation();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return <>{children}</>;
}