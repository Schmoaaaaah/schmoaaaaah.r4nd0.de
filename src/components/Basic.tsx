//import Jumbotron from 'react-bootstrap/Jumbotron';
import Head from 'next/head';
import {
    Layout,
    LayoutHeader,
    LayoutContainer,
    LayoutFooter,
} from '@paljs/ui/Layout';

import HeadNav from './Navbar';
import Footer from './Footer'
import {Props} from "react-select";

const Basic = (/*props: Props*/) => (
    <div>
        <Head>
            <style data-merge-styles="true"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="apple-touch-icon" sizes="57x57" href="/favico/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/favico/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/favico/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/favico/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/favico/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/favico/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/favico/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/favico/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favico/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="/favico/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favico/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/favico/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favico/favicon-16x16.png"/>
            <link rel="manifest" href="/favico/manifest.json"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="/favico/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#ffffff"/>
            <title>Schmoaaaaah</title>
        </Head>
        <Layout>
            <LayoutHeader>
                <HeadNav/>
            </LayoutHeader>

        </Layout>



    </div>
);

export default Basic;
/*{props}

<Layout>
<LayoutHeader>
<HeadNav/>
</LayoutHeader>
<LayoutContainer>

</LayoutContainer>
<LayoutFooter>
<Footer/>
</LayoutFooter>
</Layout>
*/