import React from 'react'
import { useState } from 'react'

const Events = () => {

  const eventData = {
    "events": [
      {
        "name": "Tech Innovators Conference",
        "venue": "Hyderabad International Convention Centre",
        "time": "10:00 AM",
        "date": "2024-07-15",
        "registration_link": "https://example.com/tech-innovators-conference",
        "registration_fee": "500",
        "description": "A conference showcasing the latest in technology and innovation.",
        "organiser_name": "Tech Hyderabad"
      },
      {
        "name": "Startup Expo 2024",
        "venue": "Hitex Exhibition Centre",
        "time": "09:00 AM",
        "date": "2024-08-05",
        "registration_link": "https://example.com/startup-expo-2024",
        "registration_fee": "300",
        "description": "An exhibition for startups to showcase their products and services.",
        "organiser_name": "Startup Hyderabad"
      },
      {
        "name": "AI & Machine Learning Workshop",
        "venue": "IIIT Hyderabad",
        "time": "11:00 AM",
        "date": "2024-07-20",
        "registration_link": "https://example.com/ai-ml-workshop",
        "registration_fee": "200",
        "description": "A hands-on workshop on Artificial Intelligence and Machine Learning.",
        "organiser_name": "AI Club"
      },
      {
        "name": "Blockchain Summit",
        "venue": "Hyderabad Marriott Hotel & Convention Centre",
        "time": "10:30 AM",
        "date": "2024-09-12",
        "registration_link": "https://example.com/blockchain-summit",
        "registration_fee": "600",
        "description": "A summit discussing the latest trends and applications of blockchain technology.",
        "organiser_name": "Blockchain Hyderabad"
      },
      {
        "name": "Cybersecurity Forum",
        "venue": "Novotel Hyderabad Convention Centre",
        "time": "09:30 AM",
        "date": "2024-08-25",
        "registration_link": "https://example.com/cybersecurity-forum",
        "registration_fee": "400",
        "description": "A forum on the latest cybersecurity threats and solutions.",
        "organiser_name": "Cybersecurity Experts"
      },
      {
        "name": "Data Science Conference",
        "venue": "Taj Krishna, Hyderabad",
        "time": "10:00 AM",
        "date": "2024-07-30",
        "registration_link": "https://example.com/data-science-conference",
        "registration_fee": "500",
        "description": "A conference on the advancements in data science and analytics.",
        "organiser_name": "Data Science Society"
      },
      {
        "name": "IoT & Smart Cities Expo",
        "venue": "HITEX Exhibition Center",
        "time": "09:00 AM",
        "date": "2024-09-10",
        "registration_link": "https://example.com/iot-smart-cities-expo",
        "registration_fee": "350",
        "description": "An expo showcasing IoT applications and smart city solutions.",
        "organiser_name": "Smart Cities Hyderabad"
      },
      {
        "name": "Healthcare Technology Summit",
        "venue": "N Convention, Hyderabad",
        "time": "08:30 AM",
        "date": "2024-08-15",
        "registration_link": "https://example.com/healthcare-tech-summit",
        "registration_fee": "450",
        "description": "A summit discussing the role of technology in healthcare.",
        "organiser_name": "Healthcare Innovators"
      },
      {
        "name": "Renewable Energy Expo",
        "venue": "Hyderabad International Trade Expositions Limited (HITEX)",
        "time": "10:00 AM",
        "date": "2024-07-25",
        "registration_link": "https://example.com/renewable-energy-expo",
        "registration_fee": "300",
        "description": "An expo focused on renewable energy technologies and solutions.",
        "organiser_name": "Green Energy Hyderabad"
      },
      {
        "name": "EdTech Conference",
        "venue": "Trident Hotel, Hyderabad",
        "time": "09:00 AM",
        "date": "2024-09-05",
        "registration_link": "https://example.com/edtech-conference",
        "registration_fee": "400",
        "description": "A conference on the latest trends in educational technology.",
        "organiser_name": "EdTech Hyderabad"
      },
      {
        "name": "Technovanza",
        "venue": "Mallareddy,Hyderabad ",
        "time": "10:00 AM",
        "date": "10-07-2024",
        "registration_link": "https://example.com/technovanza",
        "registration_fee": "500",
        "description": "A conference on the latest machine learning technology.",
        "organiser_name": "Tech Hyderabad"

      }
    ]
  }

  const [sortOrder, setSortOrder] = useState('asc');
  const [sortType, setSortType] = useState('registration_fee');
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  const toggleSortType = (type) => {
    if (sortType !== type) {
      setSortType(type);
      setSortOrder('asc');
    } else {
      toggleSortOrder();
    }
  };
  const sortByRegistrationFee = () => {
    const sortedEvents = [...eventData.events].sort((a, b) => {
      if (sortOrder === 'asc') {
        return parseInt(a.registration_fee) - parseInt(b.registration_fee);
      } else {
        return parseInt(b.registration_fee) - parseInt(a.registration_fee);
      }
    });
    return sortedEvents;
  };
  const sortByDate = () => {
    const sortedEvents = [...eventData.events].sort((a, b) => {
      if (sortOrder === 'asc') {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    return sortedEvents;
  };
  const sortedEvents = sortType === 'registration_fee' ? sortByRegistrationFee() : sortByDate();
  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-white">
          <tr>
            <th className="p-3 text-sm font-medium text-left text-gray-900 border-b border-gray-300">Event Name</th>
            <th className="p-3 text-sm font-medium text-left text-gray-900 border-b border-gray-300">Event Venue</th>
            <th className="p-3 text-sm font-medium text-left text-gray-900 border-b border-gray-300">Start Time</th>
            <th className="p-3 text-sm font-medium text-left text-gray-900 border-b border-gray-300">Date</th>
            <th className="p-3 text-sm font-medium text-left text-gray-900 border-b border-gray-300">
              Registration Fee
              <button onClick={toggleSortOrder} className="ml-2 text-xs text-gray-500">
                {sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </th>
            <th className="p-3 text-sm font-medium text-left text-gray-900 border-b border-gray-300">Event Detail</th>
            <th className="p-3 text-sm font-medium text-left text-gray-900 border-b border-gray-300">Organizer's Name</th>
            <th className="p-3 text-sm font-medium text-left text-gray-900 border-b border-gray-300">Registration Link</th>
          </tr>
        </thead>
        <tbody>
          {sortedEvents.map((event, index) => (
            <tr
              key={index}
              className="transition-all duration-200 hover:bg-gray-100"
            >
              <td className="p-3 text-sm text-gray-800 border-b border-gray-200">{event.name}</td>
              <td className="p-3 text-sm text-gray-800 border-b border-gray-200">{event.venue}</td>
              <td className="p-3 text-sm text-gray-800 border-b border-gray-200">{event.time}</td>
              <td className="p-3 text-sm text-gray-800 border-b border-gray-200">{event.date}</td>
              <td className="p-3 text-sm text-gray-800 border-b border-gray-200">{event.registration_fee}</td>
              <td className="p-3 text-sm text-gray-800 border-b border-gray-200">{event.description}</td>
              <td className="p-3 text-sm text-gray-800 border-b border-gray-200">{event.organiser_name}</td>
              <td className="p-3 text-sm text-gray-800 border-b border-gray-200">
                <a
                  className="text-blue-600 hover:text-blue-800"
                  href={event.registration_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Here
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  );
}

export default Events
