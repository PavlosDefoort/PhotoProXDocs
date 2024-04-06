import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        style={{
          width: "2.5rem",
          height: "2.5rem",
          padding: "0.5rem",
          color: "rgb(99,102,241)",
        }}
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span
        style={{
          fontSize: "1.5rem",
        }}
      >
        PhotoProX-Docs
      </span>
    </div>
  ),
  project: {
    link: "https://github.com/PavlosDefoort/PhotoProXDocs",
  },

  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/PavlosDefoort/PhotoProXDocs",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
