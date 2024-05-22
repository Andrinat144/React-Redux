import { useAppSelector } from "../../Store"
import "./Backpack.scss"

export const Backpack = () => {
    const {data} = useAppSelector(state => state)

    const onClickHandler = () => {

    }
    
    return (
        <div className="backpack">
            <div className="headerNav">
                <nav >
                    <button>All</button>
                    <button>Weapon</button>
                    <button>Armor</button>
                    <button>Poison</button>
                    <button>Jewelery</button>
                </nav>
                <p>{data.wither.money}</p>
            </div>
            <div className="BackpackItem">
                <div className="Items">
                    {
                        data.wither.backpack.map((item, index) => (
                            <div onClick={onClickHandler} key={index} className={`${item.equip}${item.id}`}></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}