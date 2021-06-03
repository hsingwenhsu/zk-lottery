import React, {Component} from 'react'
const Swal = require('sweetalert2')

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.card.id,
            flipstate: this.props.card.flipstate,
            reveal: this.props.card.reveal
        }
        this.flipCard = this.flipCard.bind(this);
        this.handleVerify = this.handleVerify.bind(this);
    }
    flipCard(){
        console.log('flipCard in Card')
        if(this.props.initState==0){
            Swal.fire('Please initialize first!');
        }
        else if(this.state.flipstate==0){
            this.setState({ flipstate: 1 });
            this.setState({ reveal: this.props.card.reveal });
            this.props.flipCard(this.state.id);
        }
    }

    handleVerify(){
        console.log('handleVerify card in Card.js')
        this.props.handleVerify(this.state.id);
    }

    render() {
        var icon;
        if(this.state.flipstate==0){
            icon = './img/unknown.png'
        }
        if(this.state.flipstate==1){
            if(this.state.reveal==1)
                icon = './img/head.png'
            else
                icon = './img/tail.png'
        }
        return (
            <div>
                <center>
                <button onClick={this.flipCard} type="button" class="btn btn-link"><img src={icon} width="180"></img></button>
                </center>
                <button onClick={this.handleVerify} type="button" class="btn btn-secondary btn-lg btn-block" ><h3>Verify</h3></button>
            </div>
        )
    }
}

export default Card