import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";

import materialRoutes from "app/views/material-kit/MaterialRoutes";

// SESSION PAGES
const NotFound = Loadable(lazy(() => import("app/views/sessions/NotFound")));
const JwtLogin = Loadable(lazy(() => import("app/views/sessions/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("app/views/sessions/JwtRegister")));
const ForgotPassword = Loadable(lazy(() => import("app/views/sessions/ForgotPassword")));
// E-CHART PAGE
const AppEchart = Loadable(lazy(() => import("app/views/charts/echarts/AppEchart")));
// DASHBOARD PAGE
const Analytics = Loadable(lazy(() => import("app/views/dashboard/Analytics")));
const Forms = Loadable(lazy(() => import("app/views/forms/FormData")));
const Test = Loadable(lazy(() => import("app/views/forms/TestPage")));
// const StepForm = Loadable(lazy(() => import("app/views/stepform/DataStep")));
const WorkflowData = Loadable(lazy(() => import("app/views/Workflow/WorkflowData")));
const IssuesData = Loadable(lazy(() => import("app/views/User/IssuesAll")));
const TicketForm = Loadable(lazy(() => import("app/views/Support/TicketForm")));
const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      { path: "/dashboard/default", element: <Analytics />, auth: authRoles.admin },
      { path: "/forms/add_data", element: <Forms />, auth: authRoles.admin },
      { path: "/workflows/show_workflow", element: <WorkflowData />, auth: authRoles.admin },
      { path: "/users/show_form", element: <Forms />, auth: authRoles.admin },
      { path: "/users/show_issue", element: <IssuesData />, auth: authRoles.admin },
      { path: "/supports/show_ticketform", element: <TicketForm />, auth: authRoles.admin },
      // e-chart route
      { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor },
      { path: "/stepform/default", element: <Test />, auth: authRoles.editor }
    ]
  },

  // session pages route
  { path: "/session/404", element: <NotFound /> },
  { path: "/session/signin", element: <JwtLogin /> },
  { path: "/session/signup", element: <JwtRegister /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },

  { path: "/", element: <Navigate to="dashboard/default" /> },
  { path: "*", element: <NotFound /> }
];

export default routes;
