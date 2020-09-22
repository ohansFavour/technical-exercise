import React from "react";
import { screen, render } from "@testing-library/react";

import App from "./App";

import { UsersProvider } from "./context/store";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: "55faef3e3166640003000000",
          created_at: "2015-09-17T16:50:06.000Z",
          updated_at: "2020-09-16T20:21:29.564Z",
          email: "aaron@trychameleon.com",
          name: "Aaron Cody",
          cached_avatar:
            "https://d1ts43dypk8bqh.cloudfront.net/v1/avatars/eb38d065-c587-402f-aa17-135c754db73a",
          agent:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
          style: "owner",
          stats: { invited_users_count: 3, published_campaigns_count: null },
        },
      ]),
  })
);

describe("App Component", () => {
  beforeEach(() => {
    render(
      <UsersProvider>
        <App />
      </UsersProvider>
    );
    fetch.mockClear();
  });

  test("Show Header", () => {
    expect(screen.getByText("USERS CATALOGUE")).toBeInTheDocument();
  });

  test("Should not show list", () => {
    expect(screen.queryByText("list")).toBeNull();
  });

  test("Show list after async", async () => {
    expect(await screen.findByText("List")).toBeInTheDocument();
    screen.debug();
  });

  test("Show summary after async", async () => {
    expect(await screen.findByText("Summary")).toBeInTheDocument();
    screen.debug();
  });
});
