import React from 'react'

const Sorting = (props) => {
    return (
        <ul className="list-group list-group-horizontal-sm pb-3 pt-1">
            <button onClick={() => {
                props.changeSort('all')
            }}
                    className="list-group-item">Все блюда
            </button>
            <button onClick={() => {
                props.changeSort('priseHigh')
            }}
                    className="list-group-item">Цена
                (дорогие)
            </button>
            <button onClick={() => {
                props.changeSort('priseLow')
            }}
                    className="list-group-item">Цена
                (дешёвые)
            </button>
            <button onClick={() => {
                props.changeSort('alfUp')
            }}
                    className="list-group-item">По алфавиту
                (А-Я)
            </button>
            <button onClick={() => {
                props.changeSort('alfDown')
            }}
                    className="list-group-item">По алфавиту
                (Я-А)
            </button>
        </ul>
    )
}

export default Sorting