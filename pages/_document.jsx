import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className='scroll-smooth'
      prefix='https://ogp.me/ns/website#'
      lang='en'>
      <Head>
        <meta name='title' content='tanner • cto & co-founder' />
        <meta name='description' content='CTO, Co-Founder, Stay Learning' />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://tannerhallman.com/' />
        <meta property='og:title' content='tanner • cto & co-founder' />
        <meta
          property='og:description'
          content='CTO, Co-Founder, Stay Learning'
        />
        <meta property='og:image' content='/hello-im-tanner.png' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://tannerhallman.com' />
        <meta property='twitter:title' content='tanner • cto & co-founder' />
        <meta
          property='twitter:description'
          content='CTO, Co-Founder, Stay Learning'
        />
        <meta property='twitter:image' content='/hello-im-tanner.png' />

        {/* whatsapp */}
        <meta property='og:site_name' content='tanner • cto & co-founder' />
        <meta property='og:title' content='tanner • cto & co-founder' />
        <meta
          property='og:description'
          content='CTO, Co-Founder, Stay Learning'
        />
        <meta property='og:type' content='website' />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: light)'
          content='#fff'
        />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: dark)'
          content='#000'
        />
        <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />

        {/* canonical links */}
        <link rel='canonical' href='https://tannerhallman.com/' />
        <link
          rel='search'
          href='/opensearch.xml'
          type='application/opensearchdescription+xml'
          title='tanner • cto & co-founder'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Quicksand:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='back font-out mx-auto bg-[#fffdfd] dark:bg-[#242424] overflow-x-hidden lg:transform-gpu '>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
