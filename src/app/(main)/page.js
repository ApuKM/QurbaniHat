import Banner from "@/components/homepage/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div id="main" className="">
        <Banner />
      </div>
      <Footer />
    </div>
  );
}
