import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Bar } from "react-chartjs-2";
import { apiGetAllStatistical } from "../../services/Statistical";
import "./Statistical.css";

export default function Statistical() {
  const dispatch = useDispatch();
  const yearPage = [];
  const totalPage = [];
  const [dataGetAllStatistical, setDataGetAllStatistical] = useState([]);
  dataGetAllStatistical.forEach((item) => {
    yearPage.push(`${item.year}`);
    totalPage.push(item.totalnumber);
  });
  useEffect(() => {
    const GetAllStatistical = async () => {
      const getAllDataStatistical = await apiGetAllStatistical();
      setDataGetAllStatistical(getAllDataStatistical.data);
    };
    GetAllStatistical();
  }, [dispatch]);
  if (totalPage.length < 7) {
    totalPage.push(0);
    totalPage.push(0);
    totalPage.push(0);
    totalPage.push(0);
    totalPage.push(0);
    totalPage.push(0);
    totalPage.push(0);
    totalPage.push(0);
  }
  return (
    <div className="StatisticalPage">
      <div className="StatisticalPage__Header">
        <Breadcrumb>
          <BreadcrumbItem>Admin</BreadcrumbItem>
          <BreadcrumbItem active>Thống Kê</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="StatisticalPage__Content">
        <Bar
          data={{
            labels: yearPage,
            datasets: [
              {
                label: "Số lượng sản phẩm đã bán",
                backgroundColor: "rgb(250, 164, 58)",

                data: totalPage,
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: {
              display: true,
              text: "Thống Kê Đơn Hàng ",
            },
          }}
        />
      </div>
    </div>
  );
}
