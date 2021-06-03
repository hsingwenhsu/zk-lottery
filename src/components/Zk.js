import React, {Component} from 'react'
const Swal = require('sweetalert2')

class Zk extends Component {
    constructor(props){
        super(props);
        this.verifyProof = this.verifyProof.bind(this);
    }
    verifyProof() {
        console.log('proof verified')
        Swal.fire('Proof verified!')
    }
    render() {
        return (      
            <div class="jumbotron jumbotron-fluid" style={{paddingTop: '30px'}}>
                <div class="container">
                    <div class="row" style={{padding: '50px'}}>
                    <button onClick={this.verifyProof} type="button" class="btn btn-secondary btn-lg" >
                        <h2>Verify Proof</h2>
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Zk