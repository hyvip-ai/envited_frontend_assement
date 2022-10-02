import { useState } from 'react';
import Router from './Router';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router />
      <ToastContainer theme='colored' />
    </>
  );
}

export default App;
