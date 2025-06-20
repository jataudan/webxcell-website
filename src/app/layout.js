// app/layout.js

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
        {/* Fonts and Favicon */}
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

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BXCCJV6N44"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BXCCJV6N44');
            `,
          }}
        />

        {/* HelpScout Beacon */}
        <Script
          id="helpscout-beacon-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n){
                function a(){
                  var e=t.getElementsByTagName("script")[0],
                      n=t.createElement("script");
                  n.type="text/javascript",
                  n.async=!0,
                  n.src="https://beacon-v2.helpscout.net",
                  e.parentNode.insertBefore(n,e)
                }
                if(e.Beacon=n=function(t,n,a){
                  e.Beacon.readyQueue.push({method:t,options:n,data:a})
                },
                n.readyQueue=[],
                "complete"===t.readyState)
                  return a();
                e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)
              }(window,document,window.Beacon||function(){});
            `,
          }}
        />
        <Script
          id="helpscout-beacon-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.Beacon('init', '8e008e76-12be-44d7-a367-55b01efa2d78');
            `,
          }}
        />

        {/* OMAPI Script */}
        <Script
          id="omapi-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,u,ac){
                var s=d.createElement('script');
                s.type='text/javascript';
                s.src='https://a.omappapi.com/app/js/api.min.js';
                s.async=true;
                s.dataset.user=u;
                s.dataset.account=ac;
                d.getElementsByTagName('head')[0].appendChild(s);
              })(document,366531,387306);
            `,
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
