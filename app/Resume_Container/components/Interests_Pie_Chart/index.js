import React from 'react';

import { PieChart, Pie, Cell, LabelList } from 'recharts';

import colors from 'config/colors';

const otherInterests = [
  {
    name: 'Architecture',
    value: 20,
    color: colors.blue,
  },
  {
    name: 'Knitting',
    value: 10,
    color: colors.orange,
  },
  {
    name: 'Collecting Hobbies',
    value: 10,
    color: colors.gray
  },
  {
    name: 'My Dog',
    value: 30,
    color: colors.blue,
  },
  {
    name: 'Urban Farming',
    value: 15,
    color: colors.yellow,
  },

  {
    name: 'Film',
    value: 15,
    color: colors.mintGreen,
  },
];

import styles from './styles.css';


class Interests_Pie_Chart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
    };

    this.windowWidthSet = this.windowWidthSet.bind(this);
  }

  windowWidthSet() {
    this.setState({
      windowWidth: window.innerWidth,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowWidthSet);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowWidthSet);
  }

  render() {
    return (
      <div className={styles.container}>
        <PieChart
          height={this.state.windowWidth < 600 ? 200 : 300}
          width={this.state.windowWidth < 600 ? 350 : 500}
        >
          <Pie
            data={otherInterests}
            innerRadius={0}
            // outerRadius={50}
            dataKey='value'
          >
              {
                otherInterests.map( (interest, index) => <Cell key={`interest-${index}`} fill={interest.color} />)
              }
              <LabelList dataKey='name' position='outside' fill='#000' offset={10} className={styles.labels}/>
          </Pie>

        </PieChart>
      </div>
    );
  }
}

export default Interests_Pie_Chart;
