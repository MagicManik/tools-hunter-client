import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Hoom/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReview from './Pages/Dashboard/MyReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import Footer from './Pages/Shared/Footer';
import Parchase from './Pages/Parchase/Parchase';
import Profile from './Pages/Profile/Profile';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='profile' element={<Profile></Profile>}></Route>
        <Route path='parchase/:id' element={
          <RequireAuth>
            <Parchase></Parchase>
          </RequireAuth>}>

        </Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='orders' element={<MyOrders></MyOrders>}></Route>

          {/* admin Outlet */}
          <Route path='manageorder' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='add' element={<AddAProduct></AddAProduct>}></Route>
          <Route path='admin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageproduct' element={<ManageProducts></ManageProducts>}></Route>
          {/* <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>}>
          </Route> */}
        </Route>



        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
