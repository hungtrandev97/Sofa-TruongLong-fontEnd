import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  Card,
  CardHeader,
} from "reactstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { PAGE_SIZE } from "../../constants/DefaultValues";
import { Odercolumns, DataOder } from "./Columndata";
import "./OderPage.css";

export default function OderPage() {
  const tableData = {
    columns: Odercolumns,
    data: DataOder,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };
  return (
    <div className="OderPage">
      <div className="OderPage__Header">
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Đơn Hàng</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <CardHeader
          className="Button__add"
          style={{ padding: "0px 40px 0px 0px" }}
        />
        <CardBody>
          {/* <div>Get Data Has Error</div> */}
          <DataTableExtensions {...tableData}>
            <DataTable
              columns={Odercolumns}
              data={DataOder}
              noHeader
              pagination
              // paginationServer
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
