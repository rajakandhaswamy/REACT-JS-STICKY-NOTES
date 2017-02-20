import React from "react";
import { render } from "react-dom";
export class Notes extends React.Component {
	constructor(){
		super()
		this.state={
			editing:false
		}
	}

	edit() {
	    this.setState({
		editing:true		
	    })
	}

	remove(){	
		console.log("removing content");
		this.props.deleteFromBoard(this.props.index);
	}

	save(){
		var val=this.refs.newText.value;
		this.props.updateCommentText(val,this.props.index)
		console.log("comment:"+val);
		this.setState({
		editing:false
			});
	}

	cancel(){
		this.setState({
			editing:false
		});
	}

	renderNormal(){
		return(
			<div className="react-stickynote">
				<div className="card-block">{this.props.children}</div>
				<button onClick={this.edit.bind(this)} className="btn btn-success">Edit</button>
				<button onClick={this.remove.bind(this)} className="btn btn-danger">Remove</button>
			</div>
			);
	}

	renderForm(){
		return(
			<div className="react-stickynote">
			<textarea  ref="newText"defaultValue={this.props.children} placeholder="add note here"></textarea>
				<button onClick={this.save.bind(this)} className="btn btn-success">Save</button>
				<button onClick={this.cancel.bind(this)} className="btn btn-danger">Cancel</button>
			</div>
			);
	}

	render() {
		console.log(this.state.editing);
		if(this.state.editing){
			return this.renderForm()
		}
		else{
			return this.renderNormal();
		}
		
	}
}



