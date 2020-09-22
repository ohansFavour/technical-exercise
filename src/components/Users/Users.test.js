import React from "react";
import { screen, render } from "@testing-library/react";

import Users from "./Users";
import { UsersContext } from "../../context/store";

const testProviderValue = {
  state: {
    users: [
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
    ],
  },
};

describe("Users Component", () => {
  beforeEach(() => {
    render(
      <UsersContext.Provider value={testProviderValue}>
        <Users />
      </UsersContext.Provider>
    );
  });

  test("should render a Title", () => {
    expect(screen.getByTestId("users-list")).toBeInTheDocument();
  });

  test("should render only 1 user", () => {
    expect(
      screen.getAllByText(testProviderValue.state.users[0].name).length
    ).toBe(1);
  });
});
