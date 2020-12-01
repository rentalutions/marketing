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
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`.replace(
                /(\r\n|\n|\r)/gm,
                ""
              ),
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
          h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
          (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
          })(window,document.documentElement,'async-hide','dataLayer',4000,
          {'${GTM_CONTAINER_ID}':true});`.replace(/(\r\n|\n|\r)/gm, ""),
            }}
          />
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
