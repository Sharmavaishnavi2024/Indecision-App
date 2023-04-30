import React from "react"

export default class AddOption extends React.Component{
    state= {
        error: undefined
    }
    handleAddOption=(event) =>{
        event.preventDefault();
        const option= event.target.elements.add.value.trim();
        const error= this.props.handleAddOption(option);
         this.setState(()=> ({error}));

          if(!error) {
            event.target.elements.add.value= " ";
          }
          }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-text">{this.state.error}</p>}
            <form className="add-option" onSubmit= {this.handleAddOption}>
                <input className="add-option__input" type= "text" name= "add"></input>
                <button className="button">Add option</button>
            </form>
        </div>
    );
}
}
