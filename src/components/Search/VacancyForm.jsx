import React from 'react';
import { Form, useFormikContext } from 'formik';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField } from '@material-ui/core';

const WrapperForm = styled.div`
    margin: 0 auto;
    max-width: 700px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const StyledTitle = styled(Typography)`
    margin: 10px auto;
    font-size: 18px;

`;

const useStyles = makeStyles(() => ({
  input: {
    width: '700px',
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
        <StyledTitle>Введите интересующую вакансию</StyledTitle>
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
