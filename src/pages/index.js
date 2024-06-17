import Head from "next/head";
import { useState } from "react";

import MainBanner from "@/components/MainBanner";
import Video from "@/components/Video";
import BlackBanner from "@/components/BlackBanner";
import Timer from "@/components/Timer";
import ProductsBanner from "@/components/ProductsBanner";
import Depoiments from "@/components/Depoiments";
import LastBanner from "@/components/LastBanner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import CustomModal from "@/components/Modal";

export default function Home() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
      setModalIsOpen(true);
  };

  const closeModal = () => {
      setModalIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Jan Rose - Multiplique Sua Renda com Lucros de 100% nas Nossas Oportunidades Exclusivas</title>
        <meta name="description" content="Conheça as oportunidades de multiplicação de renda com os perfumes exclusivos da Jan Rose. Com nossa linha de produtos de alta qualidade, você pode alcançar 100% de lucro. Junte-se a nós e transforme seu potencial financeiro no ramo da perfumaria hoje mesmo!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <MainBanner openModal={openModal}/>
     
      <Video openModal={openModal} />

      <BlackBanner openModal={openModal} />

      <Timer />

      <ProductsBanner />

      <Depoiments />

      <LastBanner openModal={openModal}/>
      
      <Faq openModal={openModal}/>

      <Footer />

      <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </>
  );
}
