
import Image from "next/image";

import styles from "@/styles/components/LastBanner.module.scss";

export default function LastBanner({openModal}) {
    return (
        <section className={styles.last}>
            <div className="grid-x grid-container grid-paddind-x">
                <div className="cell small-16 medium-8">
                    <div className={styles.content}>
                        <div className={styles.group}>
                            <Image width={123} height={47} src={"/img/banners/equipe_janrose.png"} alt="Jan Rose"/> <span>É muita vantagem!</span>
                        </div>

                        <h2>Você ganha dinheiro por compartilhar o que você gosta com seus familiares e amigos</h2>
                        <p>A Jan Rosê te bonifica toda vez que você indica um amigo ou familiar para comprar e revender produtos. Indique uma pessoa para vender perfume e <b>ganhe R$ 350 na hora.</b></p>
                        <button onClick={openModal} className={styles.btn}>
                            Eu quero ser um consultor
                        </button>
                    </div>
                </div>
                <div className={styles.image}/>
            </div>
        </section>
    )
}