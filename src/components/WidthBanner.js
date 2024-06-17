import LogoProfissional from "@/../public/img/logo_profissional.svg"

import styles from "@/styles/components/WidthBanner.module.scss";

export default function WidthBanner({openModal}) {
    return (
        <div className={styles.width}>
            <div className={styles.in}>
                <div className="grid-x grid-container grid-padding-x">
                    <div className="cell text-center">
                        <h2>Chegou a hora de iniciar seu negócio lucrativo.</h2>
                        <strong>10x de R$ 159,90 reais</strong>
                        <span>ou R$ 1.599,00 reais à vista </span>

                        <button onClick={openModal} className="btnSimple full">
                            Quero aproveitar a chance
                        </button>
                    </div>
                </div>

                <LogoProfissional />
            </div>
        </div>
    )
}