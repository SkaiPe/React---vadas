import PropTypes from 'prop-types' // importuojam suinstaliuotus proptaipus

function FuncButton(props){
    return <button>{props.title}</button>;
}
//komponento pavadinimas.ira6om prop types ir nurodom kokie propsai ateina, kokio tipo. "ia stringas. i5 bibliotekos"
FuncButton.propTypes = {
    title: PropTypes.string,
};
export default FuncButton;