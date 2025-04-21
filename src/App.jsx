import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginRegisterPage from './components/LoginRegisterPage'
import MainBody from './components/MainBody'
import Dashboard from './components/Dashboard'
import Release from './components/Release'
import Application from './components/Application'

function App() {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element : <LoginRegisterPage/>
    },
    {
      path:'dashboard',
      element : <MainBody />,
      children:[
        {
          path:'dashboard',
          element : <Dashboard/>
        },
        {
          path:'release',
          element : <Release/>
        },
        {
          path:'application',
          element : <Application/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
