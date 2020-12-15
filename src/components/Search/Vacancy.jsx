import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import VacancyForm from './VacancyForm';
import getVacancy from '../../api/getVacancy';
import VacancyResults from './VacancyResults';

const Wrapper = styled.div`
  margin-top: 40px;
`;

const Vacancy = () => {
  const [resultSearch, setResulSearch] = useState([]);

  const onSubmit = async (values) => {
    const response = await getVacancy(values.searchLabel);
    setResulSearch(response.data.results.vacancies);
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{ searchLabel: '' }}
        onSubmit={onSubmit}
        validationSchema={Yup.object().shape({
          searchLabel: Yup.string()
            .required('Required'),
        })}
      >
        <>
          <VacancyForm />
          <VacancyResults resultSearch={resultSearch} />
        </>
      </Formik>
    </Wrapper>
  );
};
export default Vacancy;
