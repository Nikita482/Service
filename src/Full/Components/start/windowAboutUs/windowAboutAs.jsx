import styles from './windowAboutUs.module.css'
import { useState } from 'react'


export default function WindowAboutUs(){

    const [state, setState] = useState('state1')

    return(
        <>
            <div className={styles.wrapperMax}>
                <h1 className={styles.wrapperMarginTop}>О нас</h1>
                <p className={styles.font2}>Добро пожаловать на ProService! Наша платформа помогает покупателям и исполнителям услуг найти друг друга. Мы делаем поиск и предоставление услуг простыми и удобными.</p>

                <h2 className={styles.wrapperMargin1}>Как это работает?</h2>
                <ul>
                    <li className={styles.wrapperMargin2}><strong>Для покупателей:</strong>
                        <ul>
                            <li className={styles.font1}>Просматривайте профили.</li>
                            <li className={styles.font1}>Сравнивайте предложения.</li>
                            <li className={styles.font1}>Связывайтесь напрямую с нами.</li>
                        </ul>
                    </li>
                    <li className={styles.wrapperMargin2}><strong>Для исполнителей:</strong>
                        <ul>
                            <li className={styles.font1}>Регистрируйтесь и создавайте профили.</li>
                            <li className={styles.font1}>Получайте заказы.</li>
                        </ul>
                    </li>
                </ul>

                <h2 className={styles.wrapperMargin1}>Безопасность и ответственность</h2>
                <p className={styles.fontDisplay2}>ProService не несет ответственности за качество услуг. Пожалуйста, тщательно проверяйте профили исполнителей, и заключайте все необходимые договоренности перед началом работы.</p>
                <p className={styles.fontDisplay2_1}>Спасибо, что выбрали ProService! Надеемся, вы найдете нужного исполнителя.</p>
            </div>



            <div className={styles.wrapperMin}>
                {state === 'state1' && (
                    <>
                        <h1 className={styles.marginH1}>О нас</h1>
                        <p className={styles.text}>Добро пожаловать на ProService! Наша платформа упрощает поиск и предоставление услуг для покупателей и исполнителей.</p>

                        <h2 className={styles.marginH2}>Как это работает?</h2>
                        <ul>
                            <li className={styles.textBox}><strong>Для покупателей:</strong>
                                <ul>
                                    <li className={styles.text}>Просматривайте профили.</li>
                                    <li className={styles.text}>Сравнивайте предложения.</li>
                                    <li className={styles.text}>Связывайтесь напрямую с нами.</li>
                                </ul>
                            </li>
                            
                            <li className={styles.textBox}><strong>Для исполнителей:</strong>
                                <ul>
                                    <li className={styles.text}>Регистрируйтесь и создавайте профили.</li>
                                    <li className={styles.text}>Получайте заказы.</li>
                                </ul>
                            </li>
                        </ul>
                        <p className={styles.btn} onClick={() => setState('state2')}>Еще</p>
                    </>
                )}

                {state === 'state2' && (
                    <>
                        <h2 className={styles.marginH3}>Безопасность и ответственность</h2>
                        <p className={styles.text1}>ProService не несет ответственности за качество услуг. Пожалуйста, тщательно проверяйте профили исполнителей, и заключайте все необходимые договоренности перед началом работы.</p>
                        <p className={styles.text1}>Спасибо, что выбрали ProService! Надеемся, вы найдете нужного исполнителя.</p>
                        
                        <button className={styles.btn} onClick={() => setState('state1')}>Назад</button>
                    </>
                )}

            </div>







            {/* <div className={styles.wrapper}>
                
            </div> */}
        </>
    )
}