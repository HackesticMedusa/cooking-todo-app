import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "ChefSync",
  description: "Personal cooking planner and todo app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
