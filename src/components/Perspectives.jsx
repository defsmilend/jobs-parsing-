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
    height: 250,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop: 30,
  },
  media: {
    height: 90,
    width: 90,
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

const Perspectives = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://cdn4.iconfinder.com/data/icons/business-277/48/4_target_aim_mission_company_future_goal_market_people-512.png"
          title="Paella dish"
        />
        <CardContent>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Мы планируем развиваться и дальше!
          </StyledTypography>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Наши планы:
          </StyledTypography>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Сделать список просмотренных вакансий;
          </StyledTypography>
          <StyledTypography variant="body2" color="textSecondary" component="p">
            Добавить сортировку по найденным вакансиям;
          </StyledTypography>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default Perspectives;
