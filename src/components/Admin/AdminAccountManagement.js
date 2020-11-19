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
import { PAGE_SIZE } from "../../constants/DefaultValues";
import {
  AdminAccountManagementColumns,
  AdminAccountManagementData,
} from "./Columndata";
import "./AdminAccountManagement.css";

export default function AdminAccountManagement() {
  const tableData = {
    columns: AdminAccountManagementColumns,
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
              columns={AdminAccountManagementColumns}
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
