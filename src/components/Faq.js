import { useState } from 'react';
import cx from 'classnames';

import { faq } from '@/data/faquest';

import styles from '@/styles/components/Faq.module.scss';
import Link from 'next/link';

export default function Faq({openModal}) {

    const [activeQuestion, setActiveQuestion] = useState(null);

    const openQuestion = (index) => {
        if (activeQuestion === index) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(index);
        }
    };

    return (
        <section className={styles.doubts} id="duvidas">
            <div className="grid-x grid-container grid-padding-x">
                <div className="cell text-left">
                    <h2 className="title">Para tirar suas dúvidas</h2>
                </div>
                <div className="small-16 large-16">
                    <ol className={styles.questions}> {faq.map((data, i) =>
                        <li className={cx(activeQuestion === i && styles.active)} key={`faq_${i}`}>
                            <h3 className={styles.question} onClick={() => openQuestion(i)}>
                                <span><b>{data.number}</b>{data.question}</span>
                                <i className={cx('fa-solid', (activeQuestion === i) ? 'fa-minus-circle' : 'fa-plus-circle')}></i>
                            </h3>
                            <div className={styles.response}>
                                <p>
                                    {data.answer} 
                                    {data.link ? (
                                        <Link href={data.link}>{data.click}</Link>
                                    ) : (
                                        data.click
                                    )}
                                </p>
                            </div>
                        </li>
                        )}
                    </ol>
                </div>

                <div className="cell text-center">
                    <h4>Pronto para começar a <b>mudar sua vida</b>?</h4>
                    <button onClick={openModal} className='btnSimple full'>
                        Falar agora com um especialista
                    </button>
                </div>
            </div>
        </section>
    );
}
