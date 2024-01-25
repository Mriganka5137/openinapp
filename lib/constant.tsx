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
  },
  {
    label: "Upload",
    component: <Upload />,
    route: "/upload",
  },
  {
    label: "Invoice",
    component: <Invoice />,
    route: "/invoice",
  },
  {
    label: "Schedule",
    component: <Schedule />,
    route: "/schedule",
  },
  {
    label: "Calendar",
    component: <Calendar />,
    route: "/calendar",
  },
  {
    label: "Notification",
    component: <Notification />,
    route: "/notification",
  },
  {
    label: "Settings",
    component: <Settings />,
    route: "/settings",
  },
];
