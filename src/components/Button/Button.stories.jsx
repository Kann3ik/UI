import React from 'react';
import { Button } from './Button';
import '../../index.css';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Вариант внешнего вида',
      defaultValue: 'Primary',
      options: ['Primary', 'Secondary', 'Link', 'Text'],
      control: {
        type: 'radio'
      }
    },
    type: {
      type: 'string',
      description: 'Тип кнопки',
      defaultValue: 'button',
      options: ['button', 'submit'],
      control: {
        type: 'radio'
      }
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button default',
  variant: "Primary"
};

export const Link = Template.bind({});
Link.args = {
  label: 'Button link',
  variant: "Link"
};

