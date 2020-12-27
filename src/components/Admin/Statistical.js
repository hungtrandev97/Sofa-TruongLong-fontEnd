import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Bar } from "react-chartjs-2";
import "./Statistical.css";

export default function Statistical() {
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
            labels: [
              "2021",
              "2022",
              "2023",
              "2024",
              "2025",
              "2026",
              "2027",
              "2028",
              "2029",
              "2030",
            ],
            datasets: [
              {
                label: "Số lượng sản phẩm đã bán",
                backgroundColor: "rgb(250, 164, 58)",

                data: [1000, 200, 300, 400, 500, 2000, 100, 200, 300, 400],
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
