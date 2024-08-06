import styles from "./Page1.module.css"

import { Link } from "react-router-dom"



export default function Page1(){
    return(
        <>
            <h1 className={styles.h1}>Page 1</h1>
            <Link to="/">Full</Link>

            <div class={styles.horizontalScroll}>
                <div class={styles.item}>Item 1</div>
                <div class={styles.item}>Item 2</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
                <div class={styles.item}>Item 3</div>
            </div>


            <div className={styles.wrapper}>
                <div className={styles.box}>blok</div>
                <div className={styles.box}>blok</div>
                <div className={styles.box}>blok</div>
                <div className={styles.box}>blok</div>
                <div className={styles.box}>blok</div>
                <div className={styles.box}>blok</div>
            </div>

            <div className={styles.horizontalScroll}>
                <div className={styles.arrowLeft}>&#9664;</div>

                <div className={styles.items}>
                    <div className={styles.item}>Item 1</div>
                    <div className={styles.item}>Item 2</div>
                    <div className={styles.item}>Item 3</div>
                    <div className={styles.item}>Item 4</div>
                    <div className={styles.item}>Item 5</div>
                    <div className={styles.item}>Item 6</div>
                    <div className={styles.item}>Item 7</div>
                    {/* Добавьте больше элементов по необходимости */}
                </div>

                <div className={styles.arrowRight}>&#9654;</div>
                <div className={styles.hint}>Scroll horizontally to see more</div>
            </div>

        </>
    )
}