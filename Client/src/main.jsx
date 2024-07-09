import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import `NextUIProvider` component
//import { BrowserRouter } from 'react-router-dom'
import {NextUIProvider} from "@nextui-org/react";
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import OptionsPage from "./pages/OptionsPage/OptionsPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import GuestFormPage from "./pages/GuestFormPage/GuestFormPage";
import HousePage from "./pages/HousePage/HousePage";
import VigilantPage from "./pages/VigilantPage/VigilantPage";
import ResidentHousePage from "./pages/ResidentHousePage/ResidentHousePage";
import EntryControlPage from "./pages/EntryControlPage/EntryControlPage";
import HouseFormPage from "./pages/HouseFormPage/HouseFormPage";
import GuestListPage from "./pages/GuestListPage/GuestListPage";
import AnonymousFormPage from "./pages/AnonymousFormPage/AnonymousFormPage";
import InitFormPage from './pages/InitFormPage/InitFormPage.jsx';
import PrivateRoute from './components/privateRouter/PrivateRouter.jsx';

import { UserProvider } from './context/userContext';

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/formularioInicio",
    element: <InitFormPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/home",
    element: <PrivateRoute roles={['ADMN', 'VIGI', 'REEN', 'RESI', 'VISI']} element={<HomePage />}/>,
  },
  {
    path: "/opciones",
    element: <PrivateRoute roles={['ADMN', 'VIGI', 'REEN', 'RESI', 'VISI']} element={<OptionsPage />}/>,
  },
  {
    path: "/estadisticas",
    element: <PrivateRoute roles={['ADMN']} element={<StatisticsPage />}/>,
  },
  {
    path: "/invitar",
    element: <PrivateRoute roles={['ADMN', 'VIGI', 'REEN', 'RESI']} element={<GuestFormPage />}/>,
  },
  {
    path: "/casa",
    element: <PrivateRoute roles={['ADMN', 'REEN']} element={<HousePage />}/>,
  },
  {
    path: "/vigilante",
    element: <PrivateRoute roles={['ADMN']} element={<VigilantPage />}/>,
  },
  {
    path: "/residentes/:houseId",
    element: <PrivateRoute roles={['ADMN', 'REEN']} element={<ResidentHousePage />}/>,
  },
  {
    path: "/control",
    element: <PrivateRoute roles={['ADMN', 'VIGI']} element={<EntryControlPage />}/>,
  },
  {
    path: "/FormularioCasa",
    element: <PrivateRoute roles={['ADMN', 'REEN']} element={<HouseFormPage />}/>,
  },
  {
    path: "/invitados",
    element: <PrivateRoute roles={['ADMN', 'REEN']} element={<GuestListPage />}/>,
  },
  {
    path: "/formularioAnonimo",
    element: <PrivateRoute roles={['ADMN', 'VIGI']} element={<AnonymousFormPage />}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <NextUIProvider>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
    </NextUIProvider>

  
)
