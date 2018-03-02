import React, { Fragment } from 'react';

import FormButton from './components/layout/buttons/FormButton.styled.js';
import FormField from './components/layout/forms/FormField.styled.js';
import FormWidget, { FormWidgetRow } from './components/layout/FormWidget/FormWidget.styled.js';
import WidgetPage from './components/layout/Widget/WidgetPage.styled.js';

const App = () => (
  <Fragment>
    <WidgetPage className="participant-search">
      <FormWidget>
        <FormWidgetRow className="header">
          <h1>Participant Search</h1>
        </FormWidgetRow>
        <FormWidgetRow>
          <FormField />
          <FormButton>
            {"Search"}
          </FormButton>
        </FormWidgetRow>
      </FormWidget>
    </WidgetPage>
  </Fragment>
);

export default App;
