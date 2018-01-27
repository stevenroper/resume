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
    name: 'Film',
    value: 15,
    color: colors.mintGreen,
  },
  {
    name: 'My Dog',
    value: 30,
    color: colors.blue,
  },
  {
    name: 'Urban Farm Animals',
    value: 15,
    color: colors.yellow,
  },
  {
    name: 'Collecting Hobbies',
    value: 10,
    color: colors.gray
  }
];


function Interests_Pie_Chart() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PieChart height={300} width={500}>
        <Pie
          data={otherInterests}
          innerRadius={0}
          dataKey='value'
        >
            {
              otherInterests.map( (interest, index) => <Cell key={`interest-${index}`} fill={interest.color} />)
            }
            <LabelList dataKey='name' position='outside' fill='#000' offset={10} style={{ fontWeight: 'bold' }}/>
        </Pie>

      </PieChart>
    </div>
  );
}

export default Interests_Pie_Chart;
