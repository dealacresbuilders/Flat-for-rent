import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { BlogProvider } from "@/contextapi/BlogContext";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata (Proper SEO Pattern)
export const metadata = {
  title: "Flat for Rent in Faridabad | Affordable Apartments & Flats on Rent",
  description:
    "Find verified flats for rent in Faridabad. Explore affordable 1 BHK, 2 BHK & 3 BHK apartments on rent in Sector 82, 85, 86, 88, Neharpar & more. No brokerage. Book free site visit today.",
  keywords: [
    "flat for rent in Faridabad", "apartment for rent Faridabad", "flats on rent Faridabad", "1 BHK flat for rent Faridabad", "2 BHK flat for rent Faridabad", "3 BHK flat for rent Faridabad", "furnished flat for rent Faridabad", "affordable flat on rent Faridabad", "no brokerage flat rent Faridabad", "flat rent Neharpar Faridabad", "monthly rent flat Faridabad", "flat for rent Sector 86 Faridabad"
  ],
  alternates: {
    canonical: "https://www.flatforrentinfaridabad.com/",
  },
  // verification: {
  //   google: "nzpP1DqYCAb67c2-6EMUKICYpcL4JHBsBPPSTHE66lE",
  // },
   icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      {/* <head>
       
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MCTKVCSX');
            `,
          }}
        />

        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0GWEZP3X21"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0GWEZP3X21');
          `}
        </Script>
      </head> */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ GTM NoScript */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCTKVCSX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}

        {/* ✅ Providers */}
        <PropertyProvider>
          <BlogProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
          </BlogProvider>
        </PropertyProvider>
      </body>
    </html>
  );
}