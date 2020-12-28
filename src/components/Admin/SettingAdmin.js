import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import {
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  Card,
  CardHeader,
} from "reactstrap";
import { PAGE_SIZE } from "../../constants/DefaultValues";
import { DataSetting } from "./Columndata";

export default function SettingAdmin() {
  const columns = () => [
    {
      name: "Tên",
      selector: "Setting_Slider__1",
      sortable: true,
      width: "200px",
    },
    {
      name: "Hình Ảnh",
      selector: "img_1",
      sortable: true,
    },
    {
      name: "Link",
      selector: "Link_1",
      sortable: true,
    },
    {
      name: "SĐT",
      selector: "Phone",
      sortable: true,
    },
  ];

  const tableData = {
    columns: columns(),
    data: DataSetting,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };
  return (
    <div>
      <div className="OderPage__Header">
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Cài Đặt Slider</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <CardHeader
          className="Button__add"
          style={{ padding: "0px 40px 0px 0px" }}
        />
        <CardBody>
          <DataTableExtensions {...tableData}>
            <DataTable
              columns={columns()}
              data={DataSetting}
              noHeader
              pagination
              paginationPerPage={PAGE_SIZE}
              highlightOnHover
              noDataComponent="Danh mục rỗng"
              selectableRowsVosystemOnly
              selectableRowsNoSelectAll
              paginationComponentOptions={{ noRowsPerPage: true }}
            />
          </DataTableExtensions>
        </CardBody>
      </Card>
    </div>
  );
}
