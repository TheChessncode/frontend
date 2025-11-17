import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PreLaunch from "@/components/pre-launch/PreLaunch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chessncode.com';

export const metadata: Metadata = {
  title: {
    default: "Chessncode",
    template: "%s | Chessncode"
  },
  description: "Chessncode combines chess strategy with coding education. Learn digital literacy, programming fundamentals, and chess tactics through interactive lessons and exercises.",
  keywords: [
    "chess learning", "coding education", "digital literacy", 
    "programming for beginners", "chess strategy", "coding tutorials",
    "web development", "chess tactics", "programming courses",
    "chess and coding", "STEM education", "learn to code"
  ].join(", "),
  authors: [{ name: "Chessncode Team" }],
  creator: "Chessncode",
  publisher: "Chessncode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Chessncode",
    title: "Chessncode",
    description: "Master programming and digital literacy through chess strategy. Interactive coding lessons combined with chess tactics for effective learning.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Chessncode - Learn Programming Through Chess Strategy',
        type: 'image/jpeg',
        secureUrl: `${baseUrl}/og-image.jpg`
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chessncode",
    description: "Master programming and digital literacy through chess strategy. Interactive coding lessons combined with chess tactics.",
    creator: "@chessncode",
    site: "@chessncode",
    images: [`${baseUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
  category: "education",
  classification: "Educational Technology",
  icons: {
    icon: [
      { url: `/favicon.svg`, type: 'image/x-icon' },
      { url: `${baseUrl}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${baseUrl}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: `${baseUrl}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: `${baseUrl}/safari-pinned-tab.svg`,
        color: '#000000',
      },
    ],
  },
  manifest: `${baseUrl}/manifest.json`,
  other: {
    'msapplication-TileColor': '#000000',
    'msapplication-config': `${baseUrl}/browserconfig.xml`,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning itemScope itemType="https://schema.org/WebSite">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Preload critical images */}
        <link rel="preload" href={`${baseUrl}/og-image.jpg`} as="image" />
        <link rel="preload" href={`${baseUrl}/logo.png`} as="image" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Chessncode",
              "description": "Chessncode combines chess strategy with coding education to teach digital literacy and programming skills.",
              "url": baseUrl,
              "logo": `${baseUrl}/logo.png`,
              "image": `${baseUrl}/og-image.jpg`,
              "sameAs": [
                "https://twitter.com/chessncode",
                "https://linkedin.com/company/chessncode",
                "https://github.com/chessncode"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@chessncode.com",
                "contactType": "customer service"
              },
              "areaServed": "Worldwide",
              "knowsAbout": [
                "Chess Strategy",
                "Programming Education",
                "Digital Literacy",
                "Web Development",
                "Coding Tutorials"
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Chessncode",
              "description": "Learn programming and digital literacy through chess strategy",
              "url": baseUrl,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${baseUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* {children} */}
        <PreLaunch/>
      </body>
    </html>
  );
}