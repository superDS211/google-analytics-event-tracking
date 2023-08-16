import "../styles/globals.css";
import Script from "next/script";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      ></Script>
      <Script id="google-ana">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

        gtag('config', 'G-XXXXXXXXXX',
        {
           page_path: window.location.pathname,
      });
  `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
