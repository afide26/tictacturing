import React, {Component} from 'react';
import {Container, Name, GameListHeader, GameList, GameRecord,
Column, ColumnLabels} from '../styled/Profile';


class Profile extends Component{
  static defaultProps = {
    user:{
      email:'USER_EMAIL',
      games:[
        {
          winner: true,
          createdAt: '07/02/2017',
          id: '0001'
        },
        {
          winner: true,
          createdAt: '07/03/2017',
          id: '0002'
        },
        {
          winner: false,
          createdAt: '06/12/2017',
          id: '0003'
        },
        {
          winner: true,
          createdAt: '01/23/2017',
          id: '0004'
        }
      ]
    }
  }

  get records(){
    return this.props.user.games.map((g,i)=>{
      return(
        <GameRecord key={i} index={i} >
          <Column>
            {(g.winner) ? 'Won' : 'Lost'}
          </Column>
          <Column>
            "ROBOT"
          </Column>
          <Column>
            "NO"
          </Column>
          <Column>
            {g.createdAt}
          </Column>
        </GameRecord>
      )
    })
  }

  render(){

    let email = this.props.user.email;

    return(
      <Container>
        <Name>{email}</Name>
        <GameList>
          <GameListHeader>
            My Games
          </GameListHeader>
          <ColumnLabels>
            <Column>
              Outcome
            </Column>
            <Column>
              Guess
            </Column>
            <Column>
              Guessed Correctly
            </Column>
            <Column>
              Date
            </Column>
          </ColumnLabels>
          {this.records}
        </GameList>
      </Container>
    )
  }
}

export default Profile;
