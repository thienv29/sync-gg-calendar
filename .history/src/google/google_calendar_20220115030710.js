const { google } = require('googleapis');
require('dotenv').config();
const uuid = require("uuid")

// Provide the required configuration
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarId = process.env.CALENDAR_ID;

// Google calendar API settings
const SCOPES = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.readonly'
];
const calendar = google.calendar({ version: "v3" });

const auth = new google.auth.JWT(
    CREDENTIALS.client_email,
    null,
    CREDENTIALS.private_key,
    SCOPES
);


// Get date-time string for calender
const dateTimeForCalander = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }
    let day = date.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let hour = date.getHours()-1; // để tránh miss 
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }
    let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000`;
    let event = new Date(Date.parse(newDateTime));
    let startDate = event;
    // Delay in end time is 1
    let endDate = new Date(new Date(startDate).setFullYear(startDate.getFullYear() + 1));
    return {
        startDate,
        endDate
    }
};


const getEvents = async (dateTimeStart, dateTimeEnd) => {
    try {
        let response = await calendar.events.list({
            auth: auth,
            calendarId: calendarId,
            timeMin: dateTimeStart,
            timeMax: dateTimeEnd,
            timeZone: process.env.TIMEZONE
        });

        let items = response['data']['items'];
        return items;
    } catch (error) {
        console.log(`Error at getEvents --> ${error}`);
        return 0;
    }
};
const watchEvent = async () => {
    const id = uuid.v1()
    console.log(id);
    calendar.events.watch({
        auth: auth,
        calendarId: calendarId,
        requestBody: {
            id: id,
            type: "web_hook",
            address: ,
        }
    }, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
}
// Insert new event to Google Calendar
// const insertEvent = async (event) => {

//     try {
//         let response = await calendar.events.insert({
//             auth: auth,
//             calendarId: calendarId,
//             resource: event
//         });

//         if (response['status'] == 200 && response['statusText'] === 'OK') {
//             return 1;
//         } else {
//             return 0;
//         }
//     } catch (error) {
//         console.log(`Error at insertEvent --> ${error}`);
//         return 0;
//     }
// };
// Get all the events between two dates


// let start = '2020-10-03T00:00:00.000Z';
// let end = '2022-10-04T00:00:00.000Z';
// Delete an event from eventID
// const deleteEvent = async (eventId) => {

//     try {
//         let response = await calendar.events.delete({
//             auth: auth,
//             calendarId: calendarId,
//             eventId: eventId
//         });

//         if (response.data === '') {
//             return 1;
//         } else {
//             return 0;
//         }
//     } catch (error) {
//         console.log(`Error at deleteEvent --> ${error}`);
//         return 0;
//     }
// };


// const stopChannel = async () => {
//     calendar.channels.stop({
//         auth: auth,
//         requestBody: {
//             id: "b82c9f05-bb80-4d27-b4c6-4c06cb65fd90",
//             resourceId: "DYhei0Vgm_2kAUYkSxy4zB-kW-4",
//         }
//     }, (error, result) => {
//         if (error) throw error;
//         console.log(result);
//     });
// }

// const getListChannels = async () => {
//     try {

//         const res = await calendar.calendarList.get({
//             auth: auth,
//             // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
//             calendarId: calendarId,
//         });
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = {
    getEvents,
    dateTimeForCalander,
    watchEvent,

}