import Link from "next/link";

import LogoFooter from "@/../public/img/logo_footer_janrose.svg";

import styles from "@/styles/components/Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
            <div className="grid-x grid-container grid-padding-x align-middle">
                <div className="cell small-16 medium-16 large-4">
                    <Link href={"/"}>
                        <LogoFooter />
                    </Link>
                </div>
                <div className="cell small-16 medium-16 large-8">
                    <p>A Jan Rosê é uma empresa multinacional de vendas de produtos cosméticos, perfumaria e saúde & bem-estar.</p>
                </div>
                <div className="cell small-16 medium-16 large-4">
                    <ul>
                        <li><Link href={"https://www.instagram.com/janrose.brasil/"} target='_blank'><i className="fa-brands fa-instagram"></i></Link></li>
                        <li><Link href={"https://www.facebook.com/janrosestore"} target='_blank'><i className="fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link href={"https://www.youtube.com/@janrose.global"} target='_blank'><i className="fa-brands fa-youtube"></i></Link></li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    )
}