import "../css/nav.css"

export const Nav = ()=>{

    return(
        <div className="navDiv">
            <div className="label">
                <img src="src\assets\img\Vector.svg"/>
            </div>
            <nav className="nav">
                <ul className="ul_menu">
                    <li>Info</li>
                    <li>Contact</li>
                    <li>Comment</li>
                    <button className="buy">BUY</button>
                </ul>
            </nav>
        </div>
    )
}