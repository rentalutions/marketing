import React from "react"

const HeaderScripts = () => {
  const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID
  if (!GTM_CONTAINER_ID) return null
  return (
    <React.Fragment>
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
      <style
        dangerouslySetInnerHTML={{
          __html: `.async-hide { opacity: 0 !important}`,
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
    </React.Fragment>
  )
}

export default HeaderScripts
