import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "@emotion/styled";

const createEventsList = (list) => {
  let events = [];
  list.forEach((med) => {
    let medObj = {
      title: `${med.genericName} ${med.strength}${med.strengthUnits}`,
      start: "2023-09-26",
      startRecur: "2023-09-26",
      backgroundColor: "rgb(5 150 105)",
      editable: true,
      id: med.medId,
    };
    events.push(medObj);
  });
  return events;
};

const StyleWrapper = styled.div`
  .fc.fc-media-screen.fc-direction-ltr.fc-theme-standard.fc-liquid-hack {
    // @apply h-fit bg-slate-400;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
  ,
  .fc-toolbar-title {
    font-size: 1.25em;
  }
  .fc-timegrid-slot.fc-timegrid-slot-lane {
  }
  .fc-theme-standard td {
    border: 1px solid var(--fc-border-color);
  }
  .fc-day-today {
    background-color: rgb(241 245 249) !important;
  }
  .fc-timegrid-axis-cushion.fc-scrollgrid-shrink-cushion.fc-scrollgrid-sync-inner {
    text-align: right;
    padding-right: 0.5rem;
  }
  .fc-col-header-cell-cushion {
    text-decoration: none;
    color: rgb(5 150 105);
  }

  .fc-today-button.fc-button.fc-button-primary {
    background-color: rgb(5 150 105);
  }
  .fc-button-group > button {
    background-color: rgb(5 150 105);
  }
`;

export const CalendarCard = ({ medications }) => {
  const eventList = createEventsList(medications);

  return (
    <StyleWrapper>
      <FullCalendar
        editable
        selectable
        events={eventList}
        // eventClick={(e) => eventHandler(e.event._def.publicId)}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        droppable="true"
        headerToolbar={{
          start: "title",
          center: "today,prev,next",
          end: "timeGridDay,timeGridWeek,dayGridMonth",
        }}
      />
    </StyleWrapper>
  );
};
