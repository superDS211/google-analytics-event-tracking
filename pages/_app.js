import "../styles/globals.css";
import Script from "next/script";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }) {
  // ReactGA.initialize("UA-212738948-5");
  // test1 stream  id is using of property of uswa
  // ReactGA.initialize("G-0YC401WZQN");
  return (
    <>
     
      {/* test1   stream id is using  uswa */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-0YC401WZQN"
      ></Script>
      <Script id="google-ana">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

        gtag('config', 'G-0YC401WZQN',
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
