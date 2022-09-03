import { Checkbox } from "./Checkbox";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "checkbox-id1",
  label: "Checkbox label",
  value: 1,
  checked: false,
  colorCode: "red",
};

export const Checked = Template.bind({});
Checked.args = { ...Default.args, checked: true };
