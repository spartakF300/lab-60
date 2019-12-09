import React, {Component} from 'react';
import './App.css';
import Message from "./Componets/Message/Message";
import Form from "./Componets/Form/Form";

class App extends Component {
    state = {
        message: [],
        datetime: null,
    };

    postMessage = (e) => {
        e.preventDefault();
        const url = 'http://146.185.154.90:8000/messages';
        const data = new URLSearchParams();
        data.set('message', e.target.message.value);
        data.set('author', e.target.author.value);
        fetch(url, {
            method: 'post',
            body: data,
        });
    };
    getMessage = async (datetime) => {

        let url = 'http://146.185.154.90:8000/messages';
        if (datetime !== null) {
            url = 'http://146.185.154.90:8000/messages?' + datetime
        }

        const response = await fetch(url);
        if (response.ok) {
            const message = await response.json();
            const datetime = message[message.length - 1].datetime;
            message.reverse();
            this.setState({message, datetime})
        }

    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.datetime !== this.state.datetime
    };


    componentDidMount() {
      this.getMessage(this.state.datetime);
        setInterval(() => {
            return this.getMessage(this.state.datetime);
        }, 3000);

    };

    render() {
        console.log('ddd');
        return (
            <div className="App">
                <Form
                    post={this.postMessage}
                />
                <div className="messWrap">

                    {this.state.message.map((mess) => {
                        return <Message
                            name={mess.author}
                            message={mess.message}
                            date={mess.datetime}
                            key={mess._id}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default App;