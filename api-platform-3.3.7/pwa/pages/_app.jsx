import "../styles/globals.css";
import Layout from "../components/common/Layout";
function MyApp({ Component, pageProps }) {
    return (
        <Layout dehydratedState={pageProps.dehydratedState}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;