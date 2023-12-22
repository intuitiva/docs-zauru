import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { FaBook } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

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
    allChildTutorial: allContentfulTutorial(
      filter: { isParent: { eq: false } }
      sort: { fields: [pageId], order: ASC }
    ) {
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
    allParentTutorial: allContentfulTutorial(
      filter: { isParent: { eq: true } }
      sort: { fields: [pageId], order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;

const TutorialTemplate = (props) => {
  const { slug } = props.pageContext;
  const tutorial = props.data.tutorialBySlug;
  const childs_tutorial = props.data.allChildTutorial.edges.map(
    (ct) => ct.node
  );
  const parents_tutorial = props.data.allParentTutorial.edges.map(
    (ct) => ct.node
  );
  const current_parent_id = tutorial.isParent
    ? tutorial.id
    : tutorial.parentTutorial
    ? tutorial.parentTutorial.id
    : 0;
  const childs_tutorial_column_1 = childs_tutorial
    .filter((tc, index) => tc.parentTutorial.id === current_parent_id)
    .filter((tc, index) => index % 3 === 0);
  const childs_tutorial_column_2 = childs_tutorial
    .filter((tc, index) => tc.parentTutorial.id === current_parent_id)
    .filter((tc, index) => index % 3 === 1);
  const childs_tutorial_column_3 = childs_tutorial
    .filter((tc, index) => tc.parentTutorial.id === current_parent_id)
    .filter((tc, index) => index % 3 === 2);

  return (
    <Layout title={tutorial.title} search={true}>
      <div className="columns">
        <div id="right" className="column">
          <div className="bottom">
            <div
              className="content docSearch-content"
              dangerouslySetInnerHTML={{ __html: tutorial.text.format.html }}
            ></div>

            {tutorial.isParent === true &&
              childs_tutorial_column_1.map((tc, i) => (
                <div className="tile is-ancestor" key={i}>
                  {childs_tutorial_column_1[i] && (
                    <div className="tile is-parent is-4">
                      <Link
                        to={`${
                          childs_tutorial_column_1[i].slug.startsWith("/")
                            ? childs_tutorial_column_1[i].slug
                            : "/" + childs_tutorial_column_1[i].slug
                        }`}
                        className="tile is-child box lvl1"
                      >
                        {childs_tutorial_column_1[i].title}
                      </Link>
                    </div>
                  )}
                  {childs_tutorial_column_2[i] && (
                    <div className="tile is-parent is-4">
                      <Link
                        to={`${
                          childs_tutorial_column_2[i].slug.startsWith("/")
                            ? childs_tutorial_column_2[i].slug
                            : "/" + childs_tutorial_column_2[i].slug
                        }`}
                        className="tile is-child box lvl1"
                      >
                        {childs_tutorial_column_2[i].title}
                      </Link>
                    </div>
                  )}
                  {childs_tutorial_column_3[i] && (
                    <div className="tile is-parent is-4">
                      <Link
                        to={`${
                          childs_tutorial_column_3[i].slug.startsWith("/")
                            ? childs_tutorial_column_3[i].slug
                            : "/" + childs_tutorial_column_3[i].slug
                        }`}
                        className="tile is-child box lvl1"
                      >
                        {childs_tutorial_column_3[i].title}
                      </Link>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div id="left" className="column is-narrow">
          <div className="bottom">
            <nav className="panel">
              <p className="panel-heading">Tutoriales</p>
              {parents_tutorial.map((tutorial, key) => (
                <div key={key}>
                  <Link
                    to={`${
                      tutorial.slug.startsWith("/")
                        ? tutorial.slug
                        : "/" + tutorial.slug
                    }`}
                    className={[
                      "panel-block",
                      " lvl0",
                      current_parent_id === tutorial.id ? " is-active" : "",
                    ].join("")}
                  >
                    <span className="panel-icon">
                      <FaBook />
                    </span>
                    {tutorial.title}
                  </Link>
                  {current_parent_id === tutorial.id &&
                    childs_tutorial.map(
                      (tc, key) =>
                        current_parent_id === tc.parentTutorial.id && (
                          <Link
                            key={key}
                            to={`${
                              tc.slug.startsWith("/") ? tc.slug : "/" + tc.slug
                            }`}
                            className={[
                              "panel-block",
                              "lvl1",
                              "child",
                              slug === tc.slug ? "is-active" : "",
                            ].join(" ")}
                          >
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="panel-icon">
                              <FaFileAlt />
                            </span>
                            {tc.title}
                          </Link>
                        )
                    )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TutorialTemplate;
