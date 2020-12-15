import axios from 'axios';

const getVacancy = (text) => axios.get(`http://opendata.trudvsem.ru/api/v1/vacancies?text=${text}&region_code=7700000000000`);

export default getVacancy;
