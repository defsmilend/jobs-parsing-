import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

const Wrapper = styled.div`
  margin-top: 30px;
`;

const StyledTypography = styled(Typography)`
  margin-top: 10px;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    height: 350,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop: 30,
  },
  media: {
    height: 100,
    width: 100,
    margin: '0 auto',
    paddingTop: 30,
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

const Howtouse = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Card className={classes.root}>
        <Avatar src="https://www.flaticon.com/svg/static/icons/svg/2824/2824874.svg" className={classes.media} />
        <CardContent>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Руководство пользователя
          </StyledTypography>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Привет! Мы рады видеть тебя в нашем веб-приложении! Сейчас я расскажу
            тебе как им пользоваться!
          </StyledTypography>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Вводи свою вакансию и нажми Enter! Тебе отобразится список найденных вакансий.
            Если тебе интересно почитать о проекте, то тебе во вкладку «О нас».
            Там ты найдешь много интересного о нашем проекте и почему мы за него взялись.
          </StyledTypography>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Код нашего проекта хранится в открытом доступе на
            {' '}
            <a href="https://github.com/defsmilend/jobs-parsing-">Github</a>
          </StyledTypography>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default Howtouse;
