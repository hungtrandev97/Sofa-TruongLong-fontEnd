const Menu = [
  {
    heading: "Main Navigation",
    translate: "sidebar.heading.HEADER",
  },
  {
    name: "Single View",
    path: "singleview",
    icon: "icon-grid",
    translate: "sidebar.nav.SINGLEVIEW",
  },
  {
    name: "Menu",
    icon: "icon-speedometer",
    translate: "sidebar.nav.menu.MENU",
    label: { value: 1, color: "info" },
    submenu: [
      {
        name: "Submenu",
        translate: "sidebar.nav.menu.SUBMENU",
        path: "submenu",
      },
    ],
  },
  {
    name: "Demo Export Pdf",
    path: "demo-pdf",
    icon: "icon-arrow-down-circle",
    translate: "sidebar.nav.DEMO_EXPORT_PDF",
  },
];

const ConsumerMenu = [
  {
    name: "About",
    path: "about",
  },
  {
    name: "Consumers",
    path: "CategoryPage",
  },
  {
    name: "HealthCare",
    path: "healthCare",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

const AdminMenu = [
  {
    name: "Danh Mục Sản Phẩm",
    path: "category",
    icon: "",
  },
  {
    name: "Sản Phẩm",
    path: "productPage",
    icon: "",
  },
  {
    name: "Đơn Hàng",
    path: "OderPage",
    icon: "",
  },
  {
    name: "Quản Lý Tài Khoản Admin",
    path: "AccountManagement",
    icon: "",
  },
  {
    name: "Tài Khoản Khách Hàng",
    path: "AccountCustomer",
    icon: "",
  },
  {
    name: "Thống Kê",
    path: "Statistical",
    icon: "",
  },
  {
    name: "Liên Hệ",
    path: "Contact",
    icon: "",
  },
  {
    name: "Cài Đặt",
    path: "SettingAdmin",
    icon: "",
  },
];

export { Menu, ConsumerMenu, AdminMenu };
