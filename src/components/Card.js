import React, {Component} from 'react'

class Card extends Component {
    constructor(props){
        super(props);
        this.flipCard = this.flipCard.bind(this);
        this.state = {
<<<<<<< HEAD
            id: this.props.id,
            flipstate: this.props.flipstate
=======
            flipstate: 0
>>>>>>> f52f2c49026db967149260575d739984cdc89e3f
        }
    }
    flipCard(){
        console.log('flip card in card')
        if(this.state.flipstate==0){
            var newstate = Math.floor(Math.random() *2)+1;
            console.log('flipstate', newstate)
            this.setState({flipstate: newstate})
            this.props.flipCard();
        }else{
            console.log('flip state==0')
            this.setState({flipstate: 0})
        }
    }

    render() {
        var icon;
        if(this.state.flipstate==0){
            icon = './img/unknown.png'
        }
        if(this.state.flipstate==1){
            icon = './img/head.png'
        }
        if(this.state.flipstate==2){
            icon = './img/tail.png'
        }
        return (
            <div>
                <center>
                <button onClick={this.flipCard} type="button" class="btn btn-link"><img src={icon} width="180"></img></button>
                </center>
            </div>
        )
    }
}

export default Card