import "./Wither.scss"
import whitherImg from "../../Assets/witcher.png"

export const Whither = () => {
    return (
        <div className="wither">
            <div className="equipment__div">
                <div className="equipment"></div>
                <div className="equipment"></div>
                <div className="equipment"></div>
                <div className="equipment"></div>
            </div>
            <div className="witherImg">
                <img src={whitherImg} alt="wither" />
            </div>
            <div className="witherNav">
                <button>backpack</button>
                <button>Map</button>
                <button>exit</button>
            </div>
        </div>
    )
}