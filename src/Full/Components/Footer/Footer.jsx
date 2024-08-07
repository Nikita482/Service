import styles from "./Footer.module.css"

import Input from "../input/input"


export default function Footer(){
    return(
        <>
            <div className={styles.wrapper}>
                <Input nameForm = "Вопрос"/>

                <div className={styles.info}>
                    <div className={styles.boxInfo1}>
                        <p className={styles.textInfo}>что то очень важное</p>
                        <p className={styles.textInfo}>что то очень важное</p>
                        <p className={styles.textInfo}>что то очень важное</p>
                        <p className={styles.textInfo}>что то очень важное</p>
                    </div>
                    <div className={styles.boxInfo2}>
                        <p className={styles.textInfo}>очень важная соц сеть</p>
                        <p className={styles.textInfo}>очень важная соц сеть</p>
                        <p className={styles.textInfo}>очень важная соц сеть</p>
                        <p className={styles.textInfo}>очень важная соц сеть</p>
                    </div>
                    <div className={styles.boxInfo3}>
                        <p className={styles.textInfo}>очень важная ссылка</p>
                        <p className={styles.textInfo}>очень важная ссылка</p>
                        <p className={styles.textInfo}>очень важная ссылка</p>
                        <p className={styles.textInfo}>очень важная ссылка</p>
                    </div>
                    <div className={styles.boxInfo4}>
                        <p className={styles.textInfo}>адрес 1</p>
                        <p className={styles.textInfo}>адрес 2</p>
                        <p className={styles.textInfo}>адрес 3</p>
                        <p className={styles.textInfo}>адрес 4</p>
                    </div>
                </div>
            </div>
        </>
    )
}