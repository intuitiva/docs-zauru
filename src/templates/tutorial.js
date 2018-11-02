import React from 'react'
import Layout from '../components/Layout';
import { graphql } from 'gatsby'

export default class TutorialTemplate extends React.Component {
  render() {
    const props = this.props;
    //const { slug } = props.pageContext
    const tutorial = props.data.tutorialBySlug;
    const section = props.data.allSection.edges.map(s => s.node);
    console.log(section);
    return (
      <Layout title={tutorial.title}>
        <div>
          <div dangerouslySetInnerHTML={{ __html: tutorial.text.format.html }} />

        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TutorialBySlug($slug: String!) {
    tutorialBySlug: contentfulTutorial(slug: { eq: $slug }) {
      title
      text {
        format: childMarkdownRemark {
          html
        }
      }
    }
    allSection: allContentfulSection( sort: { fields: [pageId] order: ASC } ){
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`