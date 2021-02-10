import React, { Component } from 'react';
import RequestPage from './RequestPage'
class Profile extends Component {
    state = { 
        Total_friends: 0,
        Array: [
            {id:1},{id:2},{id:3},{id:4}
        ]
     }
     handleAccept = (reqId) =>
     {
        console.log("Accept button clicked", reqId);
        const Array= this.state.Array.filter(c => c.id !== reqId);
        this.setState({
            Total_friends: this.state.Total_friends + 1
         })
         this.setState({Array});
     }
     handleDelete=(reqId)=>{
        console.log("Delete button clicked", reqId); 
        const Array= this.state.Array.filter(c => c.id !== reqId);
         this.setState({Array});
     }
    render() { 
        return ( 
            <div>
                <div className="navbar">
                    <h3>Total Friends : <span>{this.state.Total_friends}</span></h3>    
                </div>
                <div>
                    {this.state.Array.map(req => <RequestPage key={req.id} id={req.id} handleAccept={this.handleAccept} handleDelete={this.handleDelete}/>)}
                </div>
            </div>
         );
    }
}
 
export default Profile;