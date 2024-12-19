export const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  // { name: "Forms", path: "/forms/add_data", icon: "dashboard" },
  // { name: "Workflows", path: "/workflows/show_workflow", icon: "dashboard" },
  ///// Workflows Tab /////
  {
    name: "Workflows",
    icon: "security",
    children: [
      { name: "BOM_ISSUE_MGMT", iconText: "404", path: "/workflows/show_workflow" },
      { name: "CV_PNE", iconText: "SI", path: "/stepform/default" },
      { name: "PV_PNE", iconText: "SU", path: "/session/404" },
      { name: "UV_PNE", iconText: "FP", path: "/session/404" },
      { name: "CV_JSR", iconText: "404", path: "/session/404" },
      { name: "CV_LKN", iconText: "404", path: "/session/404" },
      { name: "CV_UTK", iconText: "404", path: "/session/404" },
      { name: "UV_UTK", iconText: "404", path: "/session/404" },
      { name: "CV_DWH", iconText: "404", path: "/session/404" },
      { name: "PV_SND", iconText: "404", path: "/session/404" }
    ]
  },
  ///// User Tab /////
  {
    name: "User",
    icon: "verified_user",
    children: [
      { name: "Request Initiation", iconText: "404", path: "/users/show_form" },
      { name: "All Issues Pending on me", iconText: "SI", path: "/users/show_issue" },
      { name: "All Issues", iconText: "SU", path: "/session/404" },
      { name: "Master Assignee list", iconText: "FP", path: "/session/404" }
    ]
  },
  ///// Support Tab /////
  {
    name: "Support",
    icon: "report_problem",
    children: [
      { name: "Raise Ticket", iconText: "404", path: "/supports/show_ticketform" },
      { name: "Help Document ", iconText: "SI", path: "/session/404" }
    ]
  },

  // { label: "PAGES", type: "label" },
  // {
  //   name: "Session/Auth",
  //   icon: "security",
  //   children: [
  //     { name: "Sign in", iconText: "SI", path: "/session/signin" },
  //     { name: "Sign up", iconText: "SU", path: "/session/signup" },
  //     { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
  //     { name: "Error", iconText: "404", path: "/session/404" }
  //   ]
  // },
  // { label: "Components", type: "label" },
  // {
  //   name: "Components",
  //   icon: "favorite",
  //   badge: { value: "30+", color: "secondary" },
  //   children: [
  //     { name: "Auto Complete", path: "/material/autocomplete", iconText: "A" },
  //     { name: "Buttons", path: "/material/buttons", iconText: "B" },
  //     { name: "Checkbox", path: "/material/checkbox", iconText: "C" },
  //     { name: "Dialog", path: "/material/dialog", iconText: "D" },
  //     { name: "Expansion Panel", path: "/material/expansion-panel", iconText: "E" },
  //     { name: "Form", path: "/material/form", iconText: "F" },
  //     { name: "Icons", path: "/material/icons", iconText: "I" },
  //     { name: "Menu", path: "/material/menu", iconText: "M" },
  //     { name: "Progress", path: "/material/progress", iconText: "P" },
  //     { name: "Radio", path: "/material/radio", iconText: "R" },
  //     { name: "Switch", path: "/material/switch", iconText: "S" },
  //     { name: "Slider", path: "/material/slider", iconText: "S" },
  //     { name: "Snackbar", path: "/material/snackbar", iconText: "S" },
  //     { name: "Table", path: "/material/table", iconText: "T" }
  //   ]
  // },
  {
    name: "Reports",
    icon: "trending_up",
    children: [
      { name: "Plant Status Report", path: "/charts/echarts", iconText: "E" },
      { name: "Agency wise Report", path: "/session/404" },
      { name: "Bom Report", path: "/session/404" }
    ]
  },

  {
    name: "Admin",
    icon: "system_update",
    children: [
      { name: "Access to User", path: "/charts/echarts", iconText: "E" },
      { name: "Register New User", path: "/session/404" },
      { name: "WF Management", path: "/session/404" },
      { name: "Edit Proj Config", path: "/session/404" },
      { name: "Form Release", path: "/session/404" }
    ]
  }

  // {
  //   name: "Documentation",
  //   icon: "launch",
  //   type: "extLink",
  //   path: "http://demos.ui-lib.com/matx-react-doc/"
  // }
];
