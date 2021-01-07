/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  Card,
  CardHeader,
} from "reactstrap";
import NumberFormat from "react-number-format";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";
import { apiGetAllOderDetail } from "../../services/Cart";
import { PAGE_SIZE } from "../../constants/DefaultValues";

export default function DetailOder({ match }) {
  const idOderDetailUrl = match.params.id;
  const [dataGetAllOderDetail, setDataGetAllOderDetail] = useState([]);

  const columns = () => [
    {
      name: "Sản Phẩm",
      selector: "_product",
      sortable: true,
      format: (row) => row._product.product_title,
    },
    {
      name: "Số Lượng",
      selector: "quantity",
      sortable: true,
    },
    {
      name: "Giá ",
      selector: "priceProduct",
      sortable: true,
      format: (row) => (
        <NumberFormat
          displayType="text"
          thousandSeparator
          placeholder="Thêm Giá"
          autoComplete="productPrice"
          suffix="vnđ"
          defaultValue={row.priceProduct}
        />
      ),
    },
  ];

  const tableData = {
    columns: columns(),
    data: dataGetAllOderDetail,
    filterPlaceholder: "Tìm kiếm",
    export: false,
    print: false,
  };

  useEffect(() => {
    const GetAllOderDetail = async () => {
      const getAllDataOderDetail = await apiGetAllOderDetail(idOderDetailUrl);
      setDataGetAllOderDetail(getAllDataOderDetail.data);
    };
    GetAllOderDetail();
  }, []);

  return (
    <div className="OderPage">
      <div className="OderPage__Header">
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Chi Tiết Đơn Hàng</BreadcrumbItem>
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
              data={dataGetAllOderDetail}
              noHeader
              pagination
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
