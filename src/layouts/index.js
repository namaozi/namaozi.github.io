import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'skyblue',
      marginBottom: '0.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        textAlign: 'center',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{
        margin: 0,
        fontSize: '1.5rem',
        color: 'bisque'
      }}>
        <Link
          to="/"
          style={{
            margin: '10px',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          profile
        </Link>
        /
        <Link
          to="/movie"
          style={{
            margin: '10px',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          movie
        </Link>
        /
        <Link
          to="/score"
          style={{
            margin: '10px',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          score
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="namaozi's page"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <Header/>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
