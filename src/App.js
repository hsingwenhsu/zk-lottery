import React, {Component} from 'react'
import './App.css';
import Web3 from 'web3';
//import {TODO_LIST_ABI, TODO_LIST_ADDRESS} from './config'
class App extends Component {
  componentWillMount(){
    this.loadBlockchainData()
  }

  async loadBlockchainData (){
    const web3 = new Web3("http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    this.setState({account: accounts[0]})
    // const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    // this.setState({todoList})
  }
  constructor(props){
    super(props)
    this.state = {account:''}
  }

  render() {
    return (
      <div className="container">
        <h1>Hello world!</h1>
        <p>Your account: {this.state.account}</p>
      </div>
    )
  }
}

export default App;
