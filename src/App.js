import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Main from './Components/layout/Main';
import Orders from './Components/Oreder/Orders';

function App() {
  const router=createBrowserRouter([
    {
      path:'/', element:<Main></Main>,children:[
        {
          path:'/',
          loader:()=>fetch('tshirt.json'),
          element:<Home></Home>
        },
        {
          path:'/order',element:<Orders></Orders>
        },
        {
          path:'/about', element:<About></About>
        }
      ]
    }

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
