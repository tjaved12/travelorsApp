import React, { Component } from 'react';
import API from '../utils/API';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Country extends Component {
	state = {
		countryName: '',
		cases: [],
		todayCases: [],
		deaths: [],
		todayDeaths: [],
		recovered: [],
		todayRecovered: [],
		active: [],
		critical: [],
		casesPerOneMillio: [],
		deathsPerOneMillio: [],
		tests: [],
		testsPerOneMillio: [],
		population: [],
		flag: '',

		countrySelected: [ {} ]
	};

	componentDidMount() {
		console.log(window.location.pathname);

		const countryName = window.location.pathname.substring(1);
		console.log(countryName);
		this.setState({ countryName });

		axios
			.get('https://corona.lmao.ninja/v2/countries/' + countryName + '?yesterday=true&strict=true&query')
			.then((res) => {
				const flag = res.data.countryInfo.flag;
				this.setState({ flag });
				const countryName = res.data.country;
				this.setState({ countryName });
				const cases = res.data.cases;
				this.setState({ cases });
				const deaths = res.data.deaths;
				this.setState({ deaths });
				const todayCases = res.data.todayCases;
				this.setState({ todayCases });
				const todayDeaths = res.data.todayDeaths;
				this.setState({ todayDeaths });
				const recovered = res.data.recovered;
				this.setState({ recovered });
				const todayRecovered = res.data.todayRecovered;
				this.setState({ todayRecovered });
				const active = res.data.active;
				this.setState({ active });
				const critical = res.data.critical;
				this.setState({ critical });
			});
	}

	render() {
		const name = this.state.countryName;
		const cases = this.state.cases;
		const todayCases = this.state.todayCases;
		const todayDeaths = this.state.todayDeaths;
		const deaths = this.state.deaths;
		const flag = this.state.flag;
		const recovered = this.state.recovered;
		const active = this.state.active;
		const todayRecovered = this.state.todayRecovered;
		const critical = this.state.critical;

		return (
			<div>
				<img src={flag} />
				<h4>Country: {name}</h4>
				<p>Current Covid Cases: {cases}</p>
				<p>Deaths: {deaths}</p>
				<p>Today Covid Cases: {todayCases}</p>
				<p>Today's Death Numbers: {todayDeaths}</p>
				<p>Recovered: {recovered}</p>
				<p>Today recovereds: {todayRecovered}</p>
				<p>Active Covid Cases: {active}</p>
				<p>Critical Cases: {critical}</p>
				<br />
				<p className="white">
					{' '}
					<Link className="nav-link" to='/Protocols'>See the Protocols</Link>
				</p>
				<br />
				<p className="white">
					{' '}
					<Link className="nav-link" to='/Selection'>Go Back to Selection</Link>
				</p>
			</div>
		);
	}
}

export default Country;
