import React, {Component} from 'react'
import './App.css';
import Web3 from 'web3';
import Navbar from './components/Navbar'
import Deck from './components/Deck'
import Zk from './components/Zk'
const {spawn} = require('child_process');
const {exec} = require('child_process');
const Swal = require('sweetalert2')
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
    
    //this.callAPI = this.callAPI.bind(this);
    //compile the 
  }
  constructor(props){
    super(props)
    this.callAPI = this.callAPI.bind(this);
    this.state = {
      account:'',
      cards: cards,
      apiResponse: "",
      secret: null,
      init: 0
    }
    this.flipCard = this.flipCard.bind(this);
    this.startLottery= this.startLottery.bind(this);
    this.handleVerify = this.handleVerify.bind(this);
  }

  //functions for the node server
  

  callAPI() {
    fetch("http://localhost:9000/zokrates_server/secret/")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
    console.log(this);
    console.log(this.state.apiResponse);
    console.log('call api')
  }

  startLottery(){
    for(let i=0; i<10; i++){
      cards[i].reveal = 0;
      cards[i].flipstate = 0;
    }
    this.setState({ cards:cards });
    var secret = parseInt(this.state.apiResponse);
    this.setState({ secret: secret });
    console.log(this.state.secret);
    //convert secret into bit string
    var binary = secret.toString(2);
    var total_len = 10;
    var topad = total_len-binary.length
    binary = binary.padStart(total_len,'0');
    console.log(binary);
    for(let i = 0; i<10; i++){
      if(binary[i]=='1')
        cards[i].reveal = 1;
    }
    this.setState({ cards: cards });
    console.log(this.state.cards);
    this.setState({ init: 1 });
    Swal.fire('Ready to go!');
  }

  //Functions
  flipCard(cardid) {
      console.log('card id')
      console.log(cardid)
      //should spawn the process of creating proof here
  }

  //function for verify
  handleVerify(cardid){
    fetch("http://localhost:9000/zokrates_server/verify/"+cardid)
        .then(res => res.text())
        .then(res => Swal.fire(res))
        .catch(err => err);
    console.log(cardid);
  }

  compile(){
    fetch("http://localhost:9000/zokrates_server/compile")
        .then(res => res.text())
        .then(res => Swal.fire(res))
        .catch(err => err);
    console.log('compiled');
  }

  generateKey(){
    fetch("http://localhost:9000/zokrates_server/generateKey")
        .then(res => res.text())
        .then(res => Swal.fire(res))
        .catch(err => err);
    console.log('compiled');
  }

  test(){
    fetch("http://localhost:9000/zokrates_server/compile")
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(err => err);
    console.log('test');
  }

  render() {
    return (
      <div className="container container-fluid" style={{margin:'0px'}}>
        <Navbar />
        <div class="sidebar" style={{marginTop: '90px', paddingTop:'10px'}}>
          <center>
           
            
            <button onClick = {this.compile} type="button" class="btn btn-secondary btn-block sidebar_but" style={{marginTop: '30px'}} >
                <h3 style={{marginTop:'5px'}}>1. Compile</h3>
            </button>
            <button onClick = {this.generateKey} type="button" class="btn btn-secondary sidebar_but" style={{marginTop: '30px'}}>
                <h3 style={{marginTop:'5px'}}>2. Generate Key</h3>
            </button>
            <button onClick = {this.startLottery} type="button" class="btn btn-secondary sidebar_but" style={{marginTop: '30px'}}>
                <h3 style={{marginTop:'5px'}}>3. Start Lottery!</h3>
            </button>

         
          </center>
       
        
        
        </div>
        <Deck flipCard={this.flipCard} handleVerify={this.handleVerify} cards={this.state.cards} initState={this.state.init}/>
      </div>
    )
  }
}

export default App;
