import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { setUserName, setUserNameErrorMessage} from '../../actions';


const PaddedContainer = styled.div`
padding: 30px;
`

const FlexContainerDiv = styled.div`
display: flex;
justify-content: center;
align-items: center
width: 100%;
height: 500px;
padding: 20px;
`

const WelcomeHeading = styled.h2`
color: white;
`

const EnterUserNameDiv = styled.div`
background-color: #ab9bab;
width: 300px;
height: 80px;
padding: 20px;
`

const PlayButton = styled.button`
background-color: #abdcab;
padding: 10px;
margin: 10px;
float: right;
`


@connect((store)=>{
    return {
        userState: store.userState,
        welcomeSceneState: store.scenesState.welcomeSceneState,
        socketState: store.socketState.socketID
    };
})

class WelcomeScene extends Component {

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    play(event) {

        event.preventDefault();
        event.stopPropagation();

        var playerName = document.getElementById("userName").value;

        if (playerName){
            this.props.dispatch(setUserNameErrorMessage(""))
            this.props.dispatch(setUserName(playerName))
        } else {
            this.props.dispatch(setUserNameErrorMessage("Kak naam bra!"))
        }
    }

    render() {

        let error;
        if (this.props.welcomeSceneState.userNameErrorMessage) {
            error = <b> {this.props.welcomeSceneState.userNameErrorMessage} </b>
        }

        console.log("this.props.welcomeSceneState.userNameErrorMessage:", this.props.welcomeSceneState.userNameErrorMessage);

        return (
            <PaddedContainer>
                <WelcomeHeading> Welcome to Guerilla Vector! </WelcomeHeading>
                <FlexContainerDiv>
                    <EnterUserNameDiv>
                        <form onSubmit={this.play.bind(this)}>
                            <label for="userName">Username: </label>
                            <input type="text" name="name" id="userName" />
                            <br/>
                            <label for="spectateCheckbox">Spectate Only: </label>
                            <input type="checkbox" name="spectateCheckbox"
                                   checked={true}
                                   disabled
                                   />
                            <br/>
                            <PlayButton type="submit">Play</PlayButton>
                            { error }
                        </form>

                    </EnterUserNameDiv>
                </FlexContainerDiv>
            </PaddedContainer>
        );
    }
}

export default WelcomeScene;
