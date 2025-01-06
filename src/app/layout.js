import "./globals.css";
// fontawesome.js
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevent automatic CSS addition by Font
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome styles

export const metadata = {
  title: "My App",
  description: "My App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
