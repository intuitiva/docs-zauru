import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
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
    const childs_tutorial_column_1 = childs_tutorial.filter((tc, index) => tc.parentTutorial.id === current_parent_id).filter((tc, index) => index % 3 === 0);
    const childs_tutorial_column_2 = childs_tutorial.filter((tc, index) => tc.parentTutorial.id === current_parent_id).filter((tc, index) => index % 3 === 1);
    const childs_tutorial_column_3 = childs_tutorial.filter((tc, index) => tc.parentTutorial.id === current_parent_id).filter((tc, index) => index % 3 === 2);

    console.log(childs_tutorial);
    console.log(childs_tutorial_column_1);
    console.log(childs_tutorial_column_2);
    console.log(childs_tutorial_column_3);

    return (
      <Layout title={tutorial.title} search={true}>
          <div id="left" className="column">
            <div className="bottom">
              <nav className="panel">
                {
                  parents_tutorial.map(( tutorial , key) => (
                      <div key={key}>
                        <Link to={ tutorial.slug } className={["panel-block", current_parent_id === tutorial.id ? " is-active" : ""].join('')}>
                          <span className="panel-icon">
                            <FaBook />
                          </span>
                          {tutorial.title}

                        </Link>
                        {
                            current_parent_id === tutorial.id &&
                              childs_tutorial.map((tc, key) => (
                                  current_parent_id === tc.parentTutorial.id && 
                                  <Link key={key} to={tc.slug} className={["panel-block", "child", slug === tc.slug ? "is-active" : "" ].join(' ')}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="panel-icon">
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
          </div>
          <div id="right" className="column">
            <div className="bottom">
              <div className="content" dangerouslySetInnerHTML={{ __html: tutorial.text.format.html }} ></div>
              
              {
                tutorial.isParent === true &&
                  childs_tutorial_column_1.map((tc, key) => (
                    
                    <div className="tile is-ancestor">
                      {
                        childs_tutorial_column_1[key] &&
                        <div className="tile is-parent is-4">
                          <article className="tile is-child box">
                            <Link to={childs_tutorial_column_1[key].slug}>
                              {childs_tutorial_column_1[key].title}
                            </Link>
                          </article>
                        </div>
                      }
                      {
                        childs_tutorial_column_2[key] &&
                        <div className="tile is-parent is-4">
                          <article className="tile is-child box">
                            <Link to={childs_tutorial_column_2[key].slug}>
                              {childs_tutorial_column_2[key].title}
                            </Link>
                          </article>
                        </div>
                      }
                      {
                        childs_tutorial_column_3[key] &&
                        <div className="tile is-parent is-4">
                          <article className="tile is-child box">
                            <Link to={childs_tutorial_column_3[key].slug}>
                              {childs_tutorial_column_3[key].title}
                            </Link>
                          </article>
                        </div>
                      }
                    </div>
                  ))
              }
              
            </div>
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