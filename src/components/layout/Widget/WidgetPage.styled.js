import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetPage = styled.div`
    width: 50%;
    margin: 0 auto;
    padding-top: 16px;

    &.loading {
        cursor: progress;
    }
`;

export default WidgetPage;