import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <meta property="og:site_name" content="Jan Rose" />
                <meta property="og:description" content="Conheça as oportunidades de multiplicação de renda com os perfumes exclusivos da Jan Rose. Com nossa linha de produtos de alta qualidade, você pode alcançar 100% de lucro. Junte-se a nós e transforme seu potencial financeiro no ramo da perfumaria hoje mesmo!" />
                {/* <meta property="og:image" content="https://www.numecompany.com/img/comp.png" />
                <meta property="og:url" content="https://www.numecompany.com/" /> */}

                <link href="https://cdn.noot.com.br" rel="preconnect" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..900&display=swap" rel="stylesheet" />
                <link href="https://cdn.noot.com.br/fontawesome/6.5.2/css/fontawesome.min.css" rel="stylesheet" />
                <link href="https://cdn.noot.com.br/slick/1.x/css/slick.min.css" rel="stylesheet" />
                <link href="https://cdn.noot.com.br/foundation/6.x/css/foundation-just-grid.min.css" rel="stylesheet" />

                <link rel="icon" type="image/png" href="/img/favicon/16x16.png" sizes="16x16" />
                <link rel="icon" type="image/png" href="/img/favicon/32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/img/favicon/48x48.png" sizes="48x48" />
                <link rel="icon" type="image/png" href="/img/favicon/64x64.png" sizes="64x64" />
                <link rel="icon" type="image/png" href="/img/favicon/96x96.png" sizes="96x96" />
                <link rel="icon" type="image/png" href="/img/favicon/128x128.png" sizes="128x128" />
                <link rel="icon" type="image/png" href="/img/favicon/144x144.png" sizes="144x144" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta name="HandheldFriendly" content="True" />
                <meta httpEquiv="cleartype" content="on" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}