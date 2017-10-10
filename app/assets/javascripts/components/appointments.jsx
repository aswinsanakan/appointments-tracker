class Appointments extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      appointments: this.props.appointments,
      title: '',
      appt_time: ''
    }
  }

	handleUserInput (obj) {
		this.setState(obj)
	}

	handleFormSubmit () {
		const appointment = {title: this.state.title, appt_time: this.state.appt_time }
		$.post('/appointments',
			{appointment: appointment})
			.done((data) => {
				this.addNewAppointment(data);
			});
	}

	addNewAppointment (appointment) {
		const appointments = React.addons.update(this.state.appointments, { $push: [appointment] });
		this.setState({ 
			appointments: appointments.sort(function(a,b) {
				return new Date(a.appt_time) - new Date(b.appt_time);
			})
		});
	}

	render () {
		return (
			<div className='appointments'>
				<AppointmentForm 
					title={this.state.title}
					appt_time={this.state.appt_time}
					onUserInput={(event) => this.handleUserInput(event)}
					onFormSubmit={() => this.handleFormSubmit()}
				/>
				<AppointmentsList appointments={this.state.appointments}/>
			</div>
		)
	}
}