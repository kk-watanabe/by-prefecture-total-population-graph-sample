import { useState, useCallback } from "react";

import { Checkbox } from "@/components/Checkbox";

import { Pref } from "@/api/prefectures/type";
import {
  hokkaidoAndTouhokuCodes,
  kantoCodes,
  tyubuCodes,
  kinkiCodes,
  tyugokuAndshikokuCodes,
  kyusyuAndOkinawaCodes,
  getRangePrefectures,
  getPrefColor,
  getPrefecturesWithValueAddOrReduce,
} from "@/utils/prefectures-util";

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

  const handleClick = useCallback(
    (codes: number[]) => {
      const rangePrefectures = getRangePrefectures(prefectures, codes);
      const result = new Set([...selectedPrefectures, ...rangePrefectures]);

      setSelectedPrefectures([...result]);
      onChange([...result]);
    },
    [onChange, selectedPrefectures, prefectures]
  );

  const allSelectedClick = useCallback(() => {
    setSelectedPrefectures(prefectures);
    onChange(prefectures);
  }, [onChange, prefectures]);

  const resetSelectedClick = useCallback(() => {
    setSelectedPrefectures([]);
    onChange([]);
  }, [onChange]);

  return (
    <div className={styles["prefectures-selecter"]}>
      <ul className={styles["prefectures-selecter__list"]}>
        <li>
          <button type="button" className={styles["prefectures-selecter__button"]} onClick={allSelectedClick}>
            ?????????
          </button>
        </li>
        <li>
          <button type="button" className={styles["prefectures-selecter__button"]} onClick={resetSelectedClick}>
            ?????????
          </button>
        </li>
      </ul>

      <ul className={styles["prefectures-selecter__list"]}>
        <li>
          <button
            type="button"
            className={styles["prefectures-selecter__button"]}
            onClick={() => handleClick(hokkaidoAndTouhokuCodes)}
          >
            ???????????????????????????
          </button>
        </li>
        <li>
          <button
            type="button"
            className={styles["prefectures-selecter__button"]}
            onClick={() => handleClick(kantoCodes)}
          >
            ???????????????
          </button>
        </li>
        <li>
          <button
            type="button"
            className={styles["prefectures-selecter__button"]}
            onClick={() => handleClick(tyubuCodes)}
          >
            ???????????????
          </button>
        </li>
        <li>
          <button
            type="button"
            className={styles["prefectures-selecter__button"]}
            onClick={() => handleClick(kinkiCodes)}
          >
            ???????????????
          </button>
        </li>
        <li>
          <button
            type="button"
            className={styles["prefectures-selecter__button"]}
            onClick={() => handleClick(tyugokuAndshikokuCodes)}
          >
            ????????????????????????
          </button>
        </li>
        <li>
          <button
            type="button"
            className={styles["prefectures-selecter__button"]}
            onClick={() => handleClick(kyusyuAndOkinawaCodes)}
          >
            ????????????????????????
          </button>
        </li>
      </ul>

      <ul className={styles["prefectures-selecter__list"]}>
        {prefectures.map((p, i) => (
          <li key={p.prefCode}>
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
    </div>
  );
};
