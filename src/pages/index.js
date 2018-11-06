import React from 'react';
import Layout from '../components/Layout';
import { FaSearch } from 'react-icons/fa';
import { graphql, Link } from 'gatsby';

export default class IndexPage extends React.Component {
  render() {
      const props = this.props;
      const parents_tutorial = props.data.allParentTutorial.edges.map(ct => ct.node);
      return (
        <Layout title="Inicio" search={false}>
          <div className="container has-text-centered">
            <div className="section">
              <div className="control has-icons-left has-icons-right">
                <input className="input is-medium is-rounded" type="text" placeholder="Buscar"/>
                <span className="icon is-left">
                  <FaSearch />
                </span>
              </div>
            </div>
            <div className="buttons">
              {
                parents_tutorial.map(( tutorial , key) => (
                  <Link to={ tutorial.slug } className="button is-medium is-info is-outlined">
                    {tutorial.title}
                  </Link>
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
  query {
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
