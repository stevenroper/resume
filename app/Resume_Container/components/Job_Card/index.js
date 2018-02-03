import React from 'react';
import PropTypes from 'prop-types';

import colors from 'config/colors';

import styles from './styles.css';


class Job_Card extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  techStackCompose() {
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
        <div className={styles.techStackTitle}>Languages & Tools</div>
        <div className={styles.techStackContainer}>
          {techDivs}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div
        className={styles.container}
        style={{ borderTop: `5px solid ${this.props.currentJob ? colors.mintGreen : colors.yellow}` }}
        onClick={() => this.setState({ expanded: !this.state.expanded })}>
          <div className={styles.titleBar}>
            <div className={styles.jobTitle}>{this.props.jobTitle}</div>
            <div className={styles.companyName}>{this.props.company}</div>
            <div className={styles.dates}>{this.props.dates}</div>
          </div>
          <hr className={styles.divider} />
          <div>
            { this.state.expanded
              ? <div>
                  <div className={styles.expandHideIconContainer}>
                    <span className='material-icons'><span className={styles.expandHideIcon}>keyboard_arrow_up</span></span>
                  </div>
                  {this.props.longDescription}
                  <hr className={styles.divider} />
                  {this.techStackCompose()}
                </div>
              : <div>
                  <div>{this.props.shortDescription}</div>
                  <div className={styles.expandHideIconContainer}>
                    <span className='material-icons'><span className={styles.expandHideIcon}>keyboard_arrow_down</span></span>
                  </div>
                </div>
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
