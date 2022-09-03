import { ErrorContent } from "@/components/ErrorContent";
import { Heading } from "@/components/Heading";
import { Loading } from "@/components/Loading";
import { PrefecturesContent } from "@/components/PrefecturesContent";

import { usePrefectures } from "@/api/prefectures";

import styles from "./Styles.module.css";

const PopulationCompositionContent = () => {
  const { prefectures, isLoading, isError } = usePrefectures();

  if (isLoading) {
    return (
      <div className={styles["population-composition-content__loading"]}>
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

  return <PrefecturesContent prefectures={prefectures} />;
};

export const PopulationComposition = () => (
  <div className={styles["population-composition"]}>
    <Heading label="都道府県別人口構成" />

    <div className={styles["population-composition__content"]}>
      <PopulationCompositionContent />
    </div>
  </div>
);
