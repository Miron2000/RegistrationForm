import React from 'react';
import PropTypes from 'prop-types';

class CheckboxGroup extends React.Component {

    state = {
        checked: [],
        error: null
    };


    //перевірка 
    handleSelect = (e) => {
     
        if (this.state.checked.includes(e.target.value)) {//includes метод
            //1 variant
            this.setState({ checked: this.state.checked.filter(item => item !== e.target.value)}, () => this.props.handleChange(this.state.cheked))//тут берем значення ті які я не нажав

            //2variant
            // const index= this.state.checked.indexOf(e.target.value);
            // this.state.checked.splice(index, 1)
            // this.setState({checked:this.state.checked})

        } else {
            this.setState({checked: [...this.state.checked, e.target.value] }, () => this.props.handleChange(this.state.cheked))
        }
        
    }


    render() {

        const { values } = this.props;

        return (
            <div>
                {values.map(item => (
                    <div className='checkboxGroup'>
                        <input type="checkbox" value={item.value} name={this.props.name} id={item.value} onChange={this.handleSelect} />
                        <label htmlFor={item.value}>{item.label}</label>
                    </div>
                ))}

            </div>

        )
    }
}
export default CheckboxGroup;