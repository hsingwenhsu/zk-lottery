import React, {Component} from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar  navbar-dark bg-dark fixed-top"
                    style={{paddingBottom: '20px'}}>
                    <div class="container-fluid">
                        <h1 class="text-white" style={{margin: '10px', marginLeft: '30px'}}>ZK-Lottery</h1>
                    </div>
                </nav>
            </div>
            
        )
    }
}

export default Navbar