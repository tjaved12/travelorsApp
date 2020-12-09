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
	userNumber: 10
   
	};

	componentDidMount() {
		axios
			.get('/api/money')
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
			<div className="container">
				<div className="row">
					<div type="Text" className="col-lg-4" ></div>
					<div type="Text" className="col-lg-4 center" >
						<div className="logo">
							<img className="countryImage" variant="top" src="./pictures/hummingbirdlogo.png" alt="travidlogo"/>
							<h1 className="whiteText">TravidWallet</h1>
							<h8 className="whiteText">Travel Safe, Budget Smart</h8>
						</div>
					</div>
					<div type="Text" className="col-lg-4" ></div>
				</div>
				<div className="whiteText center">
					<div className="">
						<h1> Currency Converter</h1>
						{/* <p> Currency Source: USD </p> */}
						<label className="whiteText center">Budget Amount (USD) :</label>
						<input name="budget" value={this.state.userNumber} onChange={this.handleInputChange}type="text" placeholder="Enter the Budget amount" />
						{/* <button onClick={this.checkCurrency}> Submit </button>  */}
						<label className="whiteText center">Converted Amount :</label>
						<input name ="total" typpe="text" placeholder="Total"value= {total} />
					</div>
					<div className="">
						<button onClick={()=> {this.checkCurrency(this.state.argentina.toFixed(2))}}> Argentina (ARS): {this.state.argentina !== null && this.state.argentina.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.australia.toFixed(2))}}> Australia (AUD): {this.state.australia !== null && this.state.australia.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.brazil.toFixed(2))}}> Brazil (BRL): {this.state.brazil !== null && this.state.brazil.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.canada.toFixed(2))}}> Canada (CAD): {this.state.canada !== null && this.state.canada.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.china.toFixed(2))}}> China (CNY): {this.state.china !== null && this.state.china.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.egypt.toFixed(2))}}> Egypt (EGP): {this.state.egypt !== null && this.state.egypt.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.france.toFixed(2))}}> France (EUR): {this.state.france !== null && this.state.france.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.india.toFixed(2))}}> India (INR): {this.state.india !== null && this.state.india.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.italy.toFixed(2))}}> Italy (EUR): {this.state.italy !== null && this.state.italy.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.japan.toFixed(2))}}> Japan (JPY): {this.state.japan !== null && this.state.japan.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.mexico.toFixed(2))}}> Mexico (MXN): {this.state.mexico !== null && this.state.mexico.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.morocco.toFixed(2))}}> Morocco (MAD): {this.state.morocco !== null && this.state.morocco.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.netherland.toFixed(2))}}> Netherland (ANG): {this.state.netherland !== null && this.state.netherland.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.spain.toFixed(2))}}> Spain (EUR): {this.state.spain !== null && this.state.spain.toFixed(2)} </button>{' '}<br></br>
						<button onClick={()=> {this.checkCurrency(this.state.vietnam.toFixed(2))}}> Vietnam (VND): {this.state.vietnam !== null && this.state.vietnam.toFixed(2)} </button>{' '}<br></br>
					</div>
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
			</div>
			
		);
	}
}

export default Convertor;
