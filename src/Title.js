import  { Component } from 'react';
import logo from './assets/fives-logo.png';

export default class Title extends Component {
    render() {
        const title='sujet test 2 fives cort\'X'
        return(
            <div className='lmj-banner'>
                <img src={logo} alt='Sujet Test 2' className='lmj-logo'/>
                <h1 className='lmj-title'>{ title.toUpperCase() }</h1>
            </div>
        );
    }
} 