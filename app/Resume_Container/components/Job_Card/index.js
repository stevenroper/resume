import React from 'react';
import PropTypes from 'prop-types';

import colors from 'config/colors';


class Job_Card extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  getStyles() {
    return {
      container: {
        margin: '10px 15px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.35)',
        padding: '10px',
        cursor: 'pointer',
        borderTop: `5px solid ${this.props.currentJob ? colors.mintGreen : colors.yellow}`,
        borderRadius: '2px',
      },
      jobTitle: {
        fontSize: '2em',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '-8px',
        color: colors.blue,
      },
      companyName: {
        fontSize: '1.2em',
      },
      divider: {
        border: 0,
        borderTop: `1px solid ${colors.blue}`
      },
      titleBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      dates: {
        fontSize: '1.3em',
      },
      techStackContainer: {
        width: '100%',
        height: '40px',
        display: 'flex',
      },
      techStackTitle: {
        textAlign: 'center',
        fontSize: '1.2em',
        marginBottom: '10px',
        color: colors.blue,
        textTransform: 'uppercase'
      }
    };
  }

  techStackCompose() {
    const styles = this.getStyles();

    let techDivs = this.props.techStack.map( tech => {
        let techStackStyles = {
          height: '100%',
          width: tech.width,
          backgroundColor: colors[tech.color],
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 10px',
        };
        return (
          <div
            key={tech.name}
            style={techStackStyles}>
              {tech.name}
          </div>
        );
    });


    return (
      <div>
        <div style={styles.techStackTitle}>Primary Tech Stack</div>
        <div style={styles.techStackContainer}>
          {techDivs}
        </div>
      </div>
    );
  }

  render() {
    const styles = this.getStyles();

    return (
      <div
        style={styles.container}
        onClick={() => this.setState({ expanded: !this.state.expanded })}>
        <div style={styles.titleBar}>
          <div>
            <div style={styles.jobTitle}>{this.props.jobTitle}</div>
            <div style={styles.companyName}>{this.props.company}</div>
          </div>
          <div style={styles.dates}>{this.props.dates}</div>
        </div>
        <hr style={styles.divider} />
        <div>
          { this.state.expanded
            ? <div>
                {this.props.longDescription}
                <hr style={styles.divider} />
                {this.techStackCompose()}
              </div>
            : this.props.shortDescription
          }
        </div>
      </div>
    );
  }
}

Job_Card.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  shortDescription: PropTypes.node.isRequired,
  currentJob: PropTypes.bool,
  dates: PropTypes.node.isRequired,
  longDescription: PropTypes.node.isRequired,
  techStack: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
    })
  ),
};

export default Job_Card;
