 import PropTypes from "prop-types";

 function Greeting(props){
    return <div>Hello, {props.name}! How are you?</div>;
 }
 Greeting.propTypes = {
    name: PropTypes.string,
 }
 Greeting.defaultProps = {   //aprašomas panačiai. 
    name: "User",
 };
 export default Greeting;