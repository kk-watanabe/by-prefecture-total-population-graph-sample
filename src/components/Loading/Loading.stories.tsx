import { Loading } from "./Loading";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Default = Template.bind({});
