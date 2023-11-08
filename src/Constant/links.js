import {
  activeHomeSvg,
  searchSvg,
  blockSvg,
  workSvg,
  activeBlockSvg,
  activeUserSvg,
  nonActiveHomeSvg,
  nonActiveUserSvg,
  activeWorkSvg,
  nonActiveSettingsSvg,
} from "./svgs";
export const navlinks = [
  {
    activeIcon: activeHomeSvg,
    nonActiveIcon: nonActiveHomeSvg,
    path: "/",
    label: "Home",
    isActive: true,
    layout: "HomeLayout",
  },
  {
    activeIcon: searchSvg,
    nonActiveIcon: searchSvg,
    path: "/search",
    label: "Search",
    isActive: false,
    layout: "SearchLayout",
  },
  {
    activeIcon: activeUserSvg,
    nonActiveIcon: nonActiveUserSvg,
    path: "/employee",
    label: "Employee",
    isActive: false,
    layout: "EmployeeLayout",
  },
  {
    activeIcon: activeBlockSvg,
    nonActiveIcon: blockSvg,
    path: "/department",
    label: "Department",
    isActive: false,
    layout: "DepartmentLayout",
  },
  {
    activeIcon: activeWorkSvg,
    nonActiveIcon: workSvg,
    path: "/working",
    label: "Working",
    isActive: false,
    layout: "WorkingLayout",
  },
  {
    activeIcon: nonActiveSettingsSvg,
    nonActiveIcon: nonActiveSettingsSvg,
    path: "/settings",
    label: "Settings",
    isActive: false,
    layout: "SettingsLayout",
  },
];
