import React, { useState } from 'react';
function Children(props) {
    const { event } = props
    const [ name, setName ] = useState('default name')
    const changeName = () => {
        setName('new name')
        event('new name event')
    }
    return (
        <div onClick={changeName}>{name}</div>
    )
}
export default Children