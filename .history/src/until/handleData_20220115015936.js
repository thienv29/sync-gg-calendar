const { saveDataToFile } = require("./fileCTR");


const checkEventsChange = (listEvents,dataLocal) => {
  listEvents.forEach(eventOnl,index => {
      const check = dataLocal.find(eventLocal => eventLocal.id === eventOnl.id) 
      if (!check) {
        dataLocal.push(eventOnl)
        console.log("trigger event");
      }
  });
  saveDataToFile(dataLocal)
  return dataLocal;
} 


const checkSizeData  = (dataLocal) => {
  if (dataLocal.length > 300) {
    dataLocal.slice(90)
    saveDataToFile(dataLocal)
  }
  return dataLocal
}


module.exports={
    checkEventsChange,
    checkSizeData
}