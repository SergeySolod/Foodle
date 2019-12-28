import React from 'react'
import {NavLink} from "react-router-dom";

const Search = (props) => {
    return (
        <div className='pb-2'>
            <h3>Поиск ресторана</h3>
            <div className='input-group'>
                <input
                    onChange={e => props.setSearchQuery(e.target.value)}
                    value={props.searchQuery}
                    placeholder="Ресторан"
                    className="form-control"
                />
            </div>
        </div>
    )
}

const SidebarRest = (props) => {
    return (
        <div>
            <Search setSearchQuery={props.setSearchQuery} searchQuery={props.searchQuery}/>
            <NavLink
                to={`/map/${props.cityId}`}
                className="btn btn-info btn btn-block">Открыть карту</NavLink>
            <NavLink
                to={`/change`}
                className="btn btn-info btn btn-block">К списку городов</NavLink>
        </div>
    )
}


export default SidebarRest;