import React from 'react';

import Header from './components/Header';
import Job_Card from './components/Job_Card'
import Education_Card from './components/Education_Card';
import Section from './components/Section';
import Skills_Tag from './components/Skills_Tag';
import Interests_Pie_Chart from './components/Interests_Pie_Chart';

import colors from 'config/colors';

import styles from './styles.css';

function Resume_Container() {

  return (
    <div className={styles.pageContainer}>
      <div className={styles.resumeContainer}>
        <Header />
        <div className={styles.resumeBody}>
          <div className={styles.work}>
            <Section title='Work'>
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
                    width: '45%',
                  },
                  {
                    name: 'Redux',
                    color: 'orange',
                    width: '15%',
                  },
                  {
                    name: 'Webpack',
                    color: 'mintGreen',
                    width: '20%',
                  },
                  {
                    name: 'C#/.NET',
                    color: 'gray',
                    width: '20%',
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
                      web application. I was a key member in making decisions on what would be the most scalable and sustainable software architecture solutions.
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
                    width: '50%',
                  },
                  {
                    name: 'Selenium',
                    color: 'orange',
                    width: '30%',
                  },
                  {
                    name: 'Rails',
                    color: 'mintGreen',
                    width: '20%',
                  },
                ]}/>
              <Job_Card
                jobTitle='Paid Search Strategist'
                company='Clearlink'
                shortDescription={<span>Automated paid search strategies using JavaScript</span>}
                dates={<span>March 2014 - May 2016</span>}
                longDescription={
                  <div>
                    <p>
                      At Clearlink, I managed several high-spending, national paid search campaigns. To increase spending effeciency and boost ad copy effectiveness,
                      I wrote automated scripts that constantly monitored those accounts. That data was then used to adjust campaigns tactics and ensure our
                      clients' return on investment.
                    </p>
                    <p>
                      I also worked with the design and web teams to secure the best SEO and marketing tactics for our clients' products.
                    </p>
                  </div>
                }
                techStack={[
                  {
                    name: 'JavaScript',
                    color: 'blue',
                    width: '100%',
                  },
                ]}/>
            </Section>
          </div>
          <div className={styles.education}>
            <Section title='Education'>
              <Education_Card
                major='Web Development'
                school='DevMountain'
                dates='August 2015'
                description='Coding bootcamp focused on front-end web development'/>
              <Education_Card
                major='B.A. Media Arts'
                school='Brigham Young University'
                dates='August 2013'
                description='Bachelor of Arts in Media Arts (Film) with an emphasis in audio production'/>
            </Section>
          </div>
          <div className={styles.skillsInterests}>
            <Section title='Skills'>
              <div className={styles.skillsContainer}>
                <Skills_Tag tagName='React' color={colors.blue} />
                <Skills_Tag tagName='Redux' color={colors.blue} />
                <Skills_Tag tagName='AngularJS' color={colors.blue} />
                <Skills_Tag tagName='Webpack' color={colors.orange} />
                <Skills_Tag tagName='Git' color={colors.orange} />
                <Skills_Tag tagName='SQL' color={colors.orange} />
                <Skills_Tag tagName='Jenkins' color={colors.orange} />
                <Skills_Tag tagName='Ruby' color={colors.yellow} />
                <Skills_Tag tagName='Ruby on Rails' color={colors.yellow} />
                <Skills_Tag tagName='Mocha' color={colors.mintGreen} />
                <Skills_Tag tagName='Enzyme' color={colors.mintGreen} />
                <Skills_Tag tagName='Rspec' color={colors.mintGreen} />
                <Skills_Tag tagName='Selenium' color={colors.mintGreen} />
                <Skills_Tag tagName='Quick Learner' color={colors.gray} />
                <Skills_Tag tagName='Detail Oriented' color={colors.gray} />
                <Skills_Tag tagName='Creative' color={colors.gray} />
                <Skills_Tag tagName='Seahorse Training' color={colors.gray} />
              </div>
            </Section>
            <Section title='Other Interests'>
              <Interests_Pie_Chart />
            </Section>
          </div>
          <div className={styles.references}>
            <Section title='References'>
              <div style={{ width: '100%', textAlign: 'center' }}>Available upon request.</div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume_Container;
