import Calendar from "@/components/icons/sidebar-icons/Calendar";
import Dashboard from "@/components/icons/sidebar-icons/Dashboard";
import Invoice from "@/components/icons/sidebar-icons/Invoice";
import Notification from "@/components/icons/sidebar-icons/Notification";
import Schedule from "@/components/icons/sidebar-icons/Schedule";
import Settings from "@/components/icons/sidebar-icons/Settings";
import Upload from "@/components/icons/sidebar-icons/Upload";

export const sidebarLinks = [
  {
    label: "Dashboard",
    component: <Dashboard />,
    route: "/dashboard",
    header: "Dashboard",
  },
  {
    label: "Upload",
    component: <Upload />,
    route: "/upload",
    header: "Upload CSV",
  },
  {
    label: "Invoice",
    component: <Invoice />,
    route: "/invoice",
    header: "Invoice",
  },
  {
    label: "Schedule",
    component: <Schedule />,
    route: "/schedule",
    header: "Schedule",
  },
  {
    label: "Calendar",
    component: <Calendar />,
    route: "/calendar",
    header: "Calendar",
  },
  {
    label: "Notification",
    component: <Notification />,
    route: "/notification",
    header: "Notification",
  },
  {
    label: "Settings",
    component: <Settings />,
    route: "/settings",
    header: "Settings",
  },
];
