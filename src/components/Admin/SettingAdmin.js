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
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { PAGE_SIZE } from "../../constants/DefaultValues";
import { DataSetting } from "./Columndata";

export default function SettingAdmin() {
  const columns = () => [
    {
      name: "Slider 1",
      selector: "Setting_Slider__1",
      sortable: true,
      width: "200px",
    },
    {
      name: "Slider 2",
      selector: "img_1",
      sortable: true,
    },
    {
      name: " Slider 3",
      selector: "Link_1",
      sortable: true,
    },
    {
      name: "SĐT 1",
      selector: "Phone",
      sortable: true,
    },
    {
      name: "SĐT 2",
      selector: "Phone",
      sortable: true,
    },
    {
      name: "Gmail",
      selector: "Phone",
      sortable: true,
    },
    {
      name: "Link FaceBook",
      selector: "Phone",
      sortable: true,
    },
    {
      name: "Link Zalo",
      selector: "Phone",
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
        <Link
          to={{
            pathname: `/admin/editSetting`,
            state: {
              row,
            },
          }}
        >
          <AiOutlineEdit size="1rem" color="#23b7e5" />
        </Link>
      ),
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
