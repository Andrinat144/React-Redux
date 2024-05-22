import "./Wither.scss"
import whitherImg from "../../Assets/witcher.png"
import { WitherStatus } from "../WitherStatus/WitherStatus"
import { useAppSelector } from "../../Store"

export const Whither = () => {
    const  data  = useAppSelector(state => state.data.wither.equipment)
    return (
        <div className="wither">
            <div className="witherNav">
                <button>backpack</button>
                <button>Map</button>
                <button>exit</button>
            </div>
            <div className="witherDisplay">
                <div className="equipment__div">
                    <div className="equipment">
                        {
                            data.armor && <div className={`${data.armor.equip}${data.armor.id}`}></div>
                        }
                    </div>
                    <div className="equipment">
                        {
                            data.sword && <div className={`${data.sword.equip}${data.sword.id}`}></div>
                        }
                    </div>
                    <div className="equipment">
                        {
                            data.jewelry && <div className={`${data.jewelry.equip}${data.jewelry.id}`}></div>
                        }
                    </div>
                    <div className="equipment">
                        {
                            data.poison && <div className={`${data.poison.equip}${data.poison.id}`}></div>
                        }
                    </div>
                </div>
                <div className="witherImg">
                    <img src={whitherImg} alt="wither" />
                </div>
                <WitherStatus/>
            </div>
        </div>
    )
}