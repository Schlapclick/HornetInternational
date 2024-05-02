// Data of upcoming events
const eventsData = [
    { name: 'Cultural day', date: '2024-05-01' },
    { name: 'Reggaethon concert', date: '2024-05-05' },
    { name: 'Internship workshop ', date: '2024-05-10' },
    { name: 'Game night', date: '2024-05-15' },
  ];
  
  // Array to store subscribed events
  const subscribedEvents = [];
  
  // Function to filter events based on date range
  function filterEventsByDateRange(startDate, endDate) {
    return eventsData.filter(event => event.date >= startDate && event.date <= endDate);
  }
  
  // Function to display upcoming events
  function displayUpcomingEvents(startDate, endDate) {
    const filteredEvents = filterEventsByDateRange(startDate, endDate);
  
    if (filteredEvents.length === 0) {
      console.log("No events found in the given date range.");
      return;
    }
  
    console.log("Upcoming events:");
    filteredEvents.forEach(event => {
      console.log(`${event.name} - ${event.date}`);
    });
  }
  
  // Function to subscribe to an event
  function subscribeToEvent(eventName) {
    const event = eventsData.find(event => event.name === eventName);
    if (event) {
      subscribedEvents.push(event);
      console.log(`Subscribed to ${eventName}`);
    } else {
      console.log(`Event '${eventName}' not found.`);
    }
  }
  
  // Function to unsubscribe from an event
  function unsubscribeFromEvent(eventName) {
    const index = subscribedEvents.findIndex(event => event.name === eventName);
    if (index !== -1) {
      subscribedEvents.splice(index, 1);
      console.log(`Unsubscribed from ${eventName}`);
    } else {
      console.log(`You are not subscribed to ${eventName}`);
    }
  }
  
  // Dates for filtering events
  const startDate = '2024-05-01';
  const endDate = '2024-05-15';
  
  // Display upcoming events in the given date range
  displayUpcomingEvents(startDate, endDate);
  
  // event subscription
  subscribeToEvent('Cultural day');
  
  // event unsubscription
  unsubscribeFromEvent('Cultural day');
  
