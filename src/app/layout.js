import "./globals.css";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import { AppContextProvider } from "@/context/appContext";
import RootStyles from "./RootStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script"; 

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
        <link rel="icon" href="/favicon.png" />

        <Script
          id="omapi-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(d,u,ac){var s=d.createElement('script');s.type='text/javascript';s.src='https://a.omappapi.com/app/js/api.min.js';s.async=true;s.dataset.user=u;s.dataset.account=ac;d.getElementsByTagName('head')[0].appendChild(s);})(document,366531,387306);`,
          }}
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
