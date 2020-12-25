
import React, { useContext } from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import '../../../Style/Navigation.css';

const Navigation = () => {
    const links = ['Home','Event','Contact'];
    const [loginUser,setLoginUser] = useContext(UserContext);
   
   
    const linkStyle ={
         textDecoration: 'none',
         fontSize:'16px',
         fontWeight:'600'    
    };

    const handleSignOut = () =>{
        sessionStorage.clear();
        setLoginUser({});
    }

    return (
    <header>  
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
           <Container>
             <Link to='/'>
               <Navbar.Brand style={{width:'130px'}}>Business Man</Navbar.Brand>
             </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                   <Link className="mr-5 mt-2" to='/home' style={linkStyle}>{links[0]}</Link>
                   <Link className="mr-5 mt-2" to='/event' style={linkStyle}>{links[1]}</Link>
                   <Link className="mr-5 mt-2" to='/contact' style={linkStyle}>{links[2]}</Link>

                    {loginUser.email || loginUser.currentEmail? (
                    <>
                    <Dropdown>
                      <Dropdown.Toggle className="bg-transparent text-dark drop">
                        {loginUser.name|| loginUser.currentName}
                       <span className="profile-pic">
                         <img src={loginUser.photoURL||loginUser.currentPhotoUrl} alt="login-user-pic" className="img-fluid" />
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                       <Link to="/dashboard">
                         <Dropdown.Item>Dashboard</Dropdown.Item>
                      </Link>
                      <Dropdown.Item onClick={handleSignOut}>
                        Sign Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                 </>)
                 
                 : (
                     <Link style={linkStyle} to="/sign-in" className="login-button bg-primary text-white rounded-sm mt-1"> Login</Link>
                  )    
                 }  
                </Nav>
            </Navbar.Collapse>
           </Container>
        </Navbar>
   </header>
    );
};

export default Navigation;

