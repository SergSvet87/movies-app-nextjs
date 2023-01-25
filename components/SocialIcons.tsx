import styles from '../styles/SocialIcons.module.scss';

const SocialIcons = ({ icons }) => (
  <ul className={styles.social}>
    {icons.map((icon) => (
      <li className={styles.socialItem} key={icon._id}>
        <a
          target="_blank"
          rel="noreferrer"
          href={icon.href}
          className="social-link">
          <img
            className={styles.socialImg}
            src={icon.path}
            alt={icon.name}
            width={icon.size}
            height={icon.size}
          />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialIcons;
