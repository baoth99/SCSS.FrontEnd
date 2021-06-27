import Index from "../views/Index";
import Profile from "../views/examples/Profile";
import Maps from "../views/examples/Maps.js";
import Tables from "../views/examples/Tables";
import Icons from "../views/examples/Icons";
import ScrapCategory from '../views/scrap-categorys/ScrapCategory';
import User from '../views/users/User';
import UserDetail from '../views/users/UserDetail';
import Transaction from '../views/transactions/Transaction';

var AdminRoutes = [
    {
      path: "/dashboard",
      name: "Màn Hình Chính",
      icon: "ni ni-tv-2 text-primary",
      component: Index,
      layout: "/admin",
    },
    {
      path: "/users",
      name: "Quản lí người dùng",
      icon: "ni ni-badge text-blue",
      component: User,
      layout: "/admin",
    },
    {
      path: "/scrap-category",
      name: "Quản lí loại phế liệu",
      icon: "ni ni-collection text-green",
      component: ScrapCategory,
      layout: "/admin",
    },
    {
      path: "/transaction",
      name: "Quản lí giao dịch",
      icon: "ni ni-money-coins text-green",
      component: Transaction,
      layout: "/admin",
    },
    {
      path: "/icons",
      name: "Icons",
      icon: "ni ni-planet text-blue",
      component: Icons,
      layout: "/admin",
    },
    {
      path: "/maps",
      name: "Maps",
      icon: "ni ni-pin-3 text-orange",
      component: Maps,
      layout: "/admin",
    },
    {
      path: "/tables",
      name: "Tables",
      icon: "ni ni-bullet-list-67 text-red",
      component: Tables,
      layout: "/admin",
    }
  ];

export default AdminRoutes;
