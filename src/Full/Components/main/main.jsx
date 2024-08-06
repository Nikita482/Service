import styles from './main.module.css'
import MainCard from './mainCard/mainCard'

import { Link } from 'react-router-dom'

export default function Main(){
    return(
        <>
            <div className={styles.color}>{/* wrapper */}
                <h1 className={styles.textH1}>Выберите услугу которая вам нужна</h1>

                <div className={styles.arrow}>
                    <div className={styles.arrowLeft}>&#9664;</div>{/* лево */}
                    <div className={styles.arrowRight}>&#9654;</div>{/* право */}
                </div>

                <div className={styles.MainWrapper}>{/* блок с главными услугами */}

                    <MainCard
                        foto = 'https://i.pinimg.com/564x/d0/67/40/d06740abac6ffc8e0e5f24333ce32b8e.jpg'
                        name = 'Прогромирование'
                        Link = '/Page1'
                    />

                    <MainCard 
                        foto = 'https://i.pinimg.com/474x/ad/e9/90/ade9905c1a88a6d40b7c6564860df30f.jpg'
                        name = 'Тренер'
                        Link = '/Page2'
                    />

                    <MainCard 
                        foto = 'https://i.pinimg.com/564x/91/77/2e/91772e464c9c44bba97457cfa324715a.jpg'
                        name = 'Фотограф'
                        Link = '/Page3'
                    />

                    <MainCard 
                        foto = 'https://i.pinimg.com/564x/5a/7b/9b/5a7b9bcf2117b3fe9dfa115b271cd235.jpg'
                        name = 'Курьер'
                        Link = '/Page4'
                    />

                </div>

                


                <p className={styles.text}>ProService соединяет покупателей и исполнителей услуг, делая этот процесс простым и удобным.</p>
            </div>
        </>
    )
}