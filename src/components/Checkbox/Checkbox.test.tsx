import { composeStories } from "@storybook/testing-react";
import { render, screen, waitFor, act, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import * as stories from "./Checkbox.stories";

const { Default, Checked } = composeStories(stories);

describe("snapshots", () => {
  it("Readner Default components", () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Readner Checked components", async () => {
    const { container } = await render(<Checked />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("label click", async () => {
  it("change checked components", async () => {
    const onChange = vi.fn();

    render(<Default onChange={onChange} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    act(() => {
      fireEvent.click(checkbox, true);
    });

    await waitFor(async () => {
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(checkbox).toBeChecked();
    });
  });

  it("change not checked components", async () => {
    const onChange = vi.fn();

    render(<Checked onChange={onChange} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeChecked();

    act(() => {
      fireEvent.click(checkbox, false);
    });

    await waitFor(async () => {
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(checkbox).not.toBeChecked();
    });
  });
});
