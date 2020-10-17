import * as React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { environment } from './environment'
import './index.scss'
import Colleagues from './component/colleaguesQuery'

(async () => {

	const client = new ApolloClient({
		uri: environment.serverUrl + '/graphql'
	});

	render(<ApolloProvider client={ client }>
		<Colleagues />
	</ApolloProvider>, document.getElementById('root'))

})();