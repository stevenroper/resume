import React from 'react';

import Job_Card from './components/Job_Card'
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
        marginBottom: '20px',
      },
      reverse: {
        unicodeBidi: 'bidi-override',
        direction: 'rtl',
      },
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
          <span style={styles.reverse}>6858.376.108</span>
          <span style={styles.reverse}>moc.liamg@repor.m.nevets</span>
          <span style={styles.reverse}>repornevets/moc.buhtig</span>
        </div>
        <div style={styles.resumeBody}>
          <Job_Card
            jobTitle='Web Developer'
            company='Utah Educational Savings Plan'
            shortDescription={<span>Developed a new front-end architecture using React and Redux for an aging enterprise solution.</span>}
            currentJob={true}
            dates={<span>November 2016 - Current</span>}
            longDescription={
              <div>
                <p>
                  I joined UESP (Utah Educational Savings Plan) to assist a team in the process of rebuilding an outdated .NET web application.
                  While occassionally contributing to the REST API, I have primarily focused on the front-end portion of the rebuild.
                </p>
                <p>
                  At UESP, I am working as a key contributor to not only the code base, but also to the app's UX design, API structure, and best code practices.
                  I also have lead efforts in developing front-end build processes, unit testing, and product design.
                </p>
              </div>
            }
            techStack={[
              {
                name: 'React',
                color: 'blue',
                width: '60%',
              },
              {
                name: 'Redux',
                color: 'orange',
                width: '20%',
              },
              {
                name: 'Webpack',
                color: 'mintGreen',
                width: '10%',
              },
              {
                name: 'C#/.NET',
                color: 'gray',
                width: '10%',
              },
            ]}/>
            <Job_Card
              jobTitle='Automation Engineer'
              company='MasteryConnect'
              shortDescription={<span>Created a custom testing framework with Ruby for MasteryConnect's web application</span>}
              dates={<span>May 2015 - November 2016</span>}
              longDescription={
                <div>
                  <p>
                    While at MasteryConnect, I worked with a team to develop an internal testing framework for running automated UI and data tests against the company's
                    web application. I was a key member in architecture decisions, making decisions on what would be the most scalable and sustainable solutions.
                  </p>
                  <p>
                    I worked with product owners and developers to make sure new features were thoroughly testable. While at MasteryConnect,
                    I also had many opportunities to contribute new features to the Rails application.
                  </p>
                </div>
              }
              techStack={[
                {
                  name: 'Ruby',
                  color: 'blue',
                  width: '70%',
                },
                {
                  name: 'Selenium',
                  color: 'orange',
                  width: '20%',
                },
                {
                  name: 'Rails',
                  color: 'mintGreen',
                  width: '10%',
                },
              ]}/>
        </div>
      </div>
    );
  }
}

export default Resume_Container;
