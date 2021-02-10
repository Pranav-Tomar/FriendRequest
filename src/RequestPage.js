import React, { Component } from 'react';
class RequestPage extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="main">
                <img style={{margin:10, borderRadius: "50%" }} src="https://picsum.photos/50" alt="image1"></img>
                <button style={{margin: 10}} className="btn btn-sm btn-primary" onClick={() => this.props.handleAccept(this.props.id)}>Confirm</button>
                <button onClick={() => this.props.handleDelete(this.props.id)} className="btn btn-sm btn-danger">Delete</button>
            </div>
         );
    }
}
 
export default RequestPage;