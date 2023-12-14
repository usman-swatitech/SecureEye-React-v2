import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
export const links = [
  {
    icon: <AdminPanelSettingsOutlinedIcon />,
    isActive: true,
    heading: "Personal Pnformation",
    subHeading: "Profile Settings",
    layout: "PersonalInformation",
  },
  {
    icon: <ShieldOutlinedIcon />,
    isActive: false,
    heading: "Security",
    subHeading: "Account Security",
    layout: "Security",
  },
  {
    icon: <NotificationsNoneOutlinedIcon />,
    isActive: false,
    heading: "Notifications",
    subHeading: "Notification Settings",
    layout: "Notifications",
  },
];
