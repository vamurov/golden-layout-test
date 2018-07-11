import * as GoldenLayout from 'golden-layout';
import * as React from 'react';
import './App.css';
import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-light-theme.css';

class TestComponent extends React.Component<{ label: string }> {
    public render() {
        return (<h1>{this.props.label}</h1>);
    }
}

import logo from './logo.svg';


class App extends React.Component {
    componentDidMount() {
        const myLayout = new GoldenLayout({
            content: [{
                content: [{
                    component: 'test-component',
                    props: {label: 'A'},
                    type: 'react-component',
                    title: 'Hello'
                }, {
                    content: [{
                        component: 'test-component',
                        props: {label: 'B'},
                        type: 'react-component',
                    }, {
                        component: 'test-component',
                        props: {label: 'C'},
                        type: 'react-component',
                    }],
                    type: 'column',
                }],
                type: 'row'
            }]
        });

        myLayout.registerComponent('test-component', TestComponent);
        myLayout.init();
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
