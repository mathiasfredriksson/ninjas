import React from 'react';
import { Colleague } from './colleaguesQuery'
import GithubLogoImage from './../images/GitHub-Mark-32px.png'
import LinkedInLogoImage from './../images/iconfinder_Circled_Linkedin_svg_5279114.png'
import TwitterLogoImage from './../images/iconfinder_Circled_Twitter_svg_5279123.png'

interface Props {
	colleague: Colleague,
	useListStyle: boolean
}

const ColleagueComponent = (props:Props) => {

	const [isSelected, setIsSelected] = React.useState(false);
	const GithubLogo = props.colleague.gitHub ? <a href={ 'http://github.com/' + props.colleague.gitHub }><img src={ GithubLogoImage } className='logo'/></a> : '';
	const LinkedInLogo = props.colleague.linkedIn ? <a href={ 'http://linkedin.com/' + props.colleague.linkedIn }><img src={ LinkedInLogoImage } className='logo'/></a> : '';
	const TwitterLogo = props.colleague.twitter ? <a href={ 'http://twitter.com/' + props.colleague.twitter }><img src={ TwitterLogoImage } className='logo'/></a> : '';
	const contentClassName = props.useListStyle ? 'colleague-content slim' : 'colleague-content';
	let liClassName = 'colleague';

	if (props.useListStyle) {
		liClassName += ' slim'
	}

	if (isSelected) {
		liClassName += ' selected';
	}

	return <li className={ liClassName }
		onMouseOver={ e => setIsSelected(true) }
		onMouseOut={ e => setIsSelected(false) }>
		<div className={ contentClassName }>
			<img src={ props.colleague.imagePortraitUrl } className='colleague-profile'/>
			<div className='colleague-info'>
				<div className='flex-1'>
					<span>{ props.colleague.name }</span>
					<br />
					<span>Office: { props.colleague.office }</span>
				</div>
				<div>
					{ GithubLogo }
					{ LinkedInLogo }
					{ TwitterLogo }
				</div>
			</div>
		</div>
	</li>
};

export default ColleagueComponent;
