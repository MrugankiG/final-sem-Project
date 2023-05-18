import { Route, Routes } from "react-router-dom";
import Cart from "../Cart";
import LandingPage from "../pages/bhupendra/pages/LandingPage";
import OrderSuccessfull from "../pages/bhupendra/pages/OrderSuccessfull";
import PaymentForm from "../pages/bhupendra/pages/PaymentForm";
import Coach from "../pages/bss/pages/Coach";
import ProductPage from "../pages/bss/pages/Product Page";
import SingleProductPage from "../pages/bss/pages/SingleProductPage";
import UserDashboard from "../pages/bss/pages/UserDashboard";
import Login from "../pages/bsmg/pages/Login";
import SignUp from "../pages/bsmg/pages/SignUp";
import Plans from "../pages/mruganki/pages/Plans";
import SinglePlanPage from "../pages/mruganki/pages/SinglePlanPage";
import AboutUS from "../pages/bhupendra/pages/About";
import AdminDashbord from "../pages/bhavini/pages/AdminDashbord";
import AddProduct from "../pages/bhavini/pages/nestedPages/AddProduct";
import AllUsers from "../pages/bhavini/pages/nestedPages/AllUsers";
import Dashborad from "../pages/bhavini/pages/nestedPages/Dashborad";
import AdminPrivateAuth from "./AdminPrivateRoute";
import PrivateRoute from "./PrivateRoute";
import PaymentGateway from "../pages/bss/pages/PaymentGateway";


const AllRoutes = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

          <Route path="/coach" element={<Coach />} />

          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/:plan" element={<SinglePlanPage />} />

          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/paymentsgateway" element={<PaymentGateway />} />
          <Route
          path="/checkout/payment"
          element={
            <PrivateRoute>
              <PaymentForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/OrderSuccessfull"
          element={
            <PrivateRoute>
              <OrderSuccessfull />
            </PrivateRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />




          <Route path="/user-profile" element={<UserDashboard />} />

          <Route path="/about" element={<AboutUS />} />

{/*////////////////////////////////////////////////////*/}


          <Route path="/admin" element={<AdminDashbord />} >

               
                <Route
                  index
                  element={
                    <AdminPrivateAuth>
                      <Dashborad />{" "}
                    </AdminPrivateAuth>
                  }
                />
                <Route
                  exact
                  path="dashboard"
                  element={
                    <AdminPrivateAuth>
                      <Dashborad />{" "}
                    </AdminPrivateAuth>
                  }
                />

                <Route
                  exact
                  path="add-product"
                  element={
                    <AdminPrivateAuth>
                      <AddProduct />{" "}
                    </AdminPrivateAuth>
                  }
                />
                <Route
                  exact
                  path="all-users"
                  element={
                    <AdminPrivateAuth>
                      <AllUsers />{" "}
                    </AdminPrivateAuth>
                  }
                />

          </Route>
       
        </Routes>
      </div>
    );
  };
  
  export default AllRoutes;
  