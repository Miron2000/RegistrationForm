import React from 'react';
import Input from '../components/Input';
import "../components/Input.css";
import RadioGroup from "../components/RadioGroup.js";
import { validateInputText, validateInputNumber } from '../utils/Validation'
import CheckboxGroup from '../components/CheckboxGroup';

class RegistrationForm extends React.Component {
    state = {
        formData: {
            name: '',
            surname: '',
            age: '',
            hobbies: [],
            skill: [],
            sex: '',
            country: ''
        }
    };


    handleNameChange = (name) => {
        this.setState({
            formData: {
                ...this.state.formData,
                name,
            }
        })
    };

    handleSurnameChange = (surname) => {
        this.setState({
            formData: {
                ...this.state.formData,
                surname,
            }
        })
    };

    handleageChange = (age) => {
        this.setState({
            formData: {
                ...this.state.formData,
                age,
            }
        })
    };




    handleSexSelect = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                sex: event.target.value
            }
        })
        console.log(event.target.value, this.state.formData.sex);
    }

    handleHobbySelect = (hobbies) => {

        this.setState({
            formData: {
                ...this.state.formData,
                hobbies: hobbies
                //вызван в CheckboxGroup.js в методі handleSelect
            }
        })
    };

    handleSkillsSelect = (skill) => {

        this.setState({
            formData: {
                ...this.state.formData,
                skill: skill
                //вызван в CheckboxGroup.js в методі handleSelect
            }
        })
    };


    render() {
        return (
            <>
                <h2 className='center_h2'>Registration</h2>
                <Input name="name" placeholder="Name" handleChange={this.handleNameChange} validate={validateInputText} />
                <Input name="surname" placeholder="Surname" handleChange={this.handleSurnameChange} validate={validateInputText} />
                <Input name="age" placeholder="Age" handleChange={this.handleageChange} validate={validateInputNumber} />
                <div>
                    <RadioGroup name='sex' values={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]} handleChange={this.handleSexSelect} />

                    <h3>Hobbies</h3>
                    <CheckboxGroup name="hobbies" values={[
                        { label: "Snowbording", value: 'snowbording' },
                        { label: "Dancing", value: 'dancing' },
                        { label: "Boxing", value: 'boxing' }]} handleChange={this.handleHobbySelect} />

                    <h3>Skills</h3>
                    <CheckboxGroup name="skills" values={[
                        { label: "React", value: 'react' },
                        { label: "Scss", value: 'scss' },
                        { label: "JavaScript", value: 'javascript' }]} handleChange={this.handleSkillsSelect} />

                </div>
            </>
        )
    }
}

export default RegistrationForm;