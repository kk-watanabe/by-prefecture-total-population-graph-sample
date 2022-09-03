import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  TooltipProps,
} from "recharts";
import { ValueType, NameType } from "recharts/src/component/DefaultTooltipContent";

import { PerYearResult } from "@/api/population-composition-per-year/type";
import { Pref } from "@/api/prefectures/type";
import { getPrefColor } from "@/utils/prefectures-util";

import styles from "./Styles.module.css";

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className={styles["customT-tooltip"]}>
        <p className={styles["customT-tooltip__label"]}>{`${label}`}</p>
        <ul className={styles["customT-tooltip__values"]}>
          {payload?.map((p, i) => (
            <li key={`tooltip${i}`} className={styles["customT-tooltip__values-item"]} style={{ color: p.color }}>
              {`${p.name}: ${p.value?.toLocaleString()}人`}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

export interface PrefecturesLineChartProps {
  height: number;
  data: PerYearResult[];
  selectedPrefectures: Pref[];
}

export const PrefecturesLineChart = (props: PrefecturesLineChartProps) => (
  <ResponsiveContainer width="100%" height={props.height}>
    <LineChart data={props.data} margin={{ top: 60, right: 0, left: 40, bottom: 0 }}>
      <CartesianGrid />
      <XAxis dataKey="year" tick={{ fontSize: 11 }} tickSize={15} />
      <YAxis
        tickSize={15}
        tick={{ fontSize: 11 }}
        tickFormatter={(value: any) => `${(value as number).toLocaleString()}人`}
      />
      <Tooltip content={<CustomTooltip />} />
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
