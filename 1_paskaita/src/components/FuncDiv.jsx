import FuncButton from "./FuncButton";
import PropTypes from "prop-types";

function FuncDiv(props){
    return (
        <div>
            <h3>Pavadinimas</h3>
            <p>kaŽkoks Textas</p>
             <FuncButton {...props.title}/>
         </div>
    );
 }
 FuncDiv.propTypes = {
    title: PropTypes.string,
  };
  
  FuncDiv.defaultProps = {
    title: "Click",
  };
export default FuncDiv;