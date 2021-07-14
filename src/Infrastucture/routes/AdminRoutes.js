import Index from "../../Presentation/views/Index";
import Maps from "../../Presentation/views/examples/Maps.js";
import Tables from "../../Presentation/views/examples/Tables";
import Icons from "../../Presentation/views/examples/Icons";
import ScrapCategory from '../../Presentation/views/scrap-categorys/ScrapCategory';
import User from '../../Presentation/views/users/User';
import Transaction from '../../Presentation/views/transactions/Transaction';
import Unit from '../../Presentation/views/unit/Unit'

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
      icon: "ni ni-badge text-orange",
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
      icon: "ni ni-money-coins text-red",
      component: Transaction,
      layout: "/admin",
    },
    {
      path: "/unit",
      name: "Quản lí đơn vị",
      icon: "ni ni-ungroup text-black",
      component: Unit,
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
