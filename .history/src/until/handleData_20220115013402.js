const checkEventsChange = (listEvents,dataLocal) => {
  listEvents.forEach(eventOnl => {
      if (!dataLocal.find(eventLocal => eventLocal.id === eventOnl.id)) {
        dataLocal.push(eventOnl)
        console.log("trigger event");
      }
  });
} 
const checkSizeData  = (dataLocal) => {
    const a = []
    a.length
  if (dataLocal.length > 300) {
      
  }
}