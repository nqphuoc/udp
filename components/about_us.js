import React from 'react';
import styles from './about_us.module.css';
import SectionHeader from './section_header';

const AboutUs = () => {

    return (
        <div className='grid' id='about'>
            <div style={{flex: 1}}>
                <img style={{width: '100%'}} src='/img/logo.png' />
            </div>
            <div className='about_detail' style={{flex: 2, display: 'flex', flexDirection: 'column', fontSize: 15}}>
                <SectionHeader name='about us' align='left' />
                <p>Established in Seoul, S. Korea in 2020, UDP Sol (User Data Processing Solution) is an entrepreneur gathering Data Scientists and Natural Language Processing Specialists.</p>
                <p>The mission of UDP Sol is to provide services and solutions to benefit customers in three aspects.</p>
                <h3>Insightful Benefits</h3>
                <div className='ul'>
                    <ul>
                        <li>Reduce Costs from Day One</li>
                    </ul>
                    <ul>
                        <li>Increase Customer Satisfaction</li>
                    </ul>
                    <ul>
                        <li>Boost Employee Productivity</li>
                    </ul>
                </div>
                <p>UDP Sol has recently supported English, Korean, and Vietnamese languages and focuses on developing the following services and solutions.</p>
                <h3>Language Resources (Corpora)</h3>
                <div className='ul'>
                    <ul>
                        <li>Unlabeled Vietnamese Corpus (15 Billions sentences-100GB)</li>
                    </ul>
                    <ul>
                        <li>English-Korean Parallel Corpus (1.25 Million sentence pairs)</li>
                    </ul>
                    <ul>
                        <li>Korean-Vietnamese Parallel Corpus (450K sentence pairs)</li>
                    </ul>
                </div>

                <h3>Services</h3>
                <div className='ul'>
                    <ul>
                        <li>Automatic Data Annotation API</li>
                    </ul>
                    <ul>
                        <li>English-Korean Parallel Corpus (1.25 Million sentence pairs)</li>
                    </ul>
                    <ul>
                        <li>Korean-Vietnamese Parallel Corpus (450K sentence pairs)</li>
                    </ul>
                </div>

                <h3>Solutions</h3>
                <div className='ul'>
                    <ul>
                        <li>Reduce Costs from Day One</li>
                        <li>Increase Customer Satisfaction</li>
                        <li>Boost Employee Productivity</li>
                        <li>Incididunt ut labore</li>
                    </ul>
                    <ul>
                        <li>Aliquip ex ea commodo</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Exercitation ullamco</li>
                        <li>Lorem ipsum dolor</li>
                    </ul>
                </div>

            </div>
            <style jsx>
            {
                `
                #about {
                    line-height: 24px
                }

                #about ul{
                    margin: 0;
                    padding-inline-start: 0;
                    padding-inline-end: 24px
                }

                #about li {
                    list-style: none;
                }

                #about li:before {
                    content: "✓";
                    color: '#5csf9b';
                    font-size: 11px;
                    padding-right: 8px;
                }
                #about .ul {
                    display: flex;
                    flex-direction: row
                }

                .about_detail{
                    margin-left: 24px;
                }

                @media (max-width: 600px){
                    #about .ul {
                        display: flex;
                        flex-direction: column
                    }

                    .about_detail{
                        margin-left: 0px;
                        margin-top: 24px;
                    }
                }
                `
            }
            </style>
        </div>
    )
}

export default AboutUs;
