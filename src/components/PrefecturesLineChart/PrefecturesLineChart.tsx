import { ResponsiveContainer, LineChart, CartesianGrid, Line, Label, XAxis, YAxis, Tooltip, Legend } from "recharts";

import { PerYearResult } from "@/api/population-composition-per-year/type";
import { Pref } from "@/api/prefectures/type";
import { getPrefColor } from "@/utils/prefectures-util";

export interface PrefecturesLineChartProps {
  height: number;
  data: PerYearResult[];
  selectedPrefectures: Pref[];
}

export const PrefecturesLineChart = (props: PrefecturesLineChartProps) => (
  <ResponsiveContainer width="100%" height={props.height}>
    <LineChart data={props.data} margin={{ top: 80, right: 0, left: 80, bottom: 40 }}>
      <CartesianGrid />
      <XAxis dataKey="year" tickSize={15}>
        <Label value="年度" position="insideBottom" offset={-30} />
      </XAxis>
      <YAxis tickSize={15}>
        <Label value="人口数" position="insideLeft" offset={-60} angle={-90} />
      </YAxis>
      <Tooltip />
      <Legend align="center" verticalAlign="top" wrapperStyle={{ top: 0 }} />

      {props.selectedPrefectures.map((p) => (
        <Line
          key={p.prefCode}
          type="monotone"
          dataKey={p.prefCode}
          name={p.prefName}
          stroke={getPrefColor(p.prefCode)}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
);
