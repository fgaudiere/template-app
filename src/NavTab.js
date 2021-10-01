import { Component } from 'react';

export default class NavTab extends Component {
    render() {
        return (
            <div style={{ width: '100%'}}>
                <ul className="nav-nav-tabs" /*style={{backgroundColor: 'none', display: 'flex', borderBottom: '3px solid #AF007c'}}*/>
                {
                this.props.tabs.map(tab => {
                    const active = (tab === this.props.selected ? 'active ' : '' );
                return (
                    <li className="nav-item" key={ tab }>
                        <a href='#' className={"nav-link-" + active } onClick={ () => this.props.setSelected(tab) }>
                           <strong> { tab } </strong>
                         </a>
                    </li>
                );
            })
        }
                 </ul>
                 <span>
                 { this.props.children }
                 </span>
            </div>
            
            
            
        );
    }
}