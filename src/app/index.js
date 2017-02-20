import React from "react";
import { render } from "react-dom";
import { Notes } from "../app/notes.js"
export class App extends React.Component {
	constructor(){
		super();
		this.state={
			comments:[]
		}
	}
	addNote(text){
		var arr=this.state.comments;
		arr.push(text);
		this.setState({comments:arr});
	}

	removeComment(i){
		console.log("Removing comment:"+i);
		var arr = this.state.comments;
		arr.splice(i,1);
		this.setState({comments:arr})
	}

	updateComment(newText,i){
		console.log("Updating comment...:"+i);
		console.log(this.state.comments);
		var arr = this.state.comments;
		arr[i]=newText;
		this.setState({comments:arr})
	}
	eachComment(text,i){
		return (<Notes key={i} index={i} updateCommentText={this.updateComment.bind(this)} deleteFromBoard={this.removeComment.bind(this)}>
					{text}
				</Notes>)
	}
	render(){
		console.log("running");
		return(
		<div>
		<p>
			<button onClick={this.addNote.bind(this,"")}className="btn btn-info">NEW STICKY NOTE</button>
		</p>	
			<div>
				{
					this.state.comments.map(this.eachComment.bind(this))
				}
			</div>
		</div>
		);

	}
}

render(<App/>,window.document.getElementById('app'));
