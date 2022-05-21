import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTitle } from '../../Redux/Actions/actions';

export const Search = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    function handleChange(e) {
        e.preventDefault();
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getTitle(title));
        setTitle('');
        if (!title) {
            alert("Comic's title not found");
        }
    }
    return (
        <div>
            <input type="text" value={title} placeholder="Search comic's title" onChange={e => { handleChange(e) }} />
            <button type="submit" onClick={e => { handleSubmit(e) }}>Search</button>
        </div>
    )
}