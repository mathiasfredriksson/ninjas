import React from 'react';
import { Colleague } from './colleaguesQuery'

interface Props {
	colleague:Colleague
}

const ColleagueComponent = (props:Props) => {

	return <li className="colleague">
		<div>
			<img src={ props.colleague.imagePortraitUrl } />
		</div>
		<div className='colleague-info'>
			<span>{ props.colleague.name }</span>
			<span>Office: { props.colleague.office }</span>
		</div>
	</li>
};

export default ColleagueComponent;