import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { data, columns } from "./data";
import { PAGE_SIZE } from "../../constants/DefaultValues";
import "react-data-table-component-extensions/dist/index.css";
import "./CategoryPage.css";

function CategoryPage() {
  const tableData = {
    columns,
    data,
  };
  return (
    <div className="Category">
      <div className="Category__Header">
        <Breadcrumb>
          <BreadcrumbItem>home</BreadcrumbItem>
          <BreadcrumbItem active>List</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <CardHeader className="d-flex align-items-center justify-content-between">
          <Button color="primary">
            <span className="align-middle">Add</span>
          </Button>
        </CardHeader>
        <CardBody>
          {/* <div>Get Data Has Error</div> */}
          <DataTableExtensions {...tableData}>
            <DataTable
              noHeader
              columns={columns}
              data={data}
              pagination
              // paginationServer
              paginationPerPage={PAGE_SIZE}
              highlightOnHover
              noDataComponent="Danh mục rỗng"
              pointerOnHover
              selectableRowsVosystemOnly
              selectableRowsNoSelectAll
              defaultSortField="id"
            />
          </DataTableExtensions>
        </CardBody>
      </Card>
    </div>
  );
}
export default CategoryPage;
