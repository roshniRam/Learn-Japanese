import React, { Component } from 'react';

class Menu extends Component {
  
    constructor() {
        super();
        
        this.state = {
            showMenu: false,
        };
    
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
      if (!this.dropdownMenu.contains(event.target)) {
          this.setState({ showMenu: false }, () => {
              document.removeEventListener('click', this.closeMenu);
            });  
        }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu} className="navbar__link">
          Start Learning
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {this.dropdownMenu = element;}}
              >
                <a href="https://github.com/roshniRam/Learn-Japanese/tree/master/Animals"><button> Menu item 1 </button></a>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Menu;