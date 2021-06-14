const DUMMY_EVENTS = [
  {
    id: 1,
    title: "Title",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      isLiked: false,
  },
  {
    id: 2,
    title: "Title",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      isLiked: false,
  },
  {
    id: 3,
    title: "Title",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      isLiked: true,
  },
  {
    id: 4,
    title: "Title",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      isLiked: false,
  },
  {
    id: 5,
    title: "Title",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      isLiked: false,
  },
  {
    id: 6,
    title: "Title",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      isLiked: true,
  },
];
  
  export function getLikedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isLiked);
  }

  export function getDisLikedEvents() {
    return DUMMY_EVENTS.filter((event) => !event.isLiked);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }

  export function getLikedFIlteredEvents() {
    let likedFilteredEvents = DUMMY_EVENTS.filter((event) => {
      return event === event.isLiked;
    });
  
    return likedFilteredEvents;
  }

  export function getDisLikedFIlteredEvents() {
    let likedFilteredEvents = DUMMY_EVENTS.filter((event) => {
      return event === !event.isLiked;
    });
  
    return likedFilteredEvents;
  }