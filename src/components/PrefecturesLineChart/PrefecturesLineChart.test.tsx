import { composeStories } from "@storybook/testing-react";
import { render, waitFor } from "@testing-library/react";

import * as stories from "./PrefecturesLineChart.stories";

const { Default } = composeStories(stories);

test("Readner Default components", async () => {
  const { container } = render(<Default />);

  await waitFor(
    () => {
      expect(container.firstChild).toMatchSnapshot();
    },
    {
      interval: 10000,
    }
  );
});
