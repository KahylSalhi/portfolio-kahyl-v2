import { describe, expect, it } from "vitest";
import {
  isProjectStatus,
  isPublishableContactChannel,
  isSafeProjectSlug,
} from "../../app/data/types";

describe("portfolio content guards", () => {
  it("accepts stable URL-safe project slugs only", () => {
    expect(isSafeProjectSlug("cisco-rip")).toBe(true);
    expect(isSafeProjectSlug("../contact")).toBe(false);
    expect(isSafeProjectSlug("Project Name")).toBe(false);
  });

  it("recognizes only declared project states", () => {
    expect(isProjectStatus("simulation")).toBe(true);
    expect(isProjectStatus("deployed")).toBe(false);
  });

  it("publishes a contact channel only when its destination is approved", () => {
    expect(
      isPublishableContactChannel({
        type: "email",
        value: "candidate@example.test",
        approved: true,
      }),
    ).toBe(true);
    expect(
      isPublishableContactChannel({
        type: "email",
        value: "candidate@example.test",
        approved: false,
      }),
    ).toBe(false);
    expect(
      isPublishableContactChannel({
        type: "email",
        value: " ",
        approved: true,
      }),
    ).toBe(false);
  });
});
