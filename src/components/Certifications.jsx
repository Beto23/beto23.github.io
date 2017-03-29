import React from 'react';
import Card from './Card';

import git from './../assets/images/git.jpeg';
import responsive from './../assets/images/Responsive.png';
import ROR from './../assets/images/RubyOnRails.png';
import angularRails from './../assets/images/angularRails.jpg';
import typescript from './../assets/images/typescript.jpg';
import gitLogo from './../assets/images/gitLogo.jpg';
import responsiveLogo from './../assets/images/responsiveLogo.jpg';
import railsLogo from './../assets/images/railsLogo.png';
import angularLogo from './../assets/images/angularLogo.png';
import tsLogo from './../assets/images/tsLogo.png';







export default class Certifications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            certifications: [
                {
                    id: 1,
                    name: 'Git and GitHub',
                    imgTechnology: gitLogo,
                    certification: git,
                    tags: ['Git', 'GitHub']
                },
                {
                    id: 2,
                    name: 'Responsive Design',
                    imgTechnology: responsiveLogo,
                    certification: responsive,
                    tags: ['Html5', 'Css3']
                },
                {
                    id: 3,
                    name: 'Ruby On Rails',
                    imgTechnology: railsLogo,
                    certification: ROR,
                    tags: ['Ruby', 'RubyOnRails']
                },
                {
                    id: 4,
                    name: 'TypeScript',
                    imgTechnology: tsLogo,
                    certification: typescript,
                    tags: ['TypeScript', 'JavaScript']
                },
                {
                    id: 5,
                    name: 'Angular 2 + Rails 5',
                    imgTechnology: angularLogo,
                    certification: angularRails,
                    tags: ['Angular 2', 'RubyOnRails 5']
                }
            ]
        }
    }

    render () {
        var {certifications} = this.state;
        var {image, title, imgCertification} = this.props;
        var handleCard = () => {
            return certifications.map(certification => {
                return (
                    <Card
                    class=""
                    name={certification.name}
                    subImage={certification.imgTechnology}
                    imgGeneral={certification.certification}
                    />
                )
            });
        }
        return(
            <div className="container-section">
                <div className="row around-xs">
                    {handleCard()}
                </div>
            </div>
        )
    }
}