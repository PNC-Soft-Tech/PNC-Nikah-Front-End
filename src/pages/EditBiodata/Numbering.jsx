/* eslint-disable no-unused-vars */
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS for styling

const Numbering = () => {
    const titles = [
        'সাধারণ তথ্য',
        'ঠিকানা',
        ' শিক্ষাগত যোগ্যতা ',
        ' পারিবারিক তথ্য', 
        'ব্যাক্তিগত তথ্য ', 
        'পেশাগত তথ্য', 
        'বিবাহ সম্পর্কিত তথ্য ', 
        'প্রত্যাশিত জীবনসঙ্গী', 
        'অঙ্গীকারনামা', 
        'যোগাযোগ '
    ];
  return (
    <VerticalTimeline layout="1-column-right">
       {titles.map((title, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={{  color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'black', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          icon={<span style={{ fontSize: '16px', fontWeight: 'bold' }}>{index +1}</span>}
        >
          <div className=' h-4 w-[170px] px-2 pt-2 flex content-center self-center  ' >

            <h3 className="  " style={{ fontSize: '17px' }}>{title}</h3>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Numbering ;
