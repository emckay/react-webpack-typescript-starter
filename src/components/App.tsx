import * as React from 'react';
import './../assets/scss/App.scss';

export default class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <p>Foo to the barz</p>
      </div>
    );
  }
}
