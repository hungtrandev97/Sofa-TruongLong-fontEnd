import React from "react";
import { Breadcrumb, BreadcrumbItem, CardBody, Card } from "reactstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { PAGE_SIZE } from "../../constants/DefaultValues";
import { DataContact } from "./Columndata";
import "./Contact.css";

export default function Contact() {
  const columns = () => [
    {
      name: "Khách Hàng",
      selector: "name_Contact",
      sortable: true,
      width: "200px",
    },
    {
      name: "SĐT",
      selector: "phone_Contact",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email_Contact",
      sortable: true,
    },
    {
      name: "Nội Dung Cần  Liên Hệ",
      selector: "info_customer",
      sortable: true,
    },
  ];
  const tableData = {
    columns: columns(),
    data: DataContact,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };

  return (
    <div className="ContactPage">
      <div className="ContactPage__Header">
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Thông Tin Liên Hệ</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <CardBody>
          {/* <div>Get Data Has Error</div> */}
          <DataTableExtensions {...tableData}>
            <DataTable
              columns={columns()}
              data={DataContact}
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
