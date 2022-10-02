import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fallback from './components/Fallback';
const Home = React.lazy(() => import('./pages/Home'));
const Event = React.lazy(() => import('./pages/Event'));
const Create = React.lazy(() => import('./pages/Create'));
function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <React.Suspense fallback={<Fallback />}>
              <Home />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='/event'
          element={
            <React.Suspense fallback={<Fallback />}>
              <Event />
            </React.Suspense>
          }
        ></Route>
        <Route
          path='/create'
          element={
            <React.Suspense fallback={<Fallback />}>
              <Create />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
