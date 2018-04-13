import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import LandingPage from './scenes/Landing';
import SignUpPage from './scenes/SignUp';
import SignInPage from './scenes/SignIn';
import PasswordForgetPage from './scenes/PasswordForget';
import DashboardPage from './scenes/Dashboard';
import AccountPage from './scenes/Account';

import Navigation from './components/Navigation';
import withAuthentication from './components/Session/withAuthentication';
import * as routes from './constants/routes';


// import { newUserLanded } from './actions/socketActions';

// import WelcomeScene from './scenes/welcomeScene';

const ContainerDiv = styled.div`
overflow: hidden;
position: absolute;
background-color: black;
bottom:0;
left:0;
top:0;
right: 0;
`

const ConnectionIndicatorH2 = styled.h2`
position: absolute;
color: white;
bottom:20px;
left:20px;
`

const App = () =>
<Router>
    <div className="app">
        <Navigation />

        <hr/>

        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
        <Route exact path={routes.DASHBOARD} component={() => <DashboardPage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />

        <hr/>

        <span>Found in <a href="https://roadtoreact.com/course-details?courseId=TAMING_THE_STATE">Taming the State in React</a></span> | <span>Star the <a href="https://github.com/rwieruch/react-redux-firebase-authentication">Repository</a></span> | <span>Receive a <a href="https://www.getrevue.co/profile/rwieruch">Developer's Newsletter</a></span>
    </div>
</Router>

export default withAuthentication(App);

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { onResize } from './actions/resizeActions'
// import { setMenuDrawerState  } from './actions/uiStateActions'
//
// import MenuBurgerButton from './components/MenuBurgerButton';
// import MenuDrawer from './components/MenuDrawer';
// import InfoBar from './components/InfoBar';
// import DashboardButton from './components/DashboardButton';
// import styled from 'styled-components';
//
// import SettingsScene from './scenes/Settings';
// import PaytableScene from './scenes/Paytable';
//
// // import BetConsoleScene from './scenes/BetConsole';
// // import AutoPlayConsoleScene from './scenes/AutoPlayConsole';
//
// import bgImg from '../assets/scene-backgrounds/bgfruittile224x222.png' // relative path to image
//
//
// const ContainerDiv = styled.div`
//     overflow: hidden;
//     position: absolute;
//     background: url(${ bgImg });
//     bottom:0;
//     left:0;
//     top:0;
//     right: 0;
// `
//
//
// @connect((store)=>{
//     return {
//         uiState: store.uiState
//     };
// })
// class App extends Component {
//
//     handleResize(event) {
//         this.props.dispatch(onResize(event))
//     }
//
//     componentDidMount() {
//         window.addEventListener('resize', ::this.handleResize)
//     }
//
//     componentWillUnmount() {
//         window.removeEventListener('resize', ::this.handleResize)
//     }
//
//     render() {
//         return (
//             <ContainerDiv>
//
//                 <SettingsScene></SettingsScene>
//                 <PaytableScene></PaytableScene>
//                 {/* <PaytableScene></PaytableScene>
//                 <BetConsoleScene></BetConsoleScene>
//                 <AutoPlayConsoleScene></AutoPlayConsoleScene> */}
//
//                 <MenuDrawer>
//                 </MenuDrawer>
//
//                 <MenuBurgerButton>
//                 </MenuBurgerButton>
//
//                 <DashboardButton>
//                 </DashboardButton>
//
//                 <InfoBar>
//                 </InfoBar>
//
//             </ContainerDiv>
//         );
//     }
// }
//
// export default App;
