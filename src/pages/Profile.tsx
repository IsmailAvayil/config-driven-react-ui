import type { ProfileType } from "../types/profile-type";

export default function Profile({
  name,
  role,
  email,
  age,
  location,
  avatar,
  bio,
  styles,
}: ProfileType) {
  return (
    <section className={styles.container}>
      <img src={avatar} alt={name} className={styles.avatar} />

      <div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role}</p>

        <p className={styles.bio}>{bio}</p>

        <div>
          <p className={styles.info}>{email}</p>
          <p className={styles.info}>{location}</p>
          <p className={styles.info}>{age} years</p>
        </div>
      </div>
    </section>
  );
}
