var Appointments = React.createClass({
	getInitialState: function() {
		return {
			appointments: this.props.appointments,
			input_title: 'Random Meeting at Neverland',
			input_appt_time: 'Tomorrow at 9am'
		}
	},

	render: function() {
		return (
			<div>
				<AppointmentForm 
					input_title={this.state.input_title}
					input_appt_time={this.state.input_appt_time}
				/>
				<AppointmentsList appointments={this.state.appointments}/>
			</div>
		)
	}
});
