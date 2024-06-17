
import Image from "next/image";

import cx from "classnames";

import styles from "@/styles/components/ProductsBanner.module.scss";

export default function ProductsBanner() {
    return (
        <section className={styles.products}>
            <div className={cx("grid-x grid-container grid-padding-x", styles.grid)}>
                <div className="cell text-center">
                    <div className={styles.content}>
                        <h2>Invista pouco e lucre muito! Compre 10 perfumes:</h2>
                        <span>por 10x R$ 159,90 e leve R$2.647,20 em produtos</span>

                        <div className={styles.btns}>
                            <span><i className="fa-regular fa-circle-check"></i>1 Maleta profissional</span>
                            <span><i className="fa-regular fa-circle-check"></i>18 Perfumes de 15ml</span>
                        </div>
                    </div>
                </div>

                <div className={cx("cell text-center", styles.cell)}>
                    <Image className={styles.imageLarge} width={1097} height={448} src="/img/banners/produtos_janrose.png" alt="Produtos" />
                    <Image className={styles.imageSmall} width={340} height={258} src="/img/banners/produtos_janrose_small.png" alt="Produtos" />
                </div>
            </div>
        </section>
    )
}