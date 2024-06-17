import Logo from "@/../public/img/logo_janrose.svg";
import Link from "next/link";
import cx from "classnames";

import styles from "@/styles/components/MainBanner.module.scss";

export default function MainBanner({openModal, changeClass}) {
    return (
        <section className={cx(styles.main, styles[changeClass])}>
            <div className="grid-x grid-container grid-padding-x">
                <div className="cell small-16 medium-11">
                    <div className={styles.content}>
                        <Link href={"/"}>
                            <Logo />
                        </Link>
                        <h1 className="title">Já pensou em ter <b>100% de lucro</b> com uma oportunidade de multiplicação de renda?</h1>
                        <p>Na Jan Rosê, é assim. Além de ter 100% de lucro nas suas vendas, você multiplica seus ganhos através de um sistema validado por centenas de representantes mundialmente.</p>
                        <button onClick={openModal} className="btnSimple">
                            Seja um profissional
                        </button>
                    </div>
                </div>

                <div className={styles.image}></div>
            </div>
        </section>
    )
}