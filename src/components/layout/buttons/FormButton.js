import React, { Children, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from '../Spinner/Spinner.styled.js';

const FormButton = ({ 
    children, 
    className, 
    loading, 
    ...buttonProps 
}) => {
    const classes = {
        loading
    };

    return (
        <button 
            className={classNames(className, classes)}
            {...buttonProps}
        >
            { loading ? <Spinner/> : children }
        </button>
    );
};

export default FormButton;