import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import PageContentWrapper, {
    PageContentItem,
    PageContentSub,
    PageContentMain,
    PageContentBlock
} from '../components/PageContent/PageContent';
import ProjectList from '../components/ProjectList/ProjectList';
import frontendProjects from './projects/frontends.yaml';
import backendProjects from './projects/backends.yaml';


const LearnPage = ({ location }) => (
    <div>
        <Navigation activeLocation={location.pathname}/>
        <PageContentWrapper>
            <PageContentItem>
                <PageContentSub>
                    <h4>06/2017</h4>
                </PageContentSub>
                <PageContentMain>
                    <PageContentBlock>
                        <h3>Back End Development Program</h3>
                        <span>freeCodeCamp</span>
                    </PageContentBlock>
                    <PageContentBlock>
                        <p>freeCodeCamp is a nonprofit organization that consists of an interactive learning web platform, an online community forum, chat rooms, Medium publications, and local organizations that intend to make learning web development accessible to anyone.</p>
                        <p>This program requires building 10 dynamic web applications, which involves setup web server, database, API, authentication, ... Apps deployed on Heroku, source code hosted on Github.</p>
                    </PageContentBlock>
                    <PageContentBlock>
                        <h5>Certification</h5>
                        <img src='http://via.placeholder.com/1200x800?text=Certification' />
                    </PageContentBlock>
                    <PageContentBlock>
                        <h5>Featured Projects</h5>
                        <ProjectList data={backendProjects} />
                    </PageContentBlock>
                </PageContentMain>
            </PageContentItem>

            <PageContentItem>
                <PageContentSub>
                    <h4>04/2017</h4>
                </PageContentSub>
                <PageContentMain>
                    <PageContentBlock>
                        <h3>Server-side Development with NodeJS</h3>
                        <span>Coursera</span>
                    </PageContentBlock>
                    <PageContentBlock>
                        <p>Coursera provides universal access to the world’s best education, partnering with top universities and organizations to offer courses online.</p>
                        <p>This is an online non-credit course authorized by The Hong Kong University of Science and Technology and offered through Coursera</p>
                    </PageContentBlock>
                    <PageContentBlock>
                        <h5>Certification</h5>
                        <img src='http://via.placeholder.com/1200x800?text=Certification' />
                    </PageContentBlock>
                </PageContentMain>
            </PageContentItem>

            <PageContentItem>
                <PageContentSub>
                    <h4>11/2016</h4>
                </PageContentSub>
                <PageContentMain>
                    <PageContentBlock>
                        <h3>Front End Development Program</h3>
                        <span>freeCodeCamp</span>
                    </PageContentBlock>
                    <PageContentBlock>
                        <p>This program requires building 10 front end projects, from static pages (HTML and CSS only) to more complex and highly-interactive ones like games, consuming third-party API apps, ... All code hosted on Codepen.io.</p>
                    </PageContentBlock>
                    <PageContentBlock>
                        <h5>Certification</h5>
                        <img src='http://via.placeholder.com/1200x800?text=Certification' />
                    </PageContentBlock>
                    <PageContentBlock>
                        <h5>Featured Projects</h5>
                        <ProjectList data={frontendProjects} />
                    </PageContentBlock>
                </PageContentMain>
            </PageContentItem>
        </PageContentWrapper>
    </div>
);


export default LearnPage;
