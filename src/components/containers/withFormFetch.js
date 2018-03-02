import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
    /* 
        Base of URL to fetch 
        (is concatenated with any url passed to handleSubmit).
        Either baseUrl or url passed to handleSubmit can be left empty
    */
    baseUrl: PropTypes.string,
    /*
        default request options passed to fetch,
        can be overwritten by the options obj passed to handleSubmit
    */
    defaultOptions: PropTypes.shape({
        method: PropTypes.string
    })
}

export const defaultProps = {
    baseUrl = '',
    defaultOptions = {
        method: 'GET'
    }
};

/**
 *  Simple fetch HoC, 
 *  does a fetch request when onSubmit handler is called
 *
 *  * @return {HoC} styled HoC expecting a component
 */

const withFormFetch = Component => (
    class extends Component {
        static propTypes = propTypes;
        static defaultProps = defaultProps;

        constructor(props) {
            this.state = {
                success: false,
                error: false,
                loading: false,
                completed: false,
                status: undefined,
                statusText: undefined,
                body: undefined
            };

            this.handleSubmit = this.handleSubmit.bind(this);

            return this;
        }

        handleSubmit(url = '', options) {
            this.setState({ 
                loading: true
            });

            let fetchResponse;

            return fetch(
                `${baseUrl}${url}`, 
                { 
                    ...defaultOptions, 
                    options 
                }
            )
            .then(response => {
                const { status, statusText } = response;

                fetchResponse = {
                    success: false,
                    error: false,
                    status: status,
                    statusText: statusText
                };

                switch (status) {
                    case 200: 
                        fetchResponse.success = true;
                        break;
                    case 206:
                    case 404:
                    default: 
                        fetchResponse.error = true;
                        fetchResponse.statusText = statusText;
                }

                return response.json();
            })
            .catch( error => {
                // catch fetch() & json() errors
            })
            .then(body => {
                this.setState({
                    ...fetchResponse,
                    body,
                    loading: false,
                    completed: true,
                })
            })
        }

        render() {
            const { 
                baseUrl, defaultOptions, // omit from rest props
                ...componentProps
            } = this.props;

            return (
                <Component 
                    onSubmit={this.handleSubmit}
                    {...this.state} 
                    {...componentProps}
                />
            );
        }
    }
);

export default withFormFetch;