import { prefecturesMock } from "../__mock__";
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

export const Default = Template.bind({});
Default.args = {
  prefectures: prefecturesMock.result,
};
