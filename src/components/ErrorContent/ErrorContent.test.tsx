import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import * as stories from "./ErrorContent.stories";

const { Default } = composeStories(stories);

describe("snapshots", () => {
  it("Readner Default components", () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
