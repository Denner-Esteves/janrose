import { grid } from "@/data/grid";

import Image from "next/image";

import cx from "classnames";

import styles from "@/styles/components/BlackBanner.module.scss";

export default function BlackBanner({openModal}) {

    return (
        <section className={styles.black}>
            <div className="grid-x grid-container grid-padding-x">
                <div className="cell">
                    <h2>A Jan Rosê é reconhecida mundialmente por uma perfumaria de <b>alta fixação e de fácil comercialização.</b></h2>
                </div>
            </div>

            {grid.map((data, i) =>
                <div className={styles[data.styleType]} key={`container_${i}`}>
                    <div className={cx("grid-x grid-container grid-padding-x align-middle", styles.grid)}>
                        <div className="cell small-16 medium-8 text-center">
                            <Image width={data.width} height={data.height} src={data.source} alt={data.title} />
                        </div>

                        <div className="cell small-16 medium-8">
                            <div className={styles.content}>
                                <h3>{data.title}</h3>
                                <p>{data.content}</p>
                                <button onClick={openModal} className={data.classbtn}>
                                    Eu quero ser um consultor
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}