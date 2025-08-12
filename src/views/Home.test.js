import { describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeViews from "./HomeViews.vue";

describe("Home", () => {
  it("renders correctly", () => {
    const wrapper = mount(HomeViews);

    expect(wrapper.text()).toBe("Welcome to the Home Page");
  });
});
