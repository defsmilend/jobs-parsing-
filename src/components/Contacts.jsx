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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    height: 250,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  media: {
    height: 100,
    width: 100,
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

const Contacts = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://s1.iconbird.com/ico/2014/1/567/w512h5121389807811officeaddressbookicon.png"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Для деловых предложений: parservakansij@gmail.com
          </Typography>
        </CardContent>
      </Card>
    </Wrapper>
  );
};
export default Contacts;
