import { useState } from "react";

import { ErrorContent } from "@/components/ErrorContent";
import { Heading } from "@/components/Heading";
import { Loading } from "@/components/Loading";
import { PrefecturesLineChart } from "@/components/PrefecturesLineChart";
import { PrefecturesSelecter } from "@/components/PrefecturesSelecter";

import { usePopulationCompositionPerYear } from "@/api/population-composition-per-year";
import { Pref } from "@/api/prefectures/type";

import styles from "./Styles.module.css";

interface LineChartContentProps {
  selectedPrefectures: Pref[];
}

const LineChartContent = (props: LineChartContentProps) => {
  const selectedPrefCodes = props.selectedPrefectures.map((p) => p.prefCode);
  const { populationStructure, isLoading, isError } = usePopulationCompositionPerYear(selectedPrefCodes);

  if (isLoading) {
    return (
      <div className={styles["line-chart-content__loading"]}>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorContent>
        <>
          読み込みに失敗しました。
          <br />
          更新をお試しください。
        </>
      </ErrorContent>
    );
  }

  return (
    <PrefecturesLineChart height={480} selectedPrefectures={props.selectedPrefectures} data={populationStructure} />
  );
};

export interface PrefecturesContentProps {
  prefectures: Pref[];
}

export const PrefecturesContent = (props: PrefecturesContentProps) => {
  const [selectedPrefectures, setSelectedPrefectures] = useState([props.prefectures[0]]);

  return (
    <section className={styles["prefectures-content"]}>
      <div className={styles["prefectures-content__controller"]}>
        <Heading label="都道府県" tag="h2" size="xl" />

        <PrefecturesSelecter prefectures={props.prefectures} onChange={setSelectedPrefectures} />
      </div>

      <div className={styles["prefectures-content__chart"]}>
        <LineChartContent selectedPrefectures={selectedPrefectures} />
      </div>
    </section>
  );
};
