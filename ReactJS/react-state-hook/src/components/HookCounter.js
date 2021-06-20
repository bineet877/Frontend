import React, {useState} from 'react'

export default function HookCounter() {
    const initialCount = 0
    const [count,setState] = useState(initialCount)
    return (
        <div>
            Count : {count}
            <button onClick={() => setState(initialCount)}>Reset</button>
            <button onClick={() => setState(count + 1)}>Increment</button>
            <button onClick={() => setState(count - 1)}>Decrement</button>
        </div>
    )
}
