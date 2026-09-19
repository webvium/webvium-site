import type { ReactNode } from "react";

type EmailLayoutProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  ctaLabel?: string;
  ctaUrl?: string;
};

/**
 * Renders an email layout with an eyebrow, title, and optional CTA button.
 *
 * @param eyebrow The eyebrow text to display.
 * @param title The title text to display.
 * @param children The content to display within the layout.
 * @param ctaLabel The label for the CTA button, if any.
 * @param ctaUrl The URL for the CTA button, if any.
 * @returns The rendered email layout.
 */
export default function EmailLayout({
  eyebrow,
  title,
  children,
  ctaLabel,
  ctaUrl,
}: EmailLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="x-apple-disable-message-reformatting" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f7f8fa",
          color: "#1b1d21",
          fontFamily: "Maven Pro, Arial, sans-serif",
        }}
      >
        <table
          role="presentation"
          width="100%"
          cellSpacing="0"
          cellPadding="0"
          border={0}
          style={{ backgroundColor: "#f7f8fa" }}
        >
          <tbody>
            <tr>
              <td align="center" style={{ padding: "40px 20px" }}>
                <table
                  role="presentation"
                  width="100%"
                  cellSpacing="0"
                  cellPadding="0"
                  border={0}
                  style={{
                    maxWidth: "600px",
                    border: "1px solid #e4e7ec",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: "28px 32px",
                          borderBottom: "1px solid #e4e7ec",
                          fontFamily: "Source Code Pro, Arial, sans-serif",
                          fontSize: "18px",
                          fontWeight: 700,
                          letterSpacing: "-0.4px",
                          color: "#1b1d21",
                        }}
                      >
                        Webvium
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "52px 32px 44px" }}>
                        <p
                          style={{
                            margin: "0 0 20px",
                            color: "#1a73e8",
                            fontSize: "13px",
                            fontWeight: 700,
                            letterSpacing: "1.6px",
                            textTransform: "uppercase",
                          }}
                        >
                          {eyebrow}
                        </p>
                        <h1
                          style={{
                            margin: 0,
                            color: "#1b1d21",
                            fontFamily: "Source Code Pro, Arial, sans-serif",
                            fontSize: "34px",
                            fontWeight: 600,
                            letterSpacing: "-1px",
                            lineHeight: 1.2,
                          }}
                        >
                          {title}
                        </h1>
                        <div
                          style={{
                            marginTop: "24px",
                            color: "#5b616e",
                            fontSize: "16px",
                            lineHeight: 1.7,
                          }}
                        >
                          {children}
                        </div>
                        {ctaLabel && ctaUrl ? (
                          <table
                            role="presentation"
                            cellSpacing="0"
                            cellPadding="0"
                            border={0}
                            style={{ marginTop: "32px" }}
                          >
                            <tbody>
                              <tr>
                                <td style={{ backgroundColor: "#1a73e8" }}>
                                  <a
                                    href={ctaUrl}
                                    style={{
                                      display: "inline-block",
                                      padding: "13px 20px",
                                      color: "#ffffff",
                                      fontFamily:
                                        "Maven Pro, Arial, sans-serif",
                                      fontSize: "14px",
                                      fontWeight: 700,
                                      textDecoration: "none",
                                    }}
                                  >
                                    {ctaLabel}
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        ) : null}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "22px 32px",
                          borderTop: "1px solid #e4e7ec",
                          color: "#5b616e",
                          fontSize: "12px",
                          lineHeight: 1.6,
                        }}
                      >
                        Webvium · Lightweight software built for speed, privacy
                        and simplicity.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
