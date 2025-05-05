import "./globals.css";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import { AppContextProvider } from "@/context/appContext";
import RootStyles from "./RootStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppContextProvider>
          <ToastContainer />
          <Header />
          <RootStyles />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
