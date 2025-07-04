export const dynamic= "force-dynamic"
import ServiceCard from "@/components/ServiceCard";
import Banner from "../components/Banner";
import styles from "./page.module.css";
import WeFix from "@/components/WeFix";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    
    <main className="  sm:pt-20 ">
    
    
    
    <Banner></Banner>
    <ServiceCard></ServiceCard>
    <WeFix></WeFix>
    <Partners></Partners>
    <Faq></Faq>
  
   </main>
  );
}
