import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.userContainer}>
        <img
          className={styles.userImg}
          src={image}
          alt={name}
          width={200}
          height={200}
        />
        <p className={styles.userName}>{name}</p>
        <p className={styles.userInfo}>@{tag}</p>
        <p className={styles.userInfo}>{location}</p>
      </div>

      <ul className={styles.userStatisticList}>
        <li className={styles.userStatisticItem}>
          <span>Followers</span>
          <span className={styles.userStatisticValue}>{followers}</span>
        </li>
        <li className={styles.userStatisticItem}>
          <span>Views</span>
          <span className={styles.userStatisticValue}>2{views}</span>
        </li>
        <li className={styles.userStatisticItem}>
          <span>Likes</span>
          <span className={styles.userStatisticValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
