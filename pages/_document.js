/* eslint-disable react/no-danger */
import React from "react"
import { default as NextDoc, Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class Document extends NextDoc {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await NextDoc.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID
    const SEGMENT_KEY = process.env.NEXT_PUBLIC_SEGMENT_KEY
    const AVAIL_BASE_URL =
      process.env.NEXT_PUBLIC_AVAIL_BASE_URL || "https://www.avail.co"
    return (
      <Html lang="en-US">
        <Head>
          {GTM_CONTAINER_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`.replace(
                  /(\r\n|\n|\r|\t)/gm,
                  ""
                ),
              }}
            />
          )}
          {GTM_CONTAINER_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
          h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
          (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
          })(window,document.documentElement,'async-hide','dataLayer',4000,
          {'${GTM_CONTAINER_ID}':true});`.replace(/(\r\n|\n|\r|\t)/gm, ""),
              }}
            />
          )}
          {SEGMENT_KEY && (
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)
          if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");
          else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview",
          "identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware",
          "addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=
          function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);
          return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=
          analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");
          n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";
          var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};
          analytics.SNIPPET_VERSION="4.1.0";analytics.load("${SEGMENT_KEY}");analytics.page();}}();`.replace(
                  /(\r\n|\n|\r|\t)/gm,
                  ""
                ),
              }}
            />
          )}
          <script src={`${AVAIL_BASE_URL}/api/v2/public/analytics/noop.js`} />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
