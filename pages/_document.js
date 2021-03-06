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
    const GTM_AUTH = process.env.NEXT_PUBLIC_GTM_AUTH
    const GTM_PREVIEW = process.env.NEXT_PUBLIC_GTM_PREVIEW
    const GTM_PREVIEW_PARAMS =
      GTM_AUTH && GTM_PREVIEW
        ? `&gtm_auth=${GTM_AUTH}&gtm_preview=${GTM_PREVIEW}&gtm_cookies_win=x`
        : ""
    const SEGMENT_KEY = process.env.NEXT_PUBLIC_SEGMENT_KEY
    return (
      <Html lang="en-US">
        <Head>
          {GTM_CONTAINER_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl+'${GTM_PREVIEW_PARAMS}';f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`.replace(
                  /(\r\n|\n|\r|\t)/gm,
                  ""
                ),
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
          n.type="text/javascript";n.defer=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";
          var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};
          analytics.SNIPPET_VERSION="4.1.0";analytics.load("${SEGMENT_KEY}");analytics.page();}}();`.replace(
                  /(\r\n|\n|\r|\t)/gm,
                  ""
                ),
              }}
            />
          )}
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
