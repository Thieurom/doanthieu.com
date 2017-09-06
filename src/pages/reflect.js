import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import PageContentWrapper, {
    PageContentItem,
    PageContentBlock
} from '../components/PageContent/PageContent';


const ReflectPage = ({ location, data }) => {
    return (
        <div>
            <Navigation activeLocation={location.pathname}/>
            <PageContentWrapper>
                {data.allMarkdownRemark.edges.map(({ node }) =>
                    <PageContentItem key={node.fields.slug}>
                        <PageContentBlock>
                            <h3>{node.frontmatter.title}</h3>
                            <span style={{ fontSize: '14px', fontWeight: '400', color: 'rgb(181,181,181)' }}>{node.frontmatter.date}</span>
                        </PageContentBlock>
                        <div style={{ width: '100%' }} dangerouslySetInnerHTML={{ __html: node.html}} />
                    </PageContentItem>
                )}
            </PageContentWrapper>
        </div>
    );
};


export const query = graphql`
    query ReflectQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YY")
                    }
                    fields {
                        slug
                    }
                    html
                }
            }
        }
    }
`


export default ReflectPage;
