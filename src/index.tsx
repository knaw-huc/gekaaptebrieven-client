import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Search from './search'
import Document from './document'

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 10vh 90vh;
	padding: 0 32px;
`

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('container')
	ReactDOM.render(
		<BrowserRouter>
			<Wrapper>
				<h1><Link to="/">Gekaapte Brieven</Link></h1>
				<Route path="/" exact component={Search} />
				<Route path="/documents/:id" component={Document} />
			</Wrapper>
		</BrowserRouter>,
		container
	)
})
