import React from "react";
import PropTypes  from "prop-types";

class ClassDiv extends React.Component {
    render(){
        return(
        <div>
            <h3>Pavadinimas</h3>
            <p> Kažkoks textas </p>
            <button>{this.props.title}</button> 
        </div>
        ); 
     }
}
ClassDiv.propTypes = {
    title: PropTypes.string,
 };
    export default ClassDiv;
