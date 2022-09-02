import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import * as stories from "./Heading.stories";

const { Default, ChangeTag, ChangeSize } = composeStories(stories);

describe("snapshots", () => {
  it("Readner Default components", () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Readner ChangeTag components", () => {
    const { container } = render(<ChangeTag />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Readner ChangeSize components", () => {
    const { container } = render(<ChangeSize />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
