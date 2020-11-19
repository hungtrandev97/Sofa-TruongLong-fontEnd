import React, { useState, useEffect } from "react";
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
import { apiGetAllProduct } from "../../services/product";
import { Productcolumns } from "./Columndata";
import "./Product.css";

export default function ProductPage() {
  const [dataProductList, setDataProductList] = useState();
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
    columns: Productcolumns,
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
          <BreadcrumbItem>Danh Sách Sản Phẩm</BreadcrumbItem>
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
              columns={Productcolumns}
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
