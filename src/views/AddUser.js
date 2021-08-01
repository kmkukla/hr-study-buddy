import React, { useReducer, useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT CHANGE':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'CLEAR VALUES':
      return initialFormState;
    case 'CONSENT TOGGLE':
      return {
        ...state,
        consent: !state.consent,
      };
    case 'THROW ERROR':
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    dispatch({
      type: 'INPUT CHANGE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      dispatch({ type: 'CLEAR VALUES' });
    } else {
      dispatch({ type: 'THROW ERROR', errorValue: 'You need to give consent' });
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField name="name" id="name" label="Name" value={formValues.name} onChange={handleInputChange} />
      <FormField name="attendance" id="attendance" label="Attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField name="average" id="average" label="Average" value={formValues.average} onChange={handleInputChange} />
      <FormField
        type="checkbox"
        name="consent"
        id="consent"
        label="Consent"
        value={formValues.average}
        onChange={() => dispatch({ type: 'CONSENT TOGGLE' })}
      />
      <Button type="submit">Add Student</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
