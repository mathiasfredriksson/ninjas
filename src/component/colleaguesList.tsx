import React, { useEffect } from 'react';
import { Colleague } from './colleaguesQuery'
import ColleagueComponent from './colleague'

interface ListProps {
	colleagues: Colleague[] | undefined;
	onLoadMore: any;
	isLoadingMore: boolean;
	useListStyle: boolean;
}

const ColleaguesList = (props:ListProps) => {

	const handleScroll = (e:any) => {

		if (props.isLoadingMore) {

			return;
		}

		const { currentTarget } = e;

		if (currentTarget.scrollTop + currentTarget.clientHeight >= currentTarget.scrollHeight ) {

			props.onLoadMore();
		}
	}

	useEffect(() => {

		window.addEventListener('scroll', handleScroll);

		return () => {

			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	const listStyle = props.useListStyle ? 'colleagues-list' : 'colleagues-cards';

	return <div className='colleagues-container' onScroll={ e => handleScroll(e) }>
		<ul className={ listStyle }>
			{
				props.colleagues?.map((colleague) => (
					<ColleagueComponent
						useListStyle={ props.useListStyle }
						key={ colleague.id }
						colleague={ colleague } />
				))
			}
		</ul>
	</div>
};

export default ColleaguesList;