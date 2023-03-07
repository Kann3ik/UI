import React from 'react';
import { Card } from './Card';
import '../../index.css';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: {
      type: 'string',
      description: 'Заголовок карточки'
    },
    content: {
      type: 'string',
      description: 'Контент карточки'
    },
    footer: {
      type: 'string',
      description: 'Подвал карточки'
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card title",
  content: "Card content",
  footer: "footer"
};

export const noFooter = Template.bind({});
noFooter.args = {
  title: "Card title",
  content: "Card content"
};
