import { describe, expect, it } from "vitest";
import {
  approvedContactChannels,
  cvDocument,
  cvPublicPath,
} from "../../app/data/contact";
import { profile } from "../../app/data/profile";
import { isPublishableContactChannel } from "../../app/data/types";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("public contact channels", () => {
  it("publishes only the three explicitly approved Contact destinations", () => {
    expect(profile.contactChannels).toEqual([]);
    expect(approvedContactChannels).toEqual([
      {
        type: "email",
        value: "kahylsalhi@gmail.com",
        approved: true,
      },
      {
        type: "github",
        value: "https://github.com/KahylSalhi",
        approved: true,
      },
      {
        type: "linkedin",
        value: "https://www.linkedin.com/in/kahyl-salhi-8b0110388/",
        approved: true,
      },
    ]);
    expect(approvedContactChannels.every(isPublishableContactChannel)).toBe(
      true,
    );
    expect(
      isPublishableContactChannel({
        type: "email",
        value: "candidate@example.test",
        approved: false,
      }),
    ).toBe(false);
  });

  it("publishes the present, approved CV at the requested path", () => {
    expect(cvPublicPath).toBe("/documents/CV_Kahyl_SALHI.pdf");
    expect(cvDocument).toEqual({
      publicPath: cvPublicPath,
      approved: true,
      filePresent: true,
    });
    const pdfPath = resolve(
      process.cwd(),
      "public",
      cvDocument.publicPath.replace(/^\//, ""),
    );
    expect(existsSync(pdfPath)).toBe(true);
    expect(readFileSync(pdfPath).subarray(0, 5).toString()).toBe("%PDF-");
  });
});
