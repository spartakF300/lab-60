import React from 'react';
import './Form.css'
const Form = (props) => {
    console.log('form');
    return (
        <div>
            <form onSubmit={props.post}>
                <input className="inpAuthor" name={'author'} type="text" placeholder="Author"/>
                <input className="inpMess" name={'message'}  type="text" placeholder="Message"/>
            <button className="btn">Send</button>
            </form>
        </div>
    );
};

export default Form;