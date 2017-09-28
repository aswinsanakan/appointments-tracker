class AppointmentsController < ApplicationController
  def index
    @appointment = Appointment.new
    @appointments = Appointment.order('appt_time ASC')
  end

  def create
    @appointment = Appointment.new(appointment_params)
    @appointments = Appointment.order('appt_time ASC')
  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end

end
