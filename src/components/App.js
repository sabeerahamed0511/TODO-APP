import React from "react";
import "./../styles/App.css";
import TodoApp from "./TodoApp";
// import Apicall from "./Apicall";

function App() 
{
	return (
	<div id="main">
	{/* //Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component. */}
	<TodoApp />
	</div>
	);
}


export default App;
