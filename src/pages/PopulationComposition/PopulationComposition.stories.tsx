// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";

import {
  populationStructurApiPath,
  populationCompositionMock1,
  populationCompositionMock2,
  prefecturesApiPath,
  prefecturesMock,
} from "@/components/__mock__";

import { PopulationComposition } from "./PopulationComposition";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "pages/PopulationComposition",
  component: PopulationComposition,
} as ComponentMeta<typeof PopulationComposition>;

const Template: ComponentStory<typeof PopulationComposition> = () => <PopulationComposition />;

export const Default = Template.bind({});

const populationStructurApi = prefecturesMock.result.map((r) =>
  rest.get(populationStructurApiPath(r.prefCode), (req, res, ctx) =>
    res(ctx.json(r.prefCode % 2 === 0 ? populationCompositionMock1 : populationCompositionMock2))
  )
);
Default.parameters = {
  msw: {
    handlers: [
      rest.get(prefecturesApiPath, (req, res, ctx) => res(ctx.json(prefecturesMock))),
      ...populationStructurApi,
    ],
  },
};

export const Loading = Template.bind({});
Loading.parameters = {
  msw: {
    handlers: [rest.get(prefecturesApiPath, (req, res, ctx) => res(ctx.delay(1000 * 60 * 60 * 60), ctx.json({})))],
  },
};

export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [rest.get(prefecturesApiPath, (req, res, ctx) => res(ctx.status(403)))],
  },
};
