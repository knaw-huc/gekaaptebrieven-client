import * as React from 'react'
import FacetedSearch, { Facets, ListFacet, FullTextSearch, RangeFacet, Reset } from 'huc-faceted-search'
import { HucSearchResults } from 'huc-ui-components'
import styled from '@emotion/styled';
import ResultBodyComponent from './result-body'

const Wrapper = styled.div`
	display: grid;
	grid-column-gap: 32px;
	grid-template-columns: 300px auto;
`

interface State {
	results: any
}
export default class Search extends React.PureComponent<{}, State> {
	private fullTextInputRef: React.RefObject<any>
	state: State = {
		results: {
			hits: [],
			total: 0
		}
	}
	render() {
		return (
			<Wrapper>
				<FacetedSearch
					backend="elasticsearch"
					onChange={(request: any, response: any, _query: any) => {
						this.receiveSearchResults(request, response)
					}}
					url="/api/documents/search"
				>
					<FullTextSearch
						autoSuggest={() => new Promise(() => ['a', 'b'])}
						ref={this.fullTextInputRef}
					/>
					<Reset />
					<Facets>
						<RangeFacet
							field="date"
							title="Date range"
							type="timestamp"
						/>
						<ListFacet
							field="sender"
							title="Senders"
						/>
						<ListFacet
							field="recipient"
							title="Recipients"
						/>
						<ListFacet
							field="senderloc"
							title="Sender Locations"
						/>
						<ListFacet
							field="recipientloc"
							title="Recipient Locations"
						/>
					</Facets>
				</FacetedSearch>
				<div>
					<HucSearchResults
						resultBodyComponent={ResultBodyComponent}
						searchResults={this.state.results}
					/>
				</div>
			</Wrapper>
		)	
	}

	private receiveSearchResults(_query: any, results: any) {
		console.log(results)
		const nextResults = {
			aggregations: results.aggregations,
			hits: results.hits.hits
				.map((hit: any) => ({
					...{ id: hit._id },
					...hit._source
				})),
			total: results.hits.total,
		}

		this.setState({ results: nextResults })
	}
}