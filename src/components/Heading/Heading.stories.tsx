import React from "react";

import { Heading } from "./Heading";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    tag: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "radio" },
    },
    size: {
      options: ["4xl", "3xl", "2xl", "xl", "lg", "base", "sm", "xs"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Heading label",
};

export const ChangeTag = Template.bind({});
ChangeTag.args = {
  label: "Heading label",
  tag: "h4",
};

export const ChangeSize = Template.bind({});
ChangeSize.args = {
  label: "Heading label",
  size: "2xl",
};
