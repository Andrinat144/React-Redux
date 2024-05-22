import { Backpack } from "../Backpack/Backpack"
import { Whither } from "../Wither/Wither"
import "./HomePage.scss"

export const HomePage = () => {
    return (
        <>
            <div className="headerImg"></div>
            <div className="homepage container">
                <div>
                    <Whither/>
                </div>
                <div>
                    <Backpack/>
                </div>
            </div>
        </>
    )
}