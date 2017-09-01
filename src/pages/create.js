import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import PageContentWrapper, {
    PageContentItem,
    PageContentSub,
    PageContentMain,
    PageContentBlock
} from '../components/PageContent/PageContent';


const CreatePage = ({ location }) => (
    <div>
        <Navigation activeLocation={location.pathname}/>
        <PageContentWrapper>
            <PageContentItem>
                <PageContentSub>
                    <h4>P-1</h4>
                </PageContentSub>
                <PageContentMain>
                    <PageContentBlock>
                        <h3>My personal website</h3>
                    </PageContentBlock>
                    <PageContentBlock>
                        <img src='http://via.placeholder.com/1200x800?text=Screenshot' />
                    </PageContentBlock>
                    <PageContentBlock>
                        <p>This is my first project. And yes, you're watching (or reading) it right now! </p>
                        <p>I created this using <a href='https://www.gatsbyjs.org'>Gatsby</a> - a static site generator for React.</p>
                    </PageContentBlock>
                </PageContentMain>
            </PageContentItem>
        </PageContentWrapper>
    </div>
);


export default CreatePage;
