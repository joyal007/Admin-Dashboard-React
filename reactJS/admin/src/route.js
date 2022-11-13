import ContactInfo from "./layout/contactInfo";
import Calender from './layout/calender'
import DashBoard from "./layout/dashboard";
import Faq from "./layout/faq";
import Invoice from "./layout/invoice";
import ProfileForm from "./layout/profileForm";
import Team from "./layout/team";
import Geography from "./layout/geographyChart";
import LineChart from "./layout/lineChart";
import PieChart from "./layout/pieChart";
import BarChart from './layout/barChart';

export const route = () => [
  {
    title: "Dashboard",
    key: "dashboard",
    component: <DashBoard />,
    link: "/",
  },
  {
    title: "Manage Team",
    key: "manageItem",
    component: <Team />,
    link: "/team",
  },
  {
    title: "Contacts Information",
    key: "contactsInformation",
    component: <ContactInfo />,
    link: "/contacts",
  },
  {
    title: "Invoices Balances",
    key: "invoicesBalances",
    component: <Invoice />,
    link: "/invoice",
  },

  {
    title: "Profile Form",
    key: "profileForm",
    component: <ProfileForm />,
    link: "/profile",
  },
  {
    title: "Calender",
    key: "calender",

    component: <Calender />,
    link: "/calender",
  },
  {
    title: "FAQ Pages",
    key: "faqPages",
    component: <Faq />,
    link: "/faq",
  },

  {
    title: "Bar Chart",
    key: "barChart",
    component: <BarChart />,
    link: "/bar",
  },
  {
    title: "Pie Chart",
    key: "pieChart",
    component: <PieChart />,
    link: "/pie",
  },
  {
    title: "Line Chart",
    key: "lineChart",
    component: <LineChart />,
    link: "/line",
  },
  {
    title: "Geography Chart",
    key: "geographyChart",
    component: <Geography />,
    link: "/geography",
  },
];
