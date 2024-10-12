import { M_PLUS_1p } from "next/font/google";
import "./globals.css";
import TopMenu from "@/app/components/TopMenu";
import SideMenu from "@/app/components/SideMenu";

const m_plus_1p = M_PLUS_1p({
  subsets: ["latin"],
  // midium bold
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "ORIGIN.Doc",
  description: "Next.jsで制作したWEBサイトのアプリケーション",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={m_plus_1p.className}>
        <main className="flex flex-row">
          <SideMenu />
          <section className="pl-[300px] max-md:pl-0 max-lg:pl-[146px] w-full min-h-screen overflow-hidden">
            <TopMenu />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
