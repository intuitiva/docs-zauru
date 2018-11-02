import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../components/Layout';

const Tutorial = () => (
  <StaticQuery
    query={graphql`
      query Tutorial {
        contentfulTutorial {
          title
          createdAt
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `}
    render={({
      contentfulTutorial: {
        title,
        createdAt,
        text: {
          childMarkdownRemark: { html },
        },
      },
    }) => (
      <Layout>
        <h1>{title}</h1>
        <small>Created on {moment(createdAt).format('L')}</small>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )}
  />
);

export default Tutorial;
