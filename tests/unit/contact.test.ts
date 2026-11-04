import { describe, expect, it } from "vitest";
import { profile } from "../../app/data/profile";
import { isPublishableContactChannel } from "../../app/data/types";

describe("public contact channels", () => {
  it("keeps destinations absent until individually approved", () => {
    expect(profile.contactChannels).toEqual([]);
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
        value: "candidate@example.test",
        approved: true,
      }),
    ).toBe(true);
  });
});
