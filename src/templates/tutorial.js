import React from 'react'
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby'

export default class TutorialTemplate extends React.Component {
  render() {
    const props = this.props;
    //const { slug } = props.pageContext
    const tutorial = props.data.tutorialBySlug;
    const childs_tutorial = props.data.allChildTutorial.edges.map(ct => ct.node);
    const parents_tutorial = props.data.allParentTutorial.edges.map(ct => ct.node);
    const current_parent_id = tutorial.isParent ? tutorial.id : (tutorial.parentTutorial ? tutorial.parentTutorial.id : 0);
    console.log(current_parent_id);
    console.log(tutorial);
    return (
      <Layout title={tutorial.title}>
        <div>
          <div>
            <ul>
            {
              parents_tutorial.map(( tutorial , key) => (
                <li>
                  <Link to={tutorial.slug}>{tutorial.title}</Link>
                  {
                    current_parent_id === tutorial.id && 
                    <ul>
                    {
                      childs_tutorial.map((tc, key) => (
                          current_parent_id === tc.parentTutorial.id && <li> <Link to={tc.slug}>{tc.title}</Link></li>
                      ))
                    }
                    </ul>
                  }
                </li>
              ))
            }
            </ul>
          </div>
          <div dangerouslySetInnerHTML={{ __html: tutorial.text.format.html }} />
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ($slug: String!) {
    tutorialBySlug: contentfulTutorial(slug: { eq: $slug }) {
      id
      title
      slug
      isParent
      text {
        format: childMarkdownRemark {
          html        
        }
      }
      parentTutorial {
        id
        title
        slug
      }
    }
    allChildTutorial: allContentfulTutorial(filter: {isParent: {eq: false }}){
      edges {
        node {
          id
          title
          slug
          parentTutorial {
            id
            title
            slug
          }
        }
      }
    }
    allParentTutorial: allContentfulTutorial(filter: {isParent: {eq: true }}, sort: { fields: [pageId] order: DESC }){
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`