import Index from "../../Presentation/views/Index";
import Maps from "../../Presentation/views/examples/Maps.js";
import Tables from "../../Presentation/views/examples/Tables";
import Icons from "../../Presentation/views/examples/Icons";
import ScrapCategory from '../../Presentation/views/scrap-categorys/ScrapCategory';
import User from '../../Presentation/views/users/User';
import Transaction from '../../Presentation/views/transactions/Transaction';
import Unit from '../../Presentation/views/unit/Unit';
import Booking from '../../Presentation/views/booking/Booking';
import Feedback from '../../Presentation/views/feedback/Feedback';
import Finance from '../../Presentation/views/finance/Finance';
import ImageSlider from '../../Presentation/views/imageSlider/ImageSlider';

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
      path: "/booking",
      name: "Quản lí đặt lịch",
      icon: "ni ni-bullet-list-67 text-blue",
      component: Booking,
      layout: "/admin",
    },
    {
      path: "/transaction",
      name: "Quản lí giao dịch",
      icon: "ni ni-archive-2 text-orange",
      component: Transaction,
      layout: "/admin",
    },
    {
      path: "/feedback",
      name: "Ý kiến phản hồi",
      icon: "ni ni-chat-round text-yellow",
      component: Feedback,
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
      path: "/finance",
      name: "Quản lí tài chính",
      icon: "ni ni-money-coins text-red",
      component: Finance,
      layout: "/admin",
    },
    {
      path: "/image-slider",
      name: "Thiết Lập Ảnh Quảng Cáo",
      icon: "ni ni-image text-green",
      component: ImageSlider,
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
