import React from "react";

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { AdminAccountManagementData } from "./Columndata";
import "./AdminAccountManagement.css";
import memoizeOne from "memoize-one";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PAGE_SIZE } from "../../constants/DefaultValues";

export default function AdminAccountManagement() {
  const columns = memoizeOne(() => [
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
    {
      name: "Sửa",
      selector: "isDeleted",
      sortable: false,
      center: true,
      wrap: true,
      width: "80px",
      format: (row) => (
        <Link>
          <AiOutlineEdit size="1rem" color="rgb(250, 62, 63)" />
        </Link>
      ),
    },
    {
      name: "xóa",
      selector: "isDeleted",
      sortable: false,
      center: true,
      wrap: true,
      width: "80px",
      cell: (row) => <RiDeleteBin6Line size="1rem" color="rgb(250, 62, 63)" />,
    },
  ]);
  const tableData = {
    columns: columns(),
    data: AdminAccountManagementData,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };
  return (
    <div className="AdminAccountManagement">
      <div
        className="AccountManagement_Header"
        style={{
          paddingTop: "10px",
          background: "#80808026",
          fontSize: "15px",
        }}
      >
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Quản Lý Tài Khoản</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <CardHeader
          className="Button__add"
          style={{ padding: "0px 40px 0px 0px" }}
        >
          <Link
            to="/admin/CreateAccountManagement"
            className="AccountManagement__LinkNew"
          >
            <span className="align-middle">Thêm Mới</span>
          </Link>
        </CardHeader>
        <CardBody>
          <DataTableExtensions {...tableData}>
            <DataTable
              noHeader
              pagination
              columns={columns}
              data={AdminAccountManagementData}
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
