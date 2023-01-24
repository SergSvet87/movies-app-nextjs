const Heading = ({ tag, className, text }) => {
  const Tag = tag || 'h1';
  return <Tag className={className}>{text}</Tag>
}

export default Heading;