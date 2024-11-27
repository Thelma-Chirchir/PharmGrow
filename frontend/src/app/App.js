import React from 'react';
import './App.css';
import { LoginPage } from './pages/Login.jsx'
import { CreateAccountPage } from './pages/CreateAccount.jsx'
import { DashboardPage } from './pages/dashboard.jsx';
import { InventoryPage } from './pages/Inventory.jsx';
import { MedicineDetailPage } from './pages/medicineDetail.jsx';
import { AddMedicinePage } from './pages/AddMedicine.jsx';
import { ToastContainer } from 'react-toastify';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './utilities/routes.js';
import { IsProtectedRoute } from './hoc/isProtectedRoute.jsx';
import { MedicinesListPage } from './pages/MedicinesList.jsx';
import { LandingPage } from './pages/Landing.jsx';
import { AnalysisPage } from './pages/Analysis.jsx';
import { ReportPage } from './pages/Report.jsx';
import { AddUserPage, SettingsPage, UserListPage } from './pages/Settings.jsx';
import { RevenuePage } from './pages/Revenue.jsx';
import { ShortagePage } from './pages/shortage.jsx';
import { GroupPage } from './pages/Groups.jsx';
import { AddNewSupplierPage, SupplierPage } from './pages/Supplier.jsx';
// import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react'
// import { useMediaQuery } from '@chakra-ui/react'


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: routes.dashboard(),
    // element: <IsProtectedRoute><DashboardPage /></IsProtectedRoute>
    element: <DashboardPage />
  },
  // {
  //   path: routes.dashboard(),
  //   element: <DashboardPage />
  // },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signUP',
    element: <CreateAccountPage />
  },
  {
    path: routes.inventory(),
    element: <InventoryPage />
  },
  {
    path: routes.addMedicine(),
    element: <AddMedicinePage />
  },
  {
    path: routes.medicineDetail(),
    element: <MedicineDetailPage />
  },
  {
    path: routes.medicinegroups(),
    element: <GroupPage />
  },
  {
    path: routes.medicineslist(),
    element: <MedicinesListPage />
  },
  {
    path: routes.analysis(),
    element: <AnalysisPage />
  },
  {
    path: routes.report(),
    element: <ReportPage />
  },
  {
    path: routes.revenue(),
    element: <RevenuePage />
  },
  {
    path: routes.medicinesShortage(),
    element: <ShortagePage />
  },

  {
    path: routes.settings(),
    element: <SettingsPage />
  },
  {
    path: routes.suppliers(),
    element: <SupplierPage />
  },
  {
    path: routes.addSupplier(),
    element: <AddNewSupplierPage />
  },
  {
    path: routes.addUser(),
    element: <AddUserPage />
  },
  {
    path: routes.userList(),
    element: <UserListPage />
  },
  {
    path: '*',
    element: <h1>404</h1>
  }
])
function App() {
  // const [info, setInfo] = React.useState({})
  return (
    <>
      {/* <ThemeProvider>
        <ColorModeProvider> */}
      <ChakraProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </ChakraProvider>
      {/* </ColorModeProvider>
      </ThemeProvider> */}
    </>
  );
}

export default App;
