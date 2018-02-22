import React from 'react';

export default class Grid extends React.Component {
	render() {
		if(!this.props.show) {
			return <div></div>;
		} else if (this.props.mainState.result.error) {
			return <div>Error: {this.props.mainState.result.error}</div>;
		} else if (!this.props.mainState.isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<table>
					<tbody>
						<tr>
							<th>First name</th>
							<th>Last name</th>
							<th>Email</th>
							<th>Edit</th>
							<th>Remove</th>
						</tr>
						
						{this.props.mainState.items.map(item => (
						<tr key={item.id}>
							<td>{item.first_name}</td>
							<td>{item.last_name}</td>
							<td>{item.email}</td>
							<td><button className="btn" onClick={() => this.props.showEdit(item)}>Edit</button></td>
							<td><button className="btn" onClick={(e, id) => this.props.removeRecord(e, item.id)}>Remove</button></td>
						</tr>
						))}
					</tbody>
				</table>
			)
		}
	}
};