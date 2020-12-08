import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Convertor extends Component {
	state = {
  
		australia: null,
		india: null,
		china: null,
		argentina: null,
		brazil: null,
		morocco: null,
		vietnam: null,
		france: null,
		canada: null,
		mexico: null,
		egypt: null,
		italy: null,
		spain: null,
		netherland: null,
		japan: null,

	total: 0,
	userNumber: 0
   
	};

	componentDidMount() {
		axios
			.get('http://api.currencylayer.com/live?access_key=d738433b43524d560f4079256a7d254e&format=1')
			.then((res) => {
				console.log(res);
				this.setState({
					...this.state,
					argentina: res.data.quotes.USDARS,
					australia: res.data.quotes.USDAUD,
					brazil: res.data.quotes.USDBRL,
					canada: res.data.quotes.USDCAD,
					china: res.data.quotes.USDCNY,
					egypt: res.data.quotes.USDEGP,
					france: res.data.quotes.USDEUR,
					india: res.data.quotes.USDINR,
					italy: res.data.quotes.USDEUR,
					japan: res.data.quotes.USDJPY,
					mexico: res.data.quotes.USDMXN,
					morocco: res.data.quotes.USDMAD,
					netherland: res.data.quotes.USDANG,
					spain: res.data.quotes.USDEUR,
					vietnam: res.data.quotes.USDVND
				});
			});
	}

	checkCurrency = (value) => {
	
		//check input (how much they enter)
		const total = this.state.userNumber * value

		console.log(this.state.userNumber)
		console.log(value)
		this.setState({
      total: total.toFixed(2)
    		});
		//check what country they selected

		//do the math
  };


	handleInputChange = (event) => {
		let value = event.target.value 
		
		this.setState({
			userNumber: value
		})

		console.log(this.state.userNumber)


	}

	render() {
		const total = this.state.total;
		console.log('what is this', typeof this.state.australia);
    //console.log("TOTAl", value)
		return (
			<div className="whiteText center">
				<h1> Currency Convertor </h1> <p> Currency Source: USD </p>{' '}
				<input name="budget" value={this.state.userNumber} onChange={this.handleInputChange}type="text" placeholder="Enter the Budget amount" />
				{/* <button onClick={this.checkCurrency}> Submit </button>  */}
        <input name ="total" typpe="text" placeholder="Total"value= {total} />
		<br></br><br></br>
				<button onClick={()=> {this.checkCurrency(this.state.argentina.toFixed(2))}}> Currency Argentina: {this.state.argentina !== null && this.state.argentina.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.australia.toFixed(2))}}> Currency Australia: {this.state.australia !== null && this.state.australia.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.brazil.toFixed(2))}}> Currency Brazil: {this.state.brazil !== null && this.state.brazil.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.canada.toFixed(2))}}> Currency Canada: {this.state.canada !== null && this.state.canada.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.china.toFixed(2))}}> Currency China: {this.state.china !== null && this.state.china.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.egypt.toFixed(2))}}> Currency Egypt: {this.state.egypt !== null && this.state.egypt.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.france.toFixed(2))}}> Currency France: {this.state.france !== null && this.state.france.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.india.toFixed(2))}}> Currency India: {this.state.india !== null && this.state.india.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.italy.toFixed(2))}}> Currency Italy: {this.state.italy !== null && this.state.italy.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.japan.toFixed(2))}}> Currency Japan: {this.state.japan !== null && this.state.japan.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.mexico.toFixed(2))}}> Currency Mexico: {this.state.mexico !== null && this.state.mexico.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.morocco.toFixed(2))}}>Currency Morocco: {this.state.morocco !== null && this.state.morocco.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.netherland.toFixed(2))}}> Currency Netherland: {this.state.netherland !== null && this.state.netherland.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.spain.toFixed(2))}}> Currency Spain: {this.state.spain !== null && this.state.spain.toFixed(2)} </button>{' '}<br></br>
				<button onClick={()=> {this.checkCurrency(this.state.vietnam.toFixed(2))}}> Currency Vietnam: {this.state.vietnam !== null && this.state.vietnam.toFixed(2)} </button>{' '}<br></br>
				<div>
					<p className="white">
						{' '}
						<Link className="nav-link" to='/Protocols'>Return to Protocols</Link>
					</p>
					<p className="white">
						{' '}
						<Link className="nav-link" to='/Selection'>Return to Selection</Link>
					</p>
					<p className="white">
						{' '}
						<Link className="nav-link" to='/'>Log Out</Link>
					</p>
				</div>
			</div>
			
			
		);
	}
}

export default Convertor;
