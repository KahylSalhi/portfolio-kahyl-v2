import type { ContactChannel, CVDocument } from "./types";

export const approvedContactChannels: ContactChannel[] = [
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
];

export const cvPublicPath = "/documents/CV_Kahyl_SALHI.pdf";
export const cvDocument: CVDocument = {
  publicPath: cvPublicPath,
  approved: true,
  filePresent: true,
};
