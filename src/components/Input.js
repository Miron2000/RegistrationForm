import React from 'react';
import "./Input.css"

class Input extends React.Component {
    state = {
        error: '',
        value: ''
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
        this.props.handleChange(e.target.value);
    }


    handleBlur = () => {
        const error = this.props.validate(this.state.value);//Invalid input || ''
        console.log(error);
        
            this.setState({
                error:error
            })
        
    }



    render() {

        const {name, placeholder, handleChange} = this.props;

        return(
            <div className='center'>
                <input className='inputText' type='text' placeholder={placeholder} name={name} id={name} onChange={this.handleInputChange} onBlur={this.handleBlur} value={this.state.value}/>
                <label className='formLabel' htmlFor={name}>{name}</label>
                <div className='error'>{this.state.error}</div>
            </div>
            
        )
    }
}

export default Input;