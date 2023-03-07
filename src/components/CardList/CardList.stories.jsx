import React from 'react';
import { CardList } from './CardList';
import '../../index.css';

export default {
  title: 'CardList',
  component: CardList,
};

const Template = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'CardList basic',
};
