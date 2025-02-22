import React from "react";
import Event from "./Event.jsx";

export default function Calendar() {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="time">8 am</td>
          <Event event="Starbucks ☕️" color="green" />
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Yolk 🍳" color="green" />
          <td></td>
        </tr>
        <tr>
          <td className="time">9 am</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Subway 🚊" color="pink" location="subway" />
          <td></td>
          <Event event="The Bean 🫘" color="blue" />
          <td></td>
        </tr>
        <tr>
          <td className="time">10 am</td>
          <td></td>
          <td></td>
          <Event event="Bowling" color="blue" />
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="time">11 am</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="The Bean 🫘" color="blue" />
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="time">12 am</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Meeting ☕️" color="green" />
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="time">1 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Shopping" color="blue" />
          <td></td>
        </tr>
        <tr>
          <td className="time">2 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Shopping" color="blue" location="Walmart" />
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="time">3 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Shopping" color="blue" location="Macys" />
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="time">4 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="time">5 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
