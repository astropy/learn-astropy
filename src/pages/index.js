import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CallToActionLink from '../components/callToAction';
import PageCover from '../components/pageCover';

export default function IndexPage({ location }) {
  return (
    <Layout>
      <SEO location={location} title="Home" />
      <PageCover>
        <h1>Learn Astropy</h1>
        <p>
          Learn how to use Python for astronomy through tutorials and guides
          that cover Astropy and other packages in the astronomy Python
          ecosystem.
        </p>
      </PageCover>
      <p>
        Astropy is a Python library for use in astronomy. Learn Astropy provides
        a portal to all of the Astropy educational material through a single
        dynamically searchable web page. It allows you to filter tutorials by
        keywords, search for filters, and make search queries in tutorials and
        documentation simultaneously.
      </p>

      <h2>Installing Astropy</h2>
      <p>
        The{' '}
        <a href="https://www.anaconda.com/download/">
          Anaconda Python Distribution
        </a>{' '}
        includes Astropy and is the recommended way to install both Python and
        the Astropy package. Once you have Anaconda installed, use the following
        to update to the latest version of Astropy:
      </p>

      <pre>conda update astropy</pre>
      <p>
        To install Astropy from the source into an existing Python installation,
        see the more detailed{' '}
        <a href="http://astropy.readthedocs.io/en/stable/install.html">
          installation instructions
        </a>{' '}
        in the main Astropy documentation.
      </p>

      <h2>Getting help</h2>
      <p>
        If you have any questions regarding using Astropy there are numerous
        channels for communication. Post to any one of{' '}
        <a href="https://www.astropy.org/help.html">several forums</a> to get
        help from our active, helpful, and friendly community of users and
        developers.
      </p>

      <h2>Contributing content</h2>
      <p>
        We welcome feedback, improvements, and new tutorial content via the{' '}
        <a href="https://github.com/astropy/astropy-tutorials">
          Astropy Tutorials Repository
        </a>{' '}
        on GitHub. If you find a typo or would like to clarify some text, please
        either{' '}
        <a href="https://github.com/astropy/astropy-tutorials/issues/new">
          create an issue
        </a>{' '}
        or make the change yourself and then submit a pull request directly to
        the repository. Questions and/or comments about the tutorials are
        welcome on the{' '}
        <a href="https://groups.google.com/forum/#!forum/astropy-dev">
          astropy-dev
        </a>{' '}
        mailing list. For more information, please see the contributing
        documentation:
      </p>
      <CallToActionLink to="contributing">How to contribute</CallToActionLink>

      <h2>Developing Learn Astropy</h2>
      <p>
        See the developer documentation: Documentation on tutorials
        infrastructure.
      </p>
    </Layout>
  );
}

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
