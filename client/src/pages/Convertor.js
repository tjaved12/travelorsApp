import React,{useState} from "react";
import API from "../utils/API";
import {useHistory} from 'react-router-dom';


function Convertor() {
//   const [formState, setFormState] = useState({email: "", password: ""});

//   const history = useHistory()
//   const handleChange =(event) =>{
//     // console.log(event.target, "TEST");
//     const {name,value}=event.target;
//     setFormState ({
//       ...formState, 
//       [name]: value
//     })

//   }
//   const  handleSubmit = (event) => {
//     event.preventDefault();
//     // console.log(event, "COOL")
    
//     API.postlogin(
//       {email: formState.email,
//          password: formState.password
//       }
//     ).then(res => {
//       console.log(res);
//       history.push("/Selection")
      
//     })
  

return (
  <div>
      <h2>Currency Convertor</h2>
  
  </div>
);
}
export default Convertor;





//  componentDidMount() {
//  axios.get("http://api.currencylayer.com/live?access_key=d738433b43524d560f4079256a7d254e&format=1")
//     .then(res => {
//        console.log(res)
//    render() {


//     return (
//       <div>
     
// <h4>Currency Convertor</h4>
//       </div>
//     )
  
    
//     }}
//     )};


