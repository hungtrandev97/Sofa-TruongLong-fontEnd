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
    path: "categoryPage",
    icon: "icon-people",
  },
  {
    name: "Sản Phẩm",
    path: "hcp",
    icon: "icon-user-female",
  },
  {
    name: "Đơn Hàng",
    path: "hcp",
    icon: "icon-user-female",
  },
  {
    name: "Quản Lý Sản Phẩm",
    path: "hcp",
    icon: "icon-user-female",
  },
  {
    name: "Danh Mục Thành Viên",
    path: "hcp",
    icon: "icon-user-female",
  },
  {
    name: "Tài Khoản",
    path: "hcp",
    icon: "icon-user-female",
  },
];

export { Menu, ConsumerMenu, AdminMenu };
