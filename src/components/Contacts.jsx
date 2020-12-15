import React from 'react'
import { Container } from '@material-ui/core'


const Contacts = () => {
    return (
            <Container fixed>
            <h1>Контакты</h1>
    <p>
      Для деловых предложений:
      parservakansij@gmail.com
      Для связи с разрабочиками перейдите в раздел «<a href="{{ url_for('main.team_page') }}">команда</a>»
    </p>
    <img src="https://www.pngrepo.com/download/55744/notebook-of-contacts.png" alt=""></img>
    </Container>
    )
}

export default Contacts
