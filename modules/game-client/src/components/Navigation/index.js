import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase';

import * as routes from '../../constants/routes';
import styled from 'styled-components';

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
`

const TitleAndIcon = styled.span`
    
`

const NavUl = styled.ul`
list-style: none;
display: flex;
justify-content: flex-end;
align-items: center;
background-color: #444;
padding: 10px;
margin: 0;
`

const NavLi = styled.li`
padding: 10px;
`

const StyledButton = styled.span`
text-decoration: none;
color: #999;
display: block;
cursor: pointer;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: #999;
display: block;
`


const Navigation = ({ authUser }) =>
<div>
    <header>
        <TitleAndIcon>
        </TitleAndIcon>

        { authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </header>
</div>

const NavigationAuth = () =>

<NavUl>
    <NavLi><StyledLink to={routes.DASHBOARD}>Dashboard</StyledLink></NavLi>
    <NavLi><StyledButton
        onClick={auth.doSignOut}
        >
            Sign Out
        </StyledButton>
    </NavLi>
</NavUl>


const NavigationNonAuth = () =>
<NavUl>
    <NavLi><StyledLink to={routes.SIGN_IN}>Sign In</StyledLink></NavLi>
    <NavLi><StyledLink to={routes.SIGN_UP}>Sign Up</StyledLink></NavLi>
</NavUl>


const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
