import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={metadataBase:new URL("https://familymapbuilder.com"),title:{default:"FamilyMapBuilder | Free Online Family Tree Builder",template:"%s | FamilyMapBuilder"},description:"Create and visualize your family tree online with an easy family map builder.",alternates:{canonical:"/"},openGraph:{type:"website",siteName:"FamilyMapBuilder"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
