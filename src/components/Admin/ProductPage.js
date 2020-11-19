import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardBody,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";
import memoizeOne from "memoize-one";
import moment from "moment";
import { PAGE_SIZE } from "../../constants/DefaultValues";
import { apiGetAllProduct } from "../../services/product";
import { Productcolumns } from "./Columndata";
import "./Product.css";

const columns = memoizeOne((currentPage) => [
  {
    name: "S/N",
    selector: "serial",
    sortable: false,
    center: true,
    wrap: true,
    width: "50px",
    // format: (row) => (currentPage - 1) * PAGE_SIZE + (row.serial + 1),
  },
  {
    name: "Tên Danh Mục Sản Phẩm",
    selector: "category_title",
    sortable: true,
    // eslint-disable-next-line no-underscore-dangle
    format: (row) => row._category.category_title,
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
    format: (row) => `MSP-${row.product_code}`,
  },
  {
    name: "Hình Ảnh Chính",
    selector: "product_imageMain",
    sortable: true,
    cell: (row) => (
      <>
        <img src={`${row.product_imageMain}`} alt="" width="100" />
      </>
    ),
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
  {
    name: "Sửa",
    selector: "isDeleted",
    sortable: false,
    center: true,
    wrap: true,
    format: (row) => (
      <Badge color={`${row.isDeleted ? "danger" : "success"}`}>
        {`${row.isDeleted ? "Deleted" : "Actived"}`}
      </Badge>
    ),
  },
]);

export default function ProductPage() {
  const [dataProductList, setDataProductList] = useState();
  console.log(dataProductList);
  const callApi = async () => {
    const req = await apiGetAllProduct();
    if (req.status) {
      setDataProductList(req.data.data);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const tableData = {
    columns: columns(),
    data: dataProductList,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };
  return (
    <div className="Product">
      <div
        className="Product__Header"
        style={{
          paddingTop: "10px",
          background: "#80808026",
          fontSize: "15px",
        }}
      >
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Danh Sách Sản Phẩm</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <CardHeader
          className="Button__add"
          style={{ padding: "0px 40px 0px 0px" }}
        >
          <Link to="/admin/createProduct" className="Product__LinkNew">
            <span className="align-middle">Thêm Mới</span>
          </Link>
        </CardHeader>
        <CardBody>
          <DataTableExtensions {...tableData}>
            <DataTable
              noHeader
              pagination
              columns={columns()}
              data={dataProductList}
              paginationPerPage={PAGE_SIZE}
              highlightOnHover
              noDataComponent="Danh mục rỗng"
              pointerOnHover
              selectableRowsVosystemOnly
              selectableRowsNoSelectAll
              defaultSortField="id"
              paginationComponentOptions={{ noRowsPerPage: true }}
            />
          </DataTableExtensions>
        </CardBody>
      </Card>
    </div>
  );
}
