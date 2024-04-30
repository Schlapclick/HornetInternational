// Data of upcoming events
const eventsData = [
    { name: 'Event 1', date: '2024-05-01' },
    { name: 'Event 2', date: '2024-05-05' },
    { name: 'Event 3', date: '2024-05-10' },
    { name: 'Event 4', date: '2024-05-15' },
  ];
  
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
    const index = subscribedEvents.indexOf(eventName);
    if (index !== -1) {
      subscribedEvents.splice(index, 1);
      console.log(`Unsubscribed from ${eventName}`);
    } else {
      console.log(`You are not subscribed to ${eventName}`);
    }
  }
  
  
  // Example usage
  const startDate = '2024-05-01';
  const endDate = '2024-05-15';
  
  // Display upcoming events in the given date range
  displayUpcomingEvents(startDate, endDate);
  
  // Example subscription
  subscribeToEvent('Event 1');
  
  // Example unsubscription
  unsubscribeFromEvent('Event 2');
  
  