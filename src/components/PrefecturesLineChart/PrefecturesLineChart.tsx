import { ResponsiveContainer, LineChart, CartesianGrid, Line, Label, XAxis, YAxis, Tooltip, Legend } from "recharts";

import { Pref } from "@/api/prefectures/type";
import getPrefColor from "@/utils/prefectures-util";

export type PrefecturesLineChartData = {
  year: string;
  [key: number]: number;
};

export interface PrefecturesLineChartProps {
  height: number;
  data: PrefecturesLineChartData[];
  selectedPrefectures: Pref[];
}

export const PrefecturesLineChart = (props: PrefecturesLineChartProps) => (
  <ResponsiveContainer width="100%" height={props.height}>
    <LineChart data={props.data} margin={{ top: 80, right: 80, left: 10, bottom: 20 }}>
      <CartesianGrid />
      <XAxis dataKey="year" tickSize={15}>
        <Label value="年度" position="right" offset={40} />
      </XAxis>
      <YAxis tickSize={15}>
        <Label value="人口数" position="top" offset={40} />
      </YAxis>
      <Tooltip />
      <Legend wrapperStyle={{ bottom: 0 }} />
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
