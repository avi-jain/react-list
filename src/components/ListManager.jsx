var React = require('react');
var List = require("./List.jsx");

var ListManager = React.createClass({
    getInitialState : function(){
    return({items:[], newItemtext:''});    //define variables to be initialized with every new instance of component
    }, 
    onChange : function(e){
        this.setState({newItemText: e.target.value});
    },
    handleSubmit : function(e){
    e.preventDefault();
    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    
    this.setState({items: currentItems, newItemText:""});
    }, 
    render : function(){
        
        var divStyle={
            marginTop:10 /*No need for semicolons!*/
        };
        var headingStyle = {
            
        };
        if(this.props.headingColour){
            headingStyle.background = this.props.headingColour;
        };
        return(
            <div style={divStyle} className = "col-sm-4">
                <div className = "panel panel-primary">
                    <div style={headingStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">         
                        <form onSubmit = {this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange={this.onChange} type="text" value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary"> Add </button>
                            </div>
                        </form> 
                    </div>
                <List items={this.state.items} />
                </div>
            </div>
        );
    }
});

module.exports = ListManager;