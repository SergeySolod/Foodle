import React from 'react'
import {NavLink} from "react-router-dom";

const Search = (props) => {
    return (
            <div className='pb-2'>
                <h3>Поиск блюда</h3>
                <div className='input-group'>
                    <input
                        onChange={e => props.setSearchQuery(e.target.value)}
                        value={props.searchQuery}
                        placeholder="Зелёный чай"
                        className="form-control"
                    />
                </div>
            </div>
    )
}

const SidebarDish = (props) => {
       return (
        <div>
            <Search setSearchQuery={props.setSearchQuery} searchQuery={props.searchQuery}/>
            <div className="list-group pb-2">
                {
                    props.group.map(group => <NavLink
                        className='list-group-item list-group-item-action'
                        key={group.id}
                        to={`/change/${props.cityId}/${props.restaurantId}/${group.id}`}
                    >{group.name}
                    </NavLink>)
                }
            </div>
            <NavLink
                to={`/change/${props.cityId}/${props.restaurantId}`}
                className="btn btn-link btn btn-block ">Назад к ресторану</NavLink>
        </div>
    )
}


export default SidebarDish;