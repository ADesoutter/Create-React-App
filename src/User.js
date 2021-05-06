import React, { Component } from 'react'

export default class User extends Component {
    componentDidMount() {
        console.log("ça sert à quoi ??");
    }
    
    render() {
        return (
            <div className="User">
                <p>{user.name.first} {user.name.last}</p>
                <img src={user.picture.thumbnail} alt=""/>
            </div>
        )
    }
}