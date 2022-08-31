import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

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

describe("renders", () => {
  it("Readner Default components", () => {
    render(<Default />);

    expect(
      screen.getByRole("heading", {
        name: /Heading label/i,
        level: 1,
      })
    ).toBeInTheDocument();
  });

  it("Readner ChangeTag components", () => {
    render(<ChangeTag />);

    expect(
      screen.getByRole("heading", {
        name: /Heading label/i,
        level: 4,
      })
    ).toBeInTheDocument();
  });

  it("Readner ChangeSize components", () => {
    render(<ChangeSize />);

    expect(
      screen.getByRole("heading", {
        name: /Heading label/i,
        level: 1,
      })
    ).toBeInTheDocument();
  });
});
