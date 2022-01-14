const checkEventsChange = (listEvents,dataLocal) => {
  listEvents.forEach(eventOnl => {
      if (!dataLocal.find(eventLocal => eventLocal.id === eventOnl.id)) {
        dataLocal.push(eventOnl)
        console.log("trigger event");
      }
  });
  saveData
  return dataLocal;
} 
const checkSizeData  = (dataLocal) => {
    
  if (dataLocal.length > 300) {
      
  }
}