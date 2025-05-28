import "@mantine/core/styles.css";
import {
  AppShell,
  AppShellFooter,
  AppShellMain,
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";
import Navbar from "@/components/Navbar";
import { fonts } from "./fonts";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Property Hunt | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

const theme = createTheme({
  fontFamily: "Rubik, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: { fontFamily: "Rubik, sans-serif" },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps} className={fonts}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell>
            <Navbar />
            <AppShellMain>{children}</AppShellMain>

            <Footer />
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
