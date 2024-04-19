import Header from "./containers/Navbar"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  NavLink,
} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Productdetails from "./containers/Productdetails";
import './index.css';
import Navbar from "./containers/Navbar";
const App = () => {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}> 
      <Route path="/Productlisting" element={<ProductListing />} /> 
      <Route path="/product/:productId" element={<Productdetails />} />
    </Route>
  )
);
  return (
    <div className='App'>
      <RouterProvider router={router}/>
      </div>
  )
}

export default App

const Root = () => { 
  return (
    <> 
      <div>
      <NavLink to="/Productlisting" activeclassname="active"><Navbar/></NavLink>

      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};