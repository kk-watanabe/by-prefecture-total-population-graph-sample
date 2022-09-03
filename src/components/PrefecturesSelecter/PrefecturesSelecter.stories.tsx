import { PrefecturesSelecter } from "./PrefecturesSelecter";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/PrefecturesSelecter",
  component: PrefecturesSelecter,
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof PrefecturesSelecter>;

const Template: ComponentStory<typeof PrefecturesSelecter> = (args) => <PrefecturesSelecter {...args} />;

const prefectures = [
  {
    prefCode: 1,
    prefName: "北海道",
  },
  {
    prefCode: 14,
    prefName: "神奈川県",
  },
  {
    prefCode: 15,
    prefName: "新潟県",
  },
  {
    prefCode: 16,
    prefName: "富山県",
  },
  {
    prefCode: 17,
    prefName: "石川県",
  },
  {
    prefCode: 47,
    prefName: "沖縄県",
  },
];

export const Default = Template.bind({});
Default.args = {
  prefectures,
};
