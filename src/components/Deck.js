import React, {Component} from 'react'
import Card from './Card'

class Deck extends Component {
    render() {
        return (
            <div class="container" style={{paddingTop: '170px'}}>
                <div class="row">
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Deck