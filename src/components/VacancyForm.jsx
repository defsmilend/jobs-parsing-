import React from 'react';
import { Form, useFormikContext } from 'formik';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const WrapperForm = styled.div`
    margin: 0 auto;
    max-width: 700px;
    display: flex;
    justify-content: center;
`;

const useStyles = makeStyles(() => ({
  input: {
    width: '400px',
    margin: '0 auto',
    '& p': {
      margin: 0,
    },
  },
}));

const VacancyForm = () => {
  const { setFieldValue, values, errors } = useFormikContext();
  const classes = useStyles();

  return (
    <Form>
      <WrapperForm>
        <TextField
          error={errors.searchLabel}
          name="searchLabel"
          value={values.searchLabel}
          onChange={(event) => setFieldValue('searchLabel', event.target.value)}
          variant="outlined"
          placeholder="Ввведите вакансию"
          className={classes.input}
          helperText={errors.searchLabel && 'Пустое поле'}
        />
      </WrapperForm>
    </Form>
  );
};
export default VacancyForm;
