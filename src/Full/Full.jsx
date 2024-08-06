import { Link } from "react-router-dom"

import Start from "./Components/start/start"

export default function Full(){
    return(
        <>
            <Start />

            <Link to="/Page1">Page 1</Link>
            <Link to="/Page2">Page 2</Link>
        </>
    )
}


