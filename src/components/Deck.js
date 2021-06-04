import React, {Component} from 'react'
import Card from './Card'

class Deck extends Component {

    render() {
        return (
            <div class="container" style={{paddingTop: '170px', marginLeft:'470px'}}>
                <div class="row" style={{paddingBottom:'50px'}}>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} handleVerify={this.props.handleVerify} card={this.props.cards[0]} initState={this.props.initState}/>
                    
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} handleVerify={this.props.handleVerify} card={this.props.cards[1]} initState={this.props.initState}/>
                    
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} handleVerify={this.props.handleVerify} card={this.props.cards[2]} initState={this.props.initState}/>
                    
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} handleVerify={this.props.handleVerify} card={this.props.cards[3]} initState={this.props.initState}/>
                    
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} handleVerify={this.props.handleVerify} card={this.props.cards[4]} initState={this.props.initState}/>
                    
                    </div>
                </div>
                <div class="row" style={{paddingBottom:'50px'}}>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} handleVerify={this.props.handleVerify} card={this.props.cards[5]} initState={this.props.initState}/>
                    
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} handleVerify={this.props.handleVerify} card={this.props.cards[6]} initState={this.props.initState}/>
                    
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} handleVerify={this.props.handleVerify} card={this.props.cards[7]} initState={this.props.initState}/>
                    
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} handleVerify={this.props.handleVerify} card={this.props.cards[8]} initState={this.props.initState}/>
                    
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} handleVerify={this.props.handleVerify} card={this.props.cards[9]} initState={this.props.initState}/>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Deck