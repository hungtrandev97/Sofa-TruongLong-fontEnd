import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Breadcrumb, BreadcrumbItem, CardBody, Card } from "reactstrap";
import DataTable from "react-data-table-component";
import moment from "moment";
import DataTableExtensions from "react-data-table-component-extensions";
import { PAGE_SIZE } from "../../constants/DefaultValues";
import { apiGetAllCategory } from "../../services/contcat";
import "./Contact.css";

export default function Contact() {
  const dispatch = useDispatch();
  const [dataContact, setDataContact] = useState([]);
  useEffect(() => {
    const apiGetAllContact = async () => {
      const getAllDataContact = await apiGetAllCategory();
      setDataContact(getAllDataContact.data);
    };
    apiGetAllContact();
  }, [dispatch]);
  const columns = () => [
    {
      name: "Khách Hàng",
      selector: `name`,
      sortable: true,
      width: "200px",
    },
    {
      name: "SĐT",
      selector: "numberPhone",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Ngày Tạo",
      selector: `date_create`,
      sortable: true,
      format: (row) => moment(row.date_create).format("DD-MM-YY hh:ss"),
    },
    {
      name: "Nội Dung Cần  Liên Hệ",
      selector: `content`,
      sortable: true,
    },
  ];
  const tableData = {
    columns: columns(),
    data: dataContact,
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
              data={dataContact}
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
