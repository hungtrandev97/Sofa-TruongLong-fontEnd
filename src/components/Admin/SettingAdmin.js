import React, { useEffect, useState } from "react";
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
import { apiGetAllSetting } from "../../services/setting";

export default function SettingAdmin() {
  const [dataSetting, setDataSetting] = useState([]);
  useEffect(() => {
    const GetAllSetting = async () => {
      const dataGetAllSetting = await apiGetAllSetting();
      if (dataGetAllSetting && dataGetAllSetting.data) {
        setDataSetting(dataGetAllSetting.data);
      }
    };
    GetAllSetting();
  }, []);

  const columns = () => [
    {
      name: "Slider 1",
      selector: "imageSlider1",
      sortable: true,
      width: "200px",
      cell: (row) => (
        <>
          <img src={`${row.imageSlider1}`} alt="" width="100" />
        </>
      ),
    },
    {
      name: "Slider 2",
      selector: "imageSlider2",
      sortable: true,
      cell: (row) => (
        <>
          <img src={`${row.imageSlider2}`} alt="" width="100" />
        </>
      ),
    },
    {
      name: " Slider 3",
      selector: "imageSlider3",
      sortable: true,
      cell: (row) => (
        <>
          <img src={`${row.imageSlider3}`} alt="" width="100" />
        </>
      ),
    },
    {
      name: "SĐT 1",
      selector: "numberPhone",
      sortable: true,
    },
    {
      name: "SĐT 2",
      selector: "numberPhone1",
      sortable: true,
    },
    {
      name: "Gmail",
      selector: "email",
      sortable: true,
    },
    {
      name: "Link FaceBook",
      selector: "linkFB",
      sortable: true,
    },
    {
      name: "Link Zalo",
      selector: "numberPhoneZallo",
      sortable: true,
    },
    {
      name: "Hướng Dẫn Mua 1",
      selector: "support1",
      sortable: true,
    },
    {
      name: "Hướng Dẫn Mua 2",
      selector: "support2",
      sortable: true,
    },
    {
      name: "Hướng Dẫn Mua 3",
      selector: "support3",
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
    data: dataSetting,
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
              data={dataSetting}
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
