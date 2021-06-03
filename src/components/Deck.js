import React, {Component} from 'react'
import Card from './Card'

class Deck extends Component {
    render() {
        return (
            <div class="container" style={{paddingTop: '170px'}}>
                <div class="row">
                    <div class="col-sm">
<<<<<<< HEAD
                    <Card flipCard={this.props.flipCard} id={this.props.cards[0].id} flipstate={this.props.cards[0].flipstate}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} id={this.props.cards[1].id} flipstate={this.props.cards[1].flipstate}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} id={this.props.cards[2].id} flipstate={this.props.cards[2].flipstate}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} id={this.props.cards[3].id} flipstate={this.props.cards[3].flipstate}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} id={this.props.cards[4].id} flipstate={this.props.cards[4].flipstate}/>
=======
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
>>>>>>> f52f2c49026db967149260575d739984cdc89e3f
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
<<<<<<< HEAD
                    <Card flipCard={this.props.flipCard} id={this.props.cards[5].id} flipstate={this.props.cards[5].flipstate}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} id={this.props.cards[6].id} flipstate={this.props.cards[6].flipstate}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} id={this.props.cards[7].id} flipstate={this.props.cards[7].flipstate}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} id={this.props.cards[8].id} flipstate={this.props.cards[8].flipstate}/>
                    </div>
                    <div class="col-sm">
                    <Card flipCard={this.props.flipCard} id={this.props.cards[9].id} flipstate={this.props.cards[9].flipstate}/>
=======
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
>>>>>>> f52f2c49026db967149260575d739984cdc89e3f
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Deck