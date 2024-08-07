import styles from "./Full.module.css"

import Start from "./Components/start/start"
import Main from "./Components/main/main"
import MainService from "./Components/mainservice/mainServ"
import Footer from "./Components/Footer/Footer"

export default function Full(){
    return(
        <>
            <div className={styles.wrapper}>
                <Start />
                <Main />
                <MainService />
                <Footer />
            </div>
        </>
    )
}


