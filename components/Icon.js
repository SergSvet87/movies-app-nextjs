import Icons from "../public/icons/sprite-socials.svg";
console.log(Icons);

const Icon = ({ name, size }) => (
  <svg
    className={`icon-${name}`}
    width={size}
    height={size}
  >
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);

export default Icon;
