import "../css/header.css"
import { Nav } from "./nav"
export const Header =()=>{

    return(
        <div className="header">
            <div className="container">
                <Nav/>
                <div className="header-image">
                    <img class="content-item color-red content-item-active" src="src\assets\img\airpods-max-select-side-red.png" alt="airpods-max" />
                    <img class="content-item color-blue" src="src\assets\img\airpods-max-select-side-blue.png" alt="airpods-max" />
                    <img class="content-item color-green " src="src\assets\img\airpods-max-select-side-green.png" alt="airpods-max" />
                    <img class="content-item color-silver " src="src\assets\img\airpods-max-select-side-silver.png" alt="airpods-max" />
                    <img class="content-item color-black " src="src\assets\img\airpods-max-select-side-black.png" alt="airpods-max" />
                </div>
            </div>
        </div>
    )
}