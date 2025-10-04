import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Dashboard from "./pages/Dashboard";
import POS from "./pages/POS";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import User from "./pages/Users/User";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute role="admin">
                  <Layout>
                    <Dashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/pos"
              element={
                <ProtectedRoute>
                  <Layout>
                    <POS />
                  </Layout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/products"
              element={
                <ProtectedRoute role="admin">
                  <Layout>
                    <Product />
                  </Layout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/users"
              element={
                <ProtectedRoute role="admin">
                  <Layout>
                    <User />
                  </Layout>
                </ProtectedRoute>
              }
            />

            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
