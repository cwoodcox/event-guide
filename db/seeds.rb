# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

event = Event.create name: "IHG Conference"

Page.create \
  id: 1,
  title: "General Info",
  display_order: 1, display_type: "button",
  event: event,
  content: <<-EHTML
    <h2>TPG's IHG Portfolio Conference @ Holiday Inn Inner Harbor</h2>
    <h3>July 13th to July 17th, 2014 - <strong>8am to 6pm</strong></h3>
    <img src="hotel.PNG" /><br />
    <h3>Holiday Inn Innre Harbor<br />Baltimore, MD 21201</h3>
    <img src="tpg.PNG" /><br />
    Welcome to a three day seminar that focuses on sharing ideas and techniques on everything from tarcast, Revmax, Guest Service and every day ideas to improve your current standard operation procedures.
    <h3>Questions? Concerns? Ideas?</h3>
    Let our concierge know at<br />
    <a href="mailto:rmcsweeney@innerharborhi.com">rmcsweeney@innerharborhi.com</a>"
EHTML
