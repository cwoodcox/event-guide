/** @jsx React.DOM */

PageMenu = React.createClass({
  render: function() {
    return (
      <ul id="menubars">
        <li><a href="general.html">General Info</a></li>
        <li><a href="schedule.html">Schedule</a></li>
        <li><a href="speakers.html">Speakers</a></li>
        <li><a href="sponsors.html">Sponsors</a></li>
        <li><a href="map.html">Exhibit Map</a></li>
        <li><a href="transportation.html">Transportation</a></li>
        <li><a href="eat.html">Eat•See•Shop•Sip</a></li>
      </ul>
    )
  }
})
