import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ColleaguesList from './colleaguesList';
import ColleaguesFilter from './colleaguesFilter';

export interface Colleague {
	id: number;
	name: string;
	email: string;
	phoneNumber: string;
	office: string;
	tagLine: string;
	mainText: string;
	gitHub: string;
	twitter: string;
	stackOverflow: string;
	linkedIn: string;
	imagePortraitUrl: string;
	imageBodyUrl: string;
	imageWallOfLeetUrl: string;
	highlighted: string;
}

interface ColleagueData {
  	getColleagues: Colleague[];
}

interface SearchColleagueData {
  	searchColleagues: Colleague[];
}

interface ColleaguesVars {
  	take: number;
	skip: number;
	orderByField: string;
}

interface SearchColleaguesVars {
  	searchTerm: string;
}

const colleaguesQuery = gql`
	query colleagues($take:Int, $skip:Int, $orderByField:String) {
		getColleagues(take: $take, skip: $skip, orderByField: $orderByField) {
			id,
			name,
			email,
			phoneNumber,
			office,
			tagLine,
			mainText,
			gitHub,
			twitter,
			stackOverflow,
			linkedIn,
			imagePortraitUrl
			imageBodyUrl,
			imageWallOfLeetUrl,
			highlighted
		}
	}
`;

const searchColleaguesQuery = gql`
	query colleagues($searchTerm:String) {
		searchColleagues(searchTerm: $searchTerm) {
			id,
			name,
			email,
			phoneNumber,
			office,
			tagLine,
			mainText,
			gitHub,
			twitter,
			stackOverflow,
			linkedIn,
			imagePortraitUrl
			imageBodyUrl,
			imageWallOfLeetUrl,
			highlighted
		}
	}
`;

const ColleaguesQueryComponent = () => {

	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const [orderByField, setOrderByField] = useState('name');
	const [searchTerm, setSearchTerm] = useState('a');

	if (searchTerm !== '') {

		const searchVariables:SearchColleaguesVars = {
			searchTerm
		};

		return <div className='colleagues-query'>
			<ColleaguesFilter
				orderByField={ orderByField }
				setOrderByField={ setOrderByField }
				setSearchTerm={ setSearchTerm } />
			<Query<SearchColleagueData, SearchColleaguesVars> query={ searchColleaguesQuery } variables={ searchVariables }>
				{({ data }) => {
					return <ColleaguesList
						isLoadingMore={ isLoadingMore }
						colleagues={ data?.searchColleagues }
						onLoadMore={() => {}}
					/>
				}}
			</Query>
		</div>
	}

	const variables:ColleaguesVars = {
		take: 20,
		skip: 0,
		orderByField
	}

	return <div className='colleagues-query'>
		<ColleaguesFilter
			orderByField={ orderByField }
			setOrderByField={ setOrderByField }
			setSearchTerm={ setSearchTerm } />
		<Query<ColleagueData, ColleaguesVars> query={ colleaguesQuery } variables={ variables }>
			{({ data, fetchMore }) => {
				return <ColleaguesList
					isLoadingMore={ isLoadingMore }
					colleagues={ data?.getColleagues }
					onLoadMore={
						() => {

							setIsLoadingMore(true);

							fetchMore({
								variables: {
									take: 20,
									skip: data?.getColleagues.length,
									orderByField
								},
								updateQuery: (prev:any, { fetchMoreResult }) => {

									setIsLoadingMore(false);

									if (!fetchMoreResult) return prev;

									return Object.assign({}, prev, {
										getColleagues: [...prev.getColleagues, ...fetchMoreResult.getColleagues]
									})
								}
							})
						}
					}
				/>
			}}
		</Query>
	</div>
};

export default ColleaguesQueryComponent;