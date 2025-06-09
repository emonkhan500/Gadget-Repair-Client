
import ServiceCard from "@/components/ServiceCard";
import Banner from "../components/Banner";
import styles from "./page.module.css";
import WeFix from "@/components/WeFix";

export default function Home() {
  return (
    
    <main className="  h-screen     sm:pt-20 ">
    
    
    
    <Banner></Banner>
    <ServiceCard></ServiceCard>
    <WeFix></WeFix>
  
   </main>
  );
}
