import React, {Component} from 'react'
import './App.css';
import Web3 from 'web3';
import Navbar from './components/Navbar'
import Deck from './components/Deck'
import Zk from './components/Zk'
const {spawn} = require('child_process');
const {exec} = require('child_process');
//import {TODO_LIST_ABI, TODO_LIST_ADDRESS} from './config'
var cards = [
  {id: 0, flipstate: 0, reveal: 0},{id: 1, flipstate: 0, reveal: 0},{id: 2, flipstate: 0, reveal: 0},
  {id: 3, flipstate: 0, reveal: 0},{id: 4, flipstate: 0, reveal: 0},{id: 5, flipstate: 0, reveal: 0},
  {id: 6, flipstate: 0, reveal: 0},{id: 7, flipstate: 0, reveal: 0},{id: 8, flipstate: 0, reveal: 0},
  {id: 9, flipstate: 0, reveal: 0}
]
class App extends Component {
  componentWillMount(){
    this.loadBlockchainData()
    this.callAPI()
      
  }

  async loadBlockchainData (){
    const web3 = new Web3("http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    this.setState({account: accounts[0]})
    // const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    // this.setState({todoList})
    this.flipCard = this.flipCard.bind(this);
    //this.callAPI = this.callAPI.bind(this);
    //compile the 
  }
  constructor(props){
    super(props)
    this.state = {
      account:'',
      cards: cards,
      apiResponse: "",
    }
  }

  //functions for the node server
  

  callAPI() {
    fetch("http://localhost:9000/zokrate_server")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
    console.log(this.state.apiResponse);
    console.log('call api')
  }

  //Functions
  flipCard(cardid) {
    console.log('click')
    //should spawn the process of creating proof here
  }

  render() {
    return (
      <div className="container text-center">
        <Navbar />
        <Deck flipCard={this.flipCard} cards={this.state.cards} />
        <Zk />
        <button type="button" class="btn btn-secondary btn-lg" >
            <h2>Test secret</h2>
        </button>

        <p>{this.state.apiResponse}</p>
      </div>
    )
  }
}

export default App;
