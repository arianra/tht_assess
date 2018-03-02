import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import forgivingCompose from '../../../fp/forgivingCompose.js';

export const FORM_FIELD_CLASS = "form-field";

export const propTypes = {
    onUpdate: PropTypes.func,
    
    validators: PropTypes.arrayOf(
        PropTypes.shape({
            validate: PropTypes.func,
            message: PropTypes.string
        })   
    )
}

export const defaultProps = {
    onUpdate: function(){},
    validators: []
}

class FormField extends Component {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            touched: false,
            valid: true,
            errorMessages: []
        };

        this.validate();

        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);

        return this;
    }

    componentWillReceiveProps() {
        // another possibility for validating

        // if the validators array was previously empty
        // validate() was overwritten to be empty
        // this is the time to check if we should restore the original validate()
    }

    validate() {
        const { validators } = this.props;
        const { value, valid } = this.state;

        if (validators.length === 0) {
            if (!valid) this.setState({ valid: true });
            this.validate = function(){};
        } 

        const failedValidations = validators.filter(({validate}) => validate(value));

        if (failedValidations.length === 0) {
            if (valid) return;
            this.setState({ valid: true })
        }

        if (failedValidations.length > 0) {
            this.setState({
                valid: false,
                errorMessages: failedValidations.map(({message})=>message)
            })
        }
    }

    onBlur(event) {
        const { touched } = this.state;

        if (!touched) this.setState({
            touched: true
        });
    }

    onChange(event) {
        const { onUpdate } = this.props;
        const { touched } = this.state;
        const value = event.target.value;
        
        if(touched) this.validate();
        // else passively validate for is-valid

        this.setState(
            {
                value
            }, 
            () => onUpdate(this.state.value)
        );
    }

    render() {
        const { 
            validators, onUpdate, // omit from rest props
            onBlur,
            onChange,
            className,
            ...inputProps 
        } = this.props;
        const { value, messages, valid, touched } = this.state;

        const classes = {
            valid,
            touched,
            [FORM_FIELD_CLASS]: true
        }

        // TODO add label and name
        // TODO add error-message list component
        return (
            <input 
                type="text"
                value={this.state.value}
                className={classNames(className, classes)}
                onBlur={forgivingCompose(onBlur, this.onBlur)}
                onChange={forgivingCompose(onChange, this.onChange)}
                {...inputProps}
            />
        )
    }
}

export default FormField;