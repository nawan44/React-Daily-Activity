import React, {Component} from 'react';
import './App.css';
import Header from './heder.js';
import { CSSTransition } from 'react-transition-group' ;
class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }
    addTodo = (e) => {
        e.preventDefault();
        let hours = this.refs.hours.value;
        let activity = this.refs.activity.value;

        this
            .state
            .todos
            .push({hours, activity});
        this.setState({todos: this.state.todos});

        this
            .refs
            .formulir
            .reset();
        this
            .refs
            .hours
            .focus();

    }
    removeTodo = (i) => {
        this
            .state
            .todos
            .splice(i, 1);
        this.setState({todos: this.state.todos});
    }
    render() {

        return (
            <div className="daily">

                <Header/>
                <form ref="formulir" className="form-inline">
                    <input
                        type="text"
                        className="form-control"
                        ref="hours"
                        placeholder="Hours of Activity"/>
                    <input
                        type="text"
                        className="form-control"
                        ref="activity"
                        placeholder="Activity Type"/>
                    <button onClick={this.addTodo} className="btn btn-info">Save</button>
                </form>
                <hr/>
                <div>
                    <ul>
                        {/* <CSSTransition
                                 transitionName="animasi"
                                 transitionEnter={true}
                                 transitionEnterTimeout={500}
                                 transitionLeave={false}
                                 transitionLeaveTimeout={500}
                          > */}
                            {
                                this
                                    .state
                                    .todos
                                    .map(
                                        (data, i) => <li key={i}>
                                            <div className="activity">
                                                <button
                                                    onClick={() => this.removeTodo(i)}
                                                    className="btn btn-danger"
                                                    style={{
                                                        marginRight: "25px"
                                                    }}>
                                                    Drop
                                                </button>
                                                {data.hours}
                                                : {data.activity}

                                            </div>

                                        </li>
                                    )
                            }
                        {/* </CSSTransition> */}
                    </ul>
                </div>
            </div>
        );
    }
}
export default App;
