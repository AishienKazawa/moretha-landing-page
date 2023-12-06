import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "Moretha Construction",
  description: "Landing page for a construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="lg:text-[14px]">
        {/* navbar component */}
        <Navbar />
        {children}
        {/* footer component */}
        <Footer />
      </body>
    </html>
  );
}
