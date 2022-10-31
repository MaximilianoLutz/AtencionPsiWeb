import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import {
  Routes,
  Route,
  HashRouter
} from "reac";


// import { ProfesionalRouter } from "./ProfesionalRouter";
// import { startChecking } from "../action/auth";
// import { startCheckingFinish } from "../action/auth";
// import { PrivateRoutes } from "./PrivateRoutes";
// import { PublicRoutes } from "./PublicRoutes";
// import SignIn from "../Components/SingIn";
// import SignUp from "../Auth/SingUp";



export default function AppRouter() {

//   const dispatch = useDispatch();

//   const [isLoggedin, setIsLoggedin] = useState(false);

//   const { checking, uidAuth } = useSelector(state => state.auth);

//   useEffect(() => {

//     if (localStorage.getItem('access_token')?.length > 0) {

//       dispatch(startChecking())
//     }
//   }, [dispatch]);

//   useEffect(() => {

//     if (uidAuth) {
//       setIsLoggedin(true);

//       dispatch(startCheckingFinish());

//     } else {
//       setIsLoggedin(false);
//       dispatch(startCheckingFinish());
//     }
//   }, [dispatch, uidAuth, checking]);

//   if (checking) return <h1>Loading...............</h1> //cambiar x un spinner

  return (
    <HashRouter>
      <Routes>

        <Route path="/auth/login/" element={
          <PublicRoutes>
            <SignIn />
          </PublicRoutes>
        } />

        <Route path="/*" element={
          <PrivateRoutes>
            <ProfesionalRouter />
          </PrivateRoutes>
        } />

        <Route 
          path= "/auth/register/"
          element={ <SignUp /> }
        />

      </Routes>
    </HashRouter>

  );
}
