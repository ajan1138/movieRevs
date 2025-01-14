import { EmPassProvider } from "./_contexts/emailAndPasswordContext";
import { Toaster } from "react-hot-toast";

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
      <body className="flex flex-col bg-gray-900">
        <EmPassProvider>{children}</EmPassProvider>
        <Toaster position="top-center" containerStyle={{ marginTop: "85px" }} />
      </body>
    </html>
  );
}
