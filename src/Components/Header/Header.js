import React,{Component} from "react";
import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends Component { 
    render() { 
        return (
            <header>
                <div id="icon">
                    <h1>VTRENDO</h1>
                </div>

                <div id="loginset">
                    <button>Login</button>
                    <button>Register</button>
                </div>

            </header>
        )
    }
}

export default Header