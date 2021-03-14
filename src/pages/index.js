/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Tested',
    imageUrl: 'img/PlcCreator.svg',
    href: 'https://vass6plccreator.bmgk.tech/',
    description: (
      <>
        The library is successfully used in solutions such as PLC CREATOR.
        Allowing to geenrate the PLC code for the VASS6 standard
      </>
    ),
  },
  {
    title: 'TIA PORTAL V16 SUPPORT',
    imageUrl: 'img/TiaV16.svg',
    href: 'https://plctianetlibrary.bmgk.tech/',
    description: (
      <>
        Library with TIA Portal OPENNESS support. It will make your work fully
        automated.
      </>
    ),
  },
  {
    title: 'Adaptable',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        The toolkit allows you to easily synchronize your C # project with the
        TIA library.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, href}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <a href={href} target="_blank" rel="noreferrer">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      {href ? (
        <h3>
          <a href={href} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
      ) : (
        <h3>{title}</h3>
      )}
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Tool for generation PLC Program">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://vass6plccreator.bmgk.tech/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description, href}) => (
                  <Feature
                    href={href}
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
