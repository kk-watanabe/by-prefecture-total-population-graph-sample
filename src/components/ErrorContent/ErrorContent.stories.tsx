import { ErrorContent } from "./ErrorContent";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/ErrorContent",
  component: ErrorContent,
} as ComponentMeta<typeof ErrorContent>;

const Template: ComponentStory<typeof ErrorContent> = (args) => <ErrorContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      エラーを表示します。
      <br />
      エラーを表示します。
    </>
  ),
};
