import * as React from 'react'
import styled from '@emotion/styled'
import Dispilio from 'dispilio'
import { RouteComponentProps } from 'react-router'

interface MatchParams {
	id: string
}

const Wrapper = styled.div`
`

export default class Document extends React.PureComponent<RouteComponentProps<MatchParams>> {
	render() {
		return (
			<Wrapper>
				<Dispilio
					metadataExtractor={(xmlio: any) => {
						const metas = xmlio.select('meta').export({ type: 'data', deep: false })
						return metas
							.map((m: DataNode) => [m.attributes.type, m.attributes.value])
							.filter((m: [string, string]) => m[0] !== 'corr' && m[0] !== 'facs-filename')
					}}
					url={`/api/documents/${this.props.match.params.id}/orig`}
				/>
			</Wrapper>
		)
	}
}