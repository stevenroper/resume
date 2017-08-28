import React from 'react';

import colors from 'config/colors';

class Resume_Container extends React.Component {

  getStyles() {
    return {
      nameHero: {
        width: '100%',
        backgroundColor: colors.orange,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      name: {
        margin: '30px 0',
        color: '#fff',
        fontSize: '5em',
        fontWeight: 'bold',
        letterSpacing: '5px',
      },
      contactInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 10px',
        backgroundColor: colors.blue,
        color: '#fff',
        fontSize: '1.3em',
      }
    };
  }

  render() {
    let styles = this.getStyles();

    return (
      <div>
        <div style={styles.nameHero}>
          <span style={styles.name}>STEVEN ROPER</span>
        </div>
        <div style={styles.contactInfo}>
          <span>555.555.5555</span>
          <span>REPLACEME@gmail.com</span>
          <span>github.com/stevenroper</span>
        </div>
      </div>
    );
  }
}

export default Resume_Container;
