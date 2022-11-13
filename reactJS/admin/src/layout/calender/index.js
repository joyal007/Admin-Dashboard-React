import React,{useState} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme
} from '@mui/material';
import { tokens } from '../../theme'
import Header from '../../components/Header';

function Calender() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents,setCurrentEvents]  = useState([]);

  const handleDateClick = (selected) => {
    console.log("dateClickEvent",selected);
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    console.log('calendarApi',calendarApi);
    calendarApi.unselect()
    if(title){
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  const handleEventClick = (selected) => {
    if(window.confirm('R u Sure ?')){
      selected.event.remove()
    }
  }
  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Add events to Calendar"/>
      <Box display="flex" justifyContent="space-between" mt="10px">
          {/* Event List */}
          <Box flex="1 1 20%" backgroundColor={colors.primary[400]} borderRadius="4px" p="15px">
            <Typography variant="h5">Events</Typography>
            <List>
              {currentEvents.map(e => {
                return (
                  <ListItem 
                  key={e.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: '2px'
                  }}
                  >
                    <ListItemText
                    primary={e.title}
                    secondary={
                      <Typography>
                        {formatDate(e.start, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </Typography>
                    }
                    />
                  </ListItem>
                )
              })}
            </List>
          </Box>
          <Box flex="1 1 80%" ml="15px">
              <FullCalendar
                height='75vh'
                plugins={[
                  dayGridPlugin,
                  interactionPlugin,
                  timeGridPlugin,
                  listPlugin
                ]}
                headerToolbar={{
                  left: 'prev next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={handleDateClick}
                eventClick={handleEventClick}
                eventsSet={(events) => setCurrentEvents(events)}
                initialEvents={[
                  {
                    id: "123",
                    title: 'Alldlsdf',
                    date: '2022-11-14'
                  },{
                    id: "432",
                    title: 'dfsddfsd',
                    date: '2022-10-04'
                  },
                ]}
              />

          </Box>
      </Box>
      
    </Box>
  )
}

export default Calender