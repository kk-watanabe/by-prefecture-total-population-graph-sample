import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import * as stories from "./PrefecturesContent.stories";

const { Default, Loading, Error } = composeStories(stories);

describe("snapshots", () => {
  it("Readner Default components", () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Readner Loading components", () => {
    const { container } = render(<Loading />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Readner Error components", () => {
    const { container } = render(<Error />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
