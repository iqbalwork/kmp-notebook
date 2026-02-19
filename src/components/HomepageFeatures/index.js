import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Unified Logic, Native UI',
    Svg: require('@site/static/img/unified_logic.svg').default,
    description: (
      <>
        Learn how to share your core business logic, networking, and data persistence layers across iOS, Android, Desktop, and Web while maintaining the freedom to build beautiful, 100% native User Interfaces.
      </>
    ),
  },
  {
    title: 'Practical Hands-on Labs',
    Svg: require('@site/static/img/practical_hands_on.svg').default,
    description: (
      <>
        Move beyond theory with step-by-step modules. Our documentation is structured as a series of progressive labs, taking you from a basic "Hello World" to a fully functional multiplatform production-ready application.
      </>
    ),
  },
  {
    title: 'Modern Tech Stack',
    Svg: require('@site/static/img/modern.svg').default,
    description: (
      <>
        Deep dive into the modern Kotlin ecosystem. Master the latest tools including Compose Multiplatform for shared UI, Ktor for networking, and SQLDelight for local databases, all within a single cohesive workflow.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
