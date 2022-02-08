
// Flanagan Section 10.3.2 ES6 Imports
// You import values that have been exported by other modules with the import
// keyword

// This is where a module uses both export and export default and this
// is the syntax to do the import.
import React, { Component } from "react";
// This is how you import a module which defines a default export. The string
// literal is the module whose default export we are importing.
import Modal from "./components/Modal";
import axios from "axios";

// This will likely be needed at some point.
// https://stackoverflow.com/questions/61751736/reactjs-django-axios-post-403-error-code
// axios.defaults.withCredentials = true;

// Flanagan Section 9.3
// Classes have always been part of JavaScript since the very first version
// of the language, but in ES6, they finally got their own syntax with the
// introduction of the class keyword ... this does not alter the fundamental
// nature of JavaScripts prototype-based classes. ... the resulting ... object
// (e.g. App and Component here) are contructor functions and work in the same
// manner. So the class keyword is syntatic sugar.
// ... There are no commas separatting the method definitions. Class
// bodies are similar to object literals but they are not the same thing.
// If there is no initialisation you can omit the constructor function.
// There is no field syntax, you have to defined them as properties of this
// in the constructor or a method. However a future Java standardisation
// (Probably already here) defines it.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Flanagan Section 3.6
      // Symbols were introduced in ES6 to serve as non string property names.
      // ... Property names are typically (and until ES6, were exclusively) strings.
      // But in ES6 and later, Symbols can also service this purpose.
      viewCompleted: false,
      todoList: [],
      modal: false,
      activeItem: {
        title: "",
        description: "",
        completed: false,
      },
    };
  }

  // Flanagan 6.10.5
  // Prior to ES6, you would hdefine a method in an object literal using a
  // function definition expression just as you would any other property
  // of an object, e.g. componentDidMount: function(). In ES6 ... the object
  // literal syntax was was extended to allow a shortcut where the function
  // keyword and the colon are omitted.
  componentDidMount() {
    this.refreshList();
  }

  // Flanagan 8.1.3 Arrow Functions.
  // In ES6, you can define functions using a particularly compact syntax 
  // known as "arrow functions". The syntax is reminiscent of mathematical
  // notation and separats the function parameters from the function body.
  // The function keyword is not used, and, since arrow functions are expressions
  // instead of statements there is no need for a function name either. The general
  // form is of an arrow function is a comma-separate list of parameters in
  // parenthesis, followed by the ==> arrow, followed by the function body in
  // curly braces. There are even more compact methods in various cases.
  // Arrow functions inherit the value of the this keyword from the environment
  // in which they are defined (they are closures). They also do not have a prototype
  // property and can't be used as constructors.

  // Flanagan 9.3.3 Public, Private and Static fields
  // The syntax for public instance fields is in common use by Javascript
  // programmers using the React Framework an the Babel transpiler.
  refreshList = () => {
    axios
      .get("/api/todos/")
      .then((res) => this.setState({ todoList: res.data }))
      .catch((err) => console.log(err));
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  // Flanagan Page 8
  // In ES6 and later, there is a shorthand syntax for defining functions ...
  // ... Arrow functions are most commonly used when you want to pass an
  // unnamed function as an argument to another function. Note that in the
  // case below the parentheses have been omitted in the definition
  // of the arrow function.
  handleSubmit = (item) => {
    this.toggle();
    if (item.id) {
      axios
        .put(`/api/todos/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post('/api/todos/', item)
      .then((res) => this.refreshList());

  }

  handleDelete = (item) => {
    this.toggle();
    axios
      .delete(`/api/todos/${item.id}/`, item)
      .then((res) => this.refreshList());
  }

  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayComplete = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  }

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayComplete(true)}
        >
          Complete
        </span>
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => this.displayComplete(false)}
        >
          Incomplete
        </span>
      </div>
    )
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed === viewCompleted
    );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items center"
      >
        <span
          className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""
            }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-centre my-4">
          Todo app
        </h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">

              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add task
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null
        }
      </main>
    )
  };

}

// Flanagan 10.3.1 ES6 Exports
// The export keyword means that App is available to files which import this
// file. You can export multiple variables/Classes functions in one command
// by using curly braces and commas (this is NOT an object literal, just
// the syntax)
// If you only export one value you can use export default and this makes
// it easier (somehow) for the import. Note that you can also use export default
// for an expression, e.g. an object literal.
export default App;

