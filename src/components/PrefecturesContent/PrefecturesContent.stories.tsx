// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";

import {
  populationStructurApiPath,
  populationCompositionMock1,
  populationCompositionMock2,
  prefecturesMock,
} from "../__mock__";
import { PrefecturesContent } from "./PrefecturesContent";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "components/PrefecturesContent",
  component: PrefecturesContent,
} as ComponentMeta<typeof PrefecturesContent>;

const Template: ComponentStory<typeof PrefecturesContent> = (args) => <PrefecturesContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  prefectures: prefecturesMock.result,
};
Default.parameters = {
  msw: {
    handlers: prefecturesMock.result.map((r) =>
      rest.get(populationStructurApiPath(r.prefCode), (req, res, ctx) =>
        res(ctx.json(r.prefCode % 2 === 0 ? populationCompositionMock1 : populationCompositionMock2))
      )
    ),
  },
};

export const Loading = Template.bind({});
Loading.args = Default.args;
Loading.parameters = {
  msw: {
    handlers: [
      rest.get(populationStructurApiPath(1), (req, res, ctx) => res(ctx.delay(1000 * 60 * 60 * 60), ctx.json({}))),
    ],
  },
};

export const Error = Template.bind({});
Error.args = Default.args;
Error.parameters = {
  msw: {
    handlers: [rest.get(populationStructurApiPath(1), (req, res, ctx) => res(ctx.status(403)))],
  },
};
