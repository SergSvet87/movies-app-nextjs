import { FC } from 'react';
import { headingType } from '../types';

type headingProps = {
  tags: headingType,
};

const Heading = ({ className, text, tag }) => {
  // const {tag, className, text} = tags

  const Tag = tag || 'h1';
  return <Tag className={className}>{text}</Tag>;
};

export default Heading;
