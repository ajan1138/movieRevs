import Header from "./_components/Header";

import "@/app/_styles/global.css";

export const metadata = {
  title: {
    template: "%s | Movie Revs",
    default: "Welcome | Movie Revs",
  },
  description: "Web Application made to make your choice of movie easier.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-blue-950">{children}</body>
    </html>
  );
}
