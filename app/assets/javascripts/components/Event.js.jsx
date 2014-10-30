/** @jsx React.DOM */

Event = React.createClass({
  render: function() {
    return (
      <div id="shell">
        <div id="head">
          <h1><a href="index.html"><span>IHG EventGuide</span></a></h1>
        </div>
        <div id="toptabs">
          <ul>
            <li><a href="emailus.html">EMAIL US</a></li>
            <li><a href="callus.html">CALL US</a></li>
            <li><a href="findus.html">FIND US</a></li>
          </ul>
        </div>
        <div id="content">
          <PageMenu />
        </div>
        <div id="bottomtabs">
          <ul>
            <li><a href="survey.html">mSURVEY</a></li>
            <li><a href="info.html">MORE INFO</a></li>
            <li><a href="index.html">HOME</a></li>
          </ul>
        </div>
        <div id="foot">
          <div class="container">
            <h2><a href="http://www.data2gold.com"><span>Hospitality Marketing Exchance - Roadshow</span></a></h2><br /><br />
            <a href="https://www.facebook.com/ihg"><img src="fb.png" /></a>
            &nbsp; &nbsp;
            <a href="https://foursquare.com/ihgrewardsclub"><img src="fs.png" /></a>
            &nbsp; &nbsp;
            <a href="https://plus.google.com/104576275042332476693"><img src="gp.png" /></a>
            &nbsp; &nbsp;
            <a href="http://instagram.com/ihg"><img src="ig.png" /></a>
            <ul id="nav">
              <li><a href="general.html">General Info</a></li>
              <li><a href="schedule.html">Schedule</a></li>
              <li><a href="speakers.html">Speakers</a></li>
              <li><a href="map.html">Exhibit Map</a></li>
              <li><a href="transportation.html">Transportation</a></li>
              <li><a href="eat.html">Eat•See•Shop•Sip</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})
