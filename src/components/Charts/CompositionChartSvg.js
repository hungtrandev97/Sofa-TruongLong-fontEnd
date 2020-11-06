import React from "react";
import { shape, string, number, arrayOf } from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function CompositionChartSvg(props) {
  const { data } = props;
  return (
    <>
      <ResponsiveContainer
        // width='40%'
        // minHeight='400px'
        aspect={4 / 4}
        id="xxx"
      >
        <PieChart width={500} height={500} id="yyy">
          <Pie
            data={data}
            nameKey="name"
            dataKey="value"
            startAngle={90}
            endAngle={-(180 + 90)}
            paddingAngle={-2}
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

CompositionChartSvg.propTypes = {
  data: arrayOf(
    shape({
      name: string,
      value: number,
      color: string,
    })
  ),
};

CompositionChartSvg.defaultProps = {
  data: [],
};

export default CompositionChartSvg;
