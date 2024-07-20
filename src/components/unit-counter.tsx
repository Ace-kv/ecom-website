'use client'

import { CircleMinus, CirclePlus } from "lucide-react"
import { useCartContext } from '@/app/cart-context'

const UnitCounter = () => {
    const { unitCount, setUnitCount } = useCartContext()

    // const [counter, setCounter] = useState(1)
    const minusClick = (counter: number) => {
        if (counter > 1) {
            setUnitCount(counter - 1)
            return 
        }
        return 
    }

    return (
        <div className="flex items-center mt-2">
            <span className="minus">
                <button onClick={() => minusClick(unitCount)}>
                <CircleMinus size={36} strokeWidth={1} color="gray" width={44} />
                </button>
            </span>
            <span className="num">{unitCount}</span>
            <span className="plus">
                <button onClick={() => setUnitCount(unitCount + 1)}>
                    <CirclePlus size={36} strokeWidth={1} width={44} />
                </button>
            </span>
        </div>
    )
}

export default UnitCounter