import styles from './mainCard.module.css'

import { Link } from 'react-router-dom'

export default function MainCard(props){
    return(
        <>
            <Link className={styles.wrapper} to={props.Link}>

                <img className={styles.foto} src={props.foto} />
                <p className={styles.name}>{props.name}</p>


            </Link>
        </>
    )
}