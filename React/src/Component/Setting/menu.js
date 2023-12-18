import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
export const links = [
  {
    icon: <SaveAsOutlinedIcon />,
    isActive: true,
    heading: "General",
    subHeading: "General Information",
    layout: "General",
  },
  {
    icon: <AssignmentIndOutlinedIcon />,
    isActive: false,
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
    icon: <AdminPanelSettingsOutlinedIcon />,
    isActive: false,
    heading: "Privacy Policy",
    subHeading: "notifications setting",
    layout: "PrivacyPolicy",
  },
];
