import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 30px;
`;

const StyledTypography = styled(Typography)`
  margin-top: 10px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    height: 700,
    margin: '0 auto',
  },
  media: {
    height: 150,
    width: 150,
    margin: '0 auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://img.icons8.com/plasticine/2x/about.png"
          title="Paella dish"
        />
        <CardContent>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Хотите работать в сфере IT, но не знаете какую
            профессию выбрать и на кого пойти учиться?
            Тогда наш сайт поможет вам.
          </StyledTypography>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Многообразие возможностей и изобилие информации
            чаще всего дезориентирует абитуриентов. Вчерашние школьники теряются,
            не могут определиться и в итоге совершают множество ошибок при поступлении,
            выбирая не ту
            сферу деятельности и не ту профессию, которую им действительно хотелось бы.
            Позже приходит разочарование,
            а изменить что-то либо уже поздно, либо трудно психологически.
          </StyledTypography>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Подобные ошибки пагубно сказываются на дальнейшей судьбе студентов. Поэтому важно как
            можно раньше и наиболее точно определиться с будущей профессией, чтобы учеба и
            работа после ВУЗа были в радость. Чем больше удовлетворения приносит вам ваша
            профессия, тем больше вы счастливы, тем больше у вас появляется мотивации
            для развития в данной области и тем более ценным специалистом вы становитесь.
          </StyledTypography>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Как сделать правильный выбор? Подумайте, в какой сфере вы хотите работать и
            изучите все возможные варианты. В этом вам может помочь наш сайт.

            Введите в строку поиска, чем вы хотите заниматься в IT, и вы увидите профессии,
            востребованные работодателями на данный момент, и факультеты
            Московского Политеха, на которых вы можете их получить.

          </StyledTypography>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Мы, студенты Политеха, разработали этот сайт, чтобы помочь выпускникам
            школ сделать верный выбор своей будущей профессии. Поскольку мы сами уже прошли этот
            путь и приняли правильные для себя решения, то можем помочь сделать это другим,
            используя приобретенный опыт и знания, полученные в Московском Политехе.
            Надеемся, что наша разработка поможет абитуриентам, убережет их от ошибок и
            покажет путь в светлое и счастливое профессиональное будущее.
          </StyledTypography>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default About;
