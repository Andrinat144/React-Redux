import { useAppSelector } from "../../Store"
import "./WitherStatus.scss"

export const WitherStatus = () => {
    const data = useAppSelector(state => state.data.wither.character)

    return (
        <div className="witherStatus">
            <div className="hp">
                <p>Hp: {data.whitherHP}</p>
                <p>MaxHp: {data.whitherMaxHp}</p>
            </div>
            <div className="defense">
                <p>Defense: {data.defense}</p>
            </div>
            <div className="weapon">
                <p>Weapon: {data.weapon}</p>
            </div>
            <div className="strenght">
                <p>Strenght: {data.strenght}</p>
            </div>
        </div>
    )
}