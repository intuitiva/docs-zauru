import React from 'react'
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby'
import 'bulma/css/bulma.css'
import { FaBook } from 'react-icons/fa';
import { FaFileAlt  } from 'react-icons/fa';

export default class TutorialTemplate extends React.Component {
  render() {
    const props = this.props;
    const { slug } = props.pageContext
    const tutorial = props.data.tutorialBySlug;
    const childs_tutorial = props.data.allChildTutorial.edges.map(ct => ct.node);
    const parents_tutorial = props.data.allParentTutorial.edges.map(ct => ct.node);
    const current_parent_id = tutorial.isParent ? tutorial.id : (tutorial.parentTutorial ? tutorial.parentTutorial.id : 0);
    console.log(current_parent_id);
    console.log(tutorial);
    return (
      <Layout title={tutorial.title}>
        <div>
          <div dangerouslySetInnerHTML={{ __html: tutorial.text.format.html }} />

          <nav class="panel">
            <p class='panel-heading'>
              Zauru Docs
            </p>
            {
              parents_tutorial.map(( tutorial , key) => (
                  <div>
                    <Link to={ tutorial.slug } className={["panel-block", current_parent_id === tutorial.id ? " is-active" : ""].join('')}>
                      <span class="panel-icon">
                        <FaBook />
                      </span>
                      {tutorial.title}

                    </Link>
                    {
                        current_parent_id === tutorial.id &&
                          childs_tutorial.map((tc, key) => (
                              current_parent_id === tc.parentTutorial.id && 
                              <Link to={tc.slug} className={["panel-block", slug === tc.slug ? " is-active" : "" ].join('')}>
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              <span class="panel-icon">
                                <FaFileAlt />
                              </span>
                                {tc.title}
                              </Link>
                          ))
                      }
                  </div>
              ))
            }
          </nav>
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
    allChildTutorial: allContentfulTutorial(filter: {isParent: {eq: false }}, sort: { fields: [pageId] order: ASC }){
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
    allParentTutorial: allContentfulTutorial(filter: {isParent: {eq: true }}, sort: { fields: [pageId] order: ASC }){
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