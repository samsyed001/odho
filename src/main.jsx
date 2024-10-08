import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/AboutUs.jsx'
import Detail from './pages/Detail.jsx'
import Casting from './pages/Casting.jsx'
import RegistrationForm from './pages/RegistrationForm.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
// import Login from './pages/Login.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'details',
        element: <Detail/>
      },
      {
        path: 'casting',
        element: <Casting/>
      },
      {
        path: 'registrationForm',
        element: <RegistrationForm/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
