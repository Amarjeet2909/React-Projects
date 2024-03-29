import './App.css';

import React from "react";

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from "@syncfusion/ej2-react-schedule";

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';


/*     
{
      Id: 2,
      End: new Date(2019, 0, 21, 8, 30),
      Start: new Date(2019, 0, 21, 7, 0),
      Summary: 'Meeting'
    } 

      fields: {
      subject: { name: 'Summary',default: 'No title is provided'},
      startTime: {name: 'Start'},
      endTime: {name: 'End'}
    }
*/
class App extends React.Component {  
  localData: EventSettingsModel = {
    dataSource: [{
      EndTime: new Date(2019, 0, 11, 6, 30),
      StartTime: new Date(2019, 0, 11, 4, 0),
    }]
  };
  remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData', 
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });

  render() {
    return <ScheduleComponent currentView="Month" selectedDate={new Date(2017, 5, 5)}
    eventSettings={{ dataSource: this.remoteData }}>
      <Inject services={[Day,Week,WorkWeek,Month,Agenda]} />
    </ScheduleComponent>
   }
}

export default App;