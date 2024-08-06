import styles from './start.module.css'
import { useState } from 'react'
import Window from './window/window'
import WindowAboutUs from './windowAboutUs/windowAboutAs'


export default function Start(){

    const [menu, setMenu] = useState(false)

    function ClickMenu(){
        setMenu(stateMenu => !stateMenu)
    }


    const [windowStateSupport, setWindowStateSupport] = useState(true) //Support
    const [windowStateAdvice, setWindowStateAdvice] = useState(true) //Advice
    const [windowStateWorker, setWindowStateWorker] = useState(true) //Worker
    const [windowStateSearchWorker, setWindowStateSearchWorker] = useState(true) //SearchWorker
    const [windowStateAboutUs, setWindowStateAboutUs] = useState(true) //AboutUs

    
    function Support(){ //открывает окно тех поддержки и закрывает все остольные окна
        clickWindowSupport()
        setWindowStateAdvice(true)
        setWindowStateWorker(true)
        setWindowStateSearchWorker(true)
        setWindowStateAboutUs(true)
    }
    function clickWindowSupport(){
        setWindowStateSupport(!windowStateSupport)
    }

    
    function Advice(){ //открывает окно совета и закрывает все остольные окна
        clickWindowAdvice()
        setWindowStateSupport(true)
        setWindowStateWorker(true)
        setWindowStateSearchWorker(true)
        setWindowStateAboutUs(true)
    }
    function clickWindowAdvice(){
        setWindowStateAdvice(!windowStateAdvice)
    }


    function Worker(){ //открывает окно стать работником и закрывает все остольные окна
        clickWindowWorker()
        setWindowStateSupport(true)
        setWindowStateAdvice(true)
        setWindowStateSearchWorker(true)
        setWindowStateAboutUs(true)
    }
    function clickWindowWorker(){
        setWindowStateWorker(!windowStateWorker)
    }


    function searchWorker(){ //открывает окно найти работника и закрывает все остольные окна
        clickWindowsearchWorker()
        setWindowStateSupport(true)
        setWindowStateAdvice(true)
        setWindowStateWorker(true)
        setWindowStateAboutUs(true)
    }
    function clickWindowsearchWorker(){
        setWindowStateSearchWorker(!windowStateSearchWorker)
    }


    function AboutUs(){//открывает окно о нас и закрывает все остольные окна
        clickWindowAboutUs()
        setWindowStateSearchWorker(true)
        setWindowStateSupport(true)
        setWindowStateAdvice(true)
        setWindowStateWorker(true)
    }
    function clickWindowAboutUs(){
        setWindowStateAboutUs(!windowStateAboutUs)
    }


    return(
        <>
            {/* шапка */}
            <div className={styles.header}>
                    {/* название */}
                    <h1 className={styles.headerName}>ProService</h1>

                    {/* меню для пк */}
                    <div className={styles.menuMax}>
                        <p className={styles.menuBtn1} onClick={Support}>Тех поддержка</p>
                        <p className={styles.menuBtn2} onClick={AboutUs}>О нас</p>
                        <p className={styles.menuBtn3} onClick={Advice}>Оставте совет</p>
                        <p className={styles.menuBtn4} onClick={Worker}>Стать работником</p>
                        <p className={styles.menuBtnMain} onClick={searchWorker}>Найти работника</p>
                    </div>

                    {/* меню не для пк */}
                    <h1 className={styles.menuMinBtn} onClick={ClickMenu}>☰</h1>
            </div>


            {menu === true && (
                <>
                    <div className={styles.menuPk}>
                        <p className={styles.menuBtnPk1} onClick={Support}>Тех поддержка</p>
                        <p className={styles.menuBtnPk2} onClick={AboutUs}>О нас</p>
                        <p className={styles.menuBtnPk3} onClick={Advice}>Оставте совет</p>
                        <p className={styles.menuBtnPk4} onClick={Worker}>Стать работником</p>
                        <p className={styles.menuBtnMainPk} onClick={searchWorker}>Найти работника</p>                                
                    </div>
                </>
            )}
            {menu === false && (
                <>
                    
                </>
            )}


            {/* всплывающее окно / тех поддержка */}
            <div className={windowStateSupport ? styles.wrapperOpen : styles.wrapperClosed}>
                <div className={styles.wrapperWindow}>
                    <Window nameForm = 'Тех поддрержка' placeholder = 'Связь с нами'/>
                
                    <button className={styles.btnWindow} onClick={clickWindowSupport}>Закрыть</button>
                </div>       
            </div>

            {/* всплывающее окно / о нас */}
            <div className={windowStateAboutUs ? styles.wrapperOpen : styles.wrapperClosed}>
                <div className={styles.wrapperWindow}>
                    <WindowAboutUs />
                
                    <button className={styles.btnWindow} onClick={clickWindowAboutUs}>Закрыть</button>
                </div>       
            </div>

            {/* всплывающее окно / совет */}
            <div className={windowStateAdvice ? styles.wrapperOpen : styles.wrapperClosed}>
                {/* совет */}
                <div className={styles.wrapperWindow}>
                    <Window nameForm = 'оставте совет' placeholder = 'Задайте свой вопрос'/>
                
                    <button className={styles.btnWindow} onClick={clickWindowAdvice}>Закрыть</button>
                </div>
            </div>

            {/* всплывающее окно / стать рабтником */}
            <div className={windowStateWorker ? styles.wrapperOpen : styles.wrapperClosed}>
                {/* совет */}
                <div className={styles.wrapperWindow}>
                    <Window nameForm = 'Стать рабтником' placeholder = 'Напишите про свои: Коммуникационные навыки, пол, возраст, цели, зп, график, умение работать в команде, технические навыки, учебные способности и тд'/>
                
                    <button className={styles.btnWindow} onClick={clickWindowWorker}>Закрыть</button>
                </div>
            </div>

            {/* всплывающее окно / найти рабтника */}
            <div className={windowStateSearchWorker ? styles.wrapperOpen : styles.wrapperClosed}>
                {/* совет */}
                <div className={styles.wrapperWindow}>
                    <Window nameForm = 'Найти рабтника' placeholder = 'Уточните какого работника вы хотите найти'/>
                
                    <button className={styles.btnWindow} onClick={searchWorker}>Закрыть</button>
                </div>
            </div>
        </>
    )
}