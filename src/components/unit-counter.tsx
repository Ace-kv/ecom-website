'use client'

import { CircleMinus, CirclePlus } from "lucide-react"
import { useState } from "react"

const UnitCounter = () => {
    const [counter, setCounter] = useState(1)
    const minusClick = (counter: number) => {
        if (counter > 1) {
            setCounter(counter - 1)
            return 
        }
        return 
    }

    return (
        <div className="flex items-center mt-2">
            <span className="minus">
                <button onClick={() => minusClick(counter)}>
                <CircleMinus size={36} strokeWidth={1} color="gray" width={44} />
                </button>
            </span>
            <span className="num">{counter}</span>
            <span className="plus">
                <button onClick={() => setCounter(counter + 1)}>
                    <CirclePlus size={36} strokeWidth={1} width={44} />
                </button>
            </span>
        </div>
    )
}

export default UnitCounter