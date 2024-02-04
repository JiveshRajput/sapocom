import { Provider } from "react-redux";
import Layout from "../layouts/Layout";
import store from "../store/store";
import Script from "next/script";
import "../styles/globals.css";
import "../styles/fonts.css";
import { useRouter } from "next/router";
import AdminLayout from "@/layouts/admin/AdminLayout";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const adminLayout =
    router.pathname.startsWith("/admin") && router.pathname != "/admin";
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-71N5J1ZFMK`}
      />

      <Script strategy="lazyOnload" id="google_tag">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-71N5J1ZFMK', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Provider store={store}>
        {adminLayout ? (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Provider>
    </>
  );
}
