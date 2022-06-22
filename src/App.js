import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { React, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
/* import DatePicker from "react-datepicker"; */
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";

const locales = {
  "en-in": require("date-fns/locale/en-in"),
};

const localizer = dateFnsLocalizer({
  // the objects will be passed
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [];

function App() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvent, setAllEvent] = useState(events);

  const handleAddEvents = () => {
    setAllEvent([...allEvent, newEvent]);
  };

  return (
    <div style={{ alignItems: "center" }}>
      <h1>The Calendar</h1>
      <h2>Add New Events</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <ReactDatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <ReactDatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button stlye={{ marginTop: "10px" }} onClick={handleAddEvents}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px", width: 800 }}
      />
    </div>
  );
}

export default App;
