import * as React from "react";
import { render } from "react-dom";

import store from './store'
import TodoListView from './components/TodoListView'

render(<TodoListView store={store} />, document.getElementById("root"));

