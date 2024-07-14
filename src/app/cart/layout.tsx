import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";
import Loading from "../loading";


export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
        {children}
      <Footer />
    </Suspense>
  );
}
