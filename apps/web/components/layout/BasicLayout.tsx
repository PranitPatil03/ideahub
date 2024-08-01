import Footer from "../../app/(landing)/home/Footer";
import { Header } from "../../app/(landing)/home/Header";

export function BasicLayout(props: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="bg-white max-w-7xl w-full">
        <Header />
        <main className="isolate">{props.children}</main>
        <Footer />
      </div>
    </div>
  );
}
