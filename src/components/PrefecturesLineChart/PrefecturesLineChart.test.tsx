import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import { vi } from "vitest";

import * as stories from "./PrefecturesLineChart.stories";

const { Default } = composeStories(stories);

test("Readner Default components", async () => {
  window.ResizeObserver =
    window.ResizeObserver ||
    vi.fn().mockImplementation(() => ({
      unobserve: vi.fn(),
      observe: vi.fn(),
      disconnect: vi.fn(),
    }));

  const { container } = await render(<Default />);

  expect(container.firstChild).toMatchSnapshot();
});
