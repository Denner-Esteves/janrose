import Link from "next/link";

import { consulting } from "@/data/consulting";

import styles from "@/styles/components/Video.module.scss";

export default function Video({openModal}) {
    return (
        <section className={styles.video}>
            <div className="grid-x grid-container grid-padding-x">
                <div className="cell text-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VSvMcPoj7_c?si=AB9PtWqrT6s8mBC7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <button onClick={openModal} className="btnSimple full">
                        Eu quero ser um consultor
                    </button>
                </div>
            </div>

            <div className="grid-x grid-container grid-padding-x">
                <div className="cell">
                    <h2><b>Ser um Consultor Premium Jan Rosê</b> é para você que...</h2>
                </div>

                {consulting.map((data, i ) => 
                    <div className="cell small-16 medium-33" key={`content_${i}`}>
                        <div className={styles.content}>
                            <strong>{data.number}</strong>
                            <p>{data.content}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}