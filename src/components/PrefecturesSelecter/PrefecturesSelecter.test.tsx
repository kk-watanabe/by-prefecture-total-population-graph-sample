import { composeStories } from "@storybook/testing-react";
import { render, screen, waitFor, act } from "@testing-library/react";
import { vi } from "vitest";

import * as stories from "./PrefecturesSelecter.stories";

const { Default } = composeStories(stories);

describe("snapshots", () => {
  it("Readner Default components", () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("onChange", () => {
  it("return Pref[]", async () => {
    const onChangeSpy = vi.fn();
    render(<Default onChange={onChangeSpy} />);

    await act(async () => {
      const checkboxes = screen.getAllByRole("checkbox");
      checkboxes.at(3)?.click();

      await waitFor(() => {
        expect(onChangeSpy).toHaveBeenCalled();
        expect(onChangeSpy).toBeCalledWith([
          {
            prefCode: 1,
            prefName: "北海道",
          },
          {
            prefCode: 16,
            prefName: "富山県",
          },
        ]);
      });
    });
  });
});
