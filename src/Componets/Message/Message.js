import React, {Component} from 'react';
import './Message.css'
import moment from 'moment'
class Message extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.date !== this.props.date || nextProps.message !== this.props.message ||  nextProps.name !==  this.props.name;
    }

    render() {
        return (
            <div className="message">
                <h3>Author: {this.props.name}</h3>
                <span className="text"> {this.props.message}</span>
                <h4>Date: {moment(this.props.date).format('Y-M-D H:mm:ss') }</h4>
            </div>
        );
    }
}

export default Message;

