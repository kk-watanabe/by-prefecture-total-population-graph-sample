import { useState, useCallback } from "react";

import { Checkbox } from "@/components/Checkbox";

import { Pref } from "@/api/prefectures/type";
import { getPrefColor, getPrefecturesWithValueAddOrReduce } from "@/utils/prefectures-util";

import styles from "./Styles.module.css";

export interface PrefecturesSelecterProps {
  prefectures: Pref[];
  onChange: (selectedPrefectures: Pref[]) => void;
}

export const PrefecturesSelecter = (props: PrefecturesSelecterProps) => {
  const { prefectures, onChange } = props;
  const [selectedPrefectures, setSelectedPrefectures] = useState<Pref[]>(
    prefectures.length > 0 ? [prefectures[0]] : []
  );

  const handleChnage = useCallback(
    (pref: Pref) => {
      const result = getPrefecturesWithValueAddOrReduce(selectedPrefectures, pref);

      setSelectedPrefectures(result);
      onChange(result);
    },
    [onChange, selectedPrefectures]
  );

  const checked = useCallback(
    (prefCode: number) => selectedPrefectures.some((p) => p.prefCode === prefCode),
    [selectedPrefectures]
  );

  return (
    <ul className={styles["prefectures-selecter"]}>
      {prefectures.map((p, i) => (
        <li key={p.prefCode} className={styles["prefectures-selecter__item"]}>
          <Checkbox
            id={`item${i}`}
            colorCode={getPrefColor(p.prefCode) ?? ""}
            value={p.prefCode}
            label={p.prefName}
            checked={checked(p.prefCode)}
            onChange={() => handleChnage(p)}
          />
        </li>
      ))}
    </ul>
  );
};
