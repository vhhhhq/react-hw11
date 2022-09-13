import './App.css';
import React from 'react';
import { Routes, Route, Navigate, Outlet, } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Admin from './pages/Admin/Admin';
import Analytics from './pages/Analytics/Analytics';
  


const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/landing',
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};


const App = () => {
  const [user, setUser] = React.useState(null);

  const handleLogin = () =>
    setUser({
      id: '1',
      name: 'robin',
      permissions: ['analyze'],
      roles: ['admin'],
    });
  const handleLogout = () => setUser(null);

  return (
    <>
      <h1>React Router</h1>

      <Navigation />

      {user ? (
       <div className='btn'><button className='button in' onClick={handleLogout}>Sign Out</button></div> 
      ) : (
       <div className='btn'> <button className='button out' onClick={handleLogin}>Sign In</button></div> 
      )}

      <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="analytics"
          element={
            <ProtectedRoute
              redirectPath="/home"
              isAllowed={
                !!user && user.permissions.includes('analyze')
              }
            >
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin"
          element={
            <ProtectedRoute
              redirectPath="/home"
              isAllowed={!!user && user.roles.includes('admin')}
            >
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
}

export default App;
