import "@mantine/core/styles.css";
import "../styles/global.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider theme={theme}>
			<Head>
				<title>Movie Search App</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
				<link
					rel="shortcut icon"
					href="/favicon.ico"
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MantineProvider>
	);
}
