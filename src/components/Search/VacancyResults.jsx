import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 30px auto;
  max-width: 1000px;
`;

const WrapperResult = styled.a`
  border: 2px solid #3f51b5;
  border-radius: 3px;
  margin-top: 10px;
  padding: 10px;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
  display: block;
  color: black;
`;
const VacancyTitle = styled.div`
  font-size: ${(props) => (props.title ? '26px' : '20px')};
  margin-bottom: 10px;
`;
const VacancyDescription = styled.div`
  font-size: 17px;
  white-space: break-spaces;
  margin-top: 10px;
`;
const ResultEmpty = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
`;

const VacancyResults = ({ resultSearch }) => (
  <>
    { Array.isArray(resultSearch) ? resultSearch.map((vacancy) => (
      <Container
        key={vacancy.vacancy.id}
      >
        <WrapperResult
          href={vacancy.vacancy.vac_url}
          target="_blank"
        >
          <VacancyTitle title>
            {vacancy.vacancy['job-name']}
          </VacancyTitle>
          {vacancy.vacancy.salary
          && (
            <VacancyTitle>
              {vacancy.vacancy.salary}
              {' руб'}
            </VacancyTitle>
          )}
          <VacancyDescription>
            <VacancyTitle>Требования:</VacancyTitle>
            {vacancy.vacancy.duty.replace(/(<\/?[^>]+>)/gi, '')}
          </VacancyDescription>
          {vacancy.vacancy.term
          && (
            <VacancyDescription>
              <VacancyTitle>Условия:</VacancyTitle>
              {vacancy.vacancy.term.text}
              <div />
            </VacancyDescription>
          )}
        </WrapperResult>
      </Container>
    ))
      : (
        <Container>
          <ResultEmpty>Не найдено подходящей вакансии</ResultEmpty>
        </Container>
      )}
  </>
);
export default VacancyResults;
