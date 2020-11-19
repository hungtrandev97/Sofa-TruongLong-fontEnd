export const Categorycolumns = [
  {
    name: "STT",
    selector: "serial",
    sortable: false,
    center: true,
    wrap: true,
    width: "50px",
  },
  {
    name: "Tên Danh Mục",
    selector: "category_title",
    sortable: true,
  },
  {
    name: "Thời Gian Tạo Danh Mục",
    selector: "date_create",
    sortable: true,
  },
  {
    name: "Chức Năng",
    sortable: true,
  },
];

export const Productcolumns = [
  {
    name: "STT",
    selector: "serial",
    sortable: false,
    center: true,
    wrap: true,
    width: "50px",
  },
  {
    name: "Tên Danh Mục Sản Phẩm",
    selector: "category_title",
    sortable: true,
  },
  {
    name: "Tên Sản Phẩm",
    selector: "product_title",
    sortable: true,
  },

  {
    name: "Mã Sản Phẩm",
    selector: "product_code",
    sortable: true,
  },
  {
    name: "Mô Tả Sản Phẩm",
    selector: "product_discript",
    sortable: true,
  },
  {
    name: "Hình Ảnh Chính",
    selector: "product_imageMain",
    sortable: true,
  },
  {
    name: "Hình Ảnh Phụ",
    selector: "product_image",
    sortable: true,
  },
  {
    name: "Giá Sản Phẩm",
    selector: "product_price",
    sortable: true,
  },
  {
    name: "Giảm Giá Sản Phẩm",
    selector: "product_price_sale",
    sortable: true,
  },
  {
    name: "Sản Phẩm Mới",
    selector: "product_new",
    sortable: true,
  },
];

export const Odercolumns = [
  {
    name: "STT",
    selector: "serial",
    sortable: false,
    center: true,
    wrap: true,
    width: "50px",
  },
  {
    name: "Tên Danh Mục",
    selector: "category_title",
    sortable: true,
  },
  {
    name: "Tên Sản Phẩm",
    selector: "product_title",
    sortable: true,
  },
  {
    name: "Thời Gian Tạo Đơn Hàng",
    selector: "date_create",
    sortable: true,
  },
  {
    name: "Địa Chỉ Khách Hàng",
    selector: "address_customer",
    sortable: true,
  },
  {
    name: "Chức Năng",
    sortable: true,
  },
];

export const DataOder = [
  {
    category_title: "Ghế",
    product_title: "Ghế Sofa Da Tru",
    date_create: "11-19-2020",
    address_customer: "789 Phan Văn Trị- Gò Vấp",
  },
  {
    category_title: "Bàn",
    product_title: "Ghế Sofa Da Tru",
    date_create: "11-19-2020",
    address_customer: "789 Phan Văn Trị- Gò Vấp",
  },
  {
    category_title: "Sofa Da",
    product_title: "Sofa Da Tru",
    date_create: "11-19-2020",
    address_customer: "789 Phan Văn Trị- Gò Vấp",
  },
];

export const AdminAccountManagementColumns = [
  {
    name: "STT",
    selector: "serial",
    sortable: false,
    center: true,
    wrap: true,
    width: "50px",
  },
  {
    name: "Tên Tài Khoản",
    selector: "AdminAccounr_title",
    sortable: true,
  },
  {
    name: "Mật Khẩu",
    selector: "PassWord",
    sortable: true,
  },
];

export const AdminAccountManagementData = [
  {
    AdminAccounr_title: "KhanhHung97",
    PassWord: "******",
  },
  {
    AdminAccounr_title: "HieuPhan",
    PassWord: "******",
  },
];
