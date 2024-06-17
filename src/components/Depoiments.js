
import Slider from "react-slick";
import { useState } from "react";

import { settingsDefault } from "@/data/slick";
import { depoiments } from "@/data/depoiments";

import Image from "next/image";
import cx from "classnames";

import Quotation from "@/../public/img/quotation.svg";

import WidthBanner from "@/components/WidthBanner";
import CustomModal from "@/components/Modal";

import styles from "@/styles/components/Depoiments.module.scss";

export default function Depoiments() {

 const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
      setModalIsOpen(true);
  };

  const closeModal = () => {
      setModalIsOpen(false);
  };

    return (
        <section className={styles.depoiments}>
            <div>
                <WidthBanner openModal={openModal}/>
                <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </div>
            
            <div className={cx("grid-x grid-container grid-padding-x", styles.grid)}>
                <div className="cell text-center">
                    <h2>Faça como <b>centenas de consultores no mundo</b> todo que já alcançaram níveis financeiros surpreendentes.</h2>
                </div>

                <div className={cx("cell", styles.cell)}>
                <Slider {...settingsDefault}>
                    {depoiments.map((data, i) => (
                        <div className={styles.item} key={`depoiments_${i}`}>
                            <div className={styles.box}>
                                <div className={styles.photo}>
                                   <Quotation />
                                </div>

                                <p>{data.content}</p>

                                <div className={styles.name}>
                                    <Image width={data.width} height={data.height} src={data.source} alt={data.name} />
                                    <strong>
                                        {data.name}
                                        <span>{data.company}</span>
                                    </strong>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
        </section>
    )
}