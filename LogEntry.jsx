import React from 'react';

const LogEntry = (props) => (
	<div class="log-entry">
		<tr>
			<td>{props.time}</td>
			<td>{props.complete}</td>
		</tr>
	</div>
)

export default LogEntry;
