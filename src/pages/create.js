import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import PageContentWrapper, {
    PageContentItem,
    PageContentBlock
} from '../components/PageContent/PageContent';


const CreatePage = ({ location }) => (
    <div>
        <Navigation activeLocation={location.pathname}/>
        <PageContentWrapper>
            <PageContentItem>
                <PageContentBlock>
                    <h3>My personal website</h3>
                </PageContentBlock>
                <PageContentBlock>
                    <img src='http://via.placeholder.com/1200x800?text=Screenshot' />
                </PageContentBlock>
                <PageContentBlock>
                    <p>My personal website. Made using <a href='https://www.gatsbyjs.org'>Gatsby</a> - a static site generator for React.</p>
                </PageContentBlock>
            </PageContentItem>
        </PageContentWrapper>
    </div>
);


export default CreatePage;
