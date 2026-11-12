import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "Natascha Bjerning CV",
  description: "Dette er mit CV lavet i Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      
      <body>
        <Header/>
        {children}
      </body>
    
    </html>
  );
}
