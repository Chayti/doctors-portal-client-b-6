import './App.css';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
