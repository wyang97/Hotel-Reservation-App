import React, { Component } from 'react'

const RoomContext = React.createContext();
// provider and consumer?
export default class RoomProvider extends Component {

    state={

    }

    render() {
        return (
            <RoomContext.Provider value='hello'>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
