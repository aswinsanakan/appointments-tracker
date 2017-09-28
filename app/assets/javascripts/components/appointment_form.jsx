var AppointmentForm = React.createClass ({
	render: function() {
		return(
			<div>
				<h2>Make a new Appointment</h2>
				<form>
					<input name="title" placeholder="Add an appointment!" value={this.props.input_title} />
					<input name="appt_time" placeholder="Choose a date & time" value={this.props.input_appt_time}/>
					<input type="submit" value="Make Appointment" />
				</form>
			</div>
		)
	}
});