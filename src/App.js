import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import UserRegister from './component/userr/UserRegister';
import Register from './component/admin/Register';
import Login from './component/admin/Login';
import UserLogin from './component/userr/UserLogin';
import Allstaffpage from './component/admin/Allstaffpage';
import OrderPage from './component/order/OrderPage';
import AllItem from './component/items/AllItem';
import Addstaffpage from './component/admin/Addstaffpage';
import Updatestaffprofile from './component/admin/Updatestaffprofile';
import Navbar from './component/commonpage/Navbar';
import Home from './component/commonpage/Home';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}

<Routes>
<Route element ={<UserRegister/>} path="/user-register"/>
<Route element ={<Register/>} path="/admin-register"/>
<Route element ={<Login/>} path="/admin-login"/>
<Route element ={<UserLogin/>} path="/user-login"/>
<Route element ={<Allstaffpage/>} path="/allstaffpage"/>
<Route element ={<OrderPage/>} path="/orderpage"/>
<Route element ={<AllItem/>} path="/allitempage"/>
<Route element ={<Addstaffpage/>} path="/addstaffpage"/>
<Route element ={<Updatestaffprofile/>} path="/updatestaff"/>
<Route element ={<Home/>} path="/"/>
{/* <Route element ={<Home/>} path="/"/> */}

</Routes>
</BrowserRouter>
  );
}

export default App;
