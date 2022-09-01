import { PrefecturesLineChart } from "./PrefecturesLineChart";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "PrefecturesLineChart",
  component: PrefecturesLineChart,
} as ComponentMeta<typeof PrefecturesLineChart>;

const Template: ComponentStory<typeof PrefecturesLineChart> = (args) => <PrefecturesLineChart {...args} />;

const data = [
  {
    year: "1960年",
    1: 4000,
    47: 2400,
  },
  {
    year: "1970年",
    1: 3000,
    47: 1398,
  },
  {
    year: "1980年",
    1: 2000,
    47: 9800,
  },
  {
    year: "1990年",
    1: 2780,
    47: 3908,
  },
  {
    year: "2000年",
    1: 1890,
    47: 4800,
  },
  {
    year: "2010年",
    1: 2390,
    47: 3800,
  },
  {
    year: "2020年",
    1: 3490,
    47: 4300,
  },
];

const selectedPrefectures = [
  {
    prefCode: 1,
    prefName: "北海道",
  },
  {
    prefCode: 47,
    prefName: "沖縄県",
  },
];

export const Default = Template.bind({});
Default.args = {
  height: 600,
  data,
  selectedPrefectures,
};
