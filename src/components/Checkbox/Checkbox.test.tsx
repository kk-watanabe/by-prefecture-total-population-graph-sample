import { composeStories } from "@storybook/testing-react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import * as stories from "./Checkbox.stories";

const { Default, Checked } = composeStories(stories);

describe("snapshots", () => {
  it("Readner Default components", () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Readner Checked components", () => {
    const { container } = render(<Checked />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("label click", async () => {
  it("change checked components", async () => {
    render(<Default />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox, true);

    await waitFor(() => {
      expect(checkbox).toBeChecked();
    });
  });

  it("change not checked components", async () => {
    render(<Checked />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox, false);

    await waitFor(() => {
      expect(checkbox).not.toBeChecked();
    });
  });
});
