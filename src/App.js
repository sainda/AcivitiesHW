import './App.css';
import React, { useState } from 'react';
import work from './Assets/work.svg';
import exercice from './Assets/sport.svg';
import study from './Assets/book.svg';
import selfCare from './Assets/selfCare.svg';
import social from './Assets/social.svg';
import play from './Assets/game.svg';
import Activity from './components/Activity';
import Report from './components/Report';
import Button from './components/Button';



function App() {

  const [hr1, sethr1] = useState(25);
  const [hr2, sethr2] = useState(30);
  const [hr3, sethr3] = useState(65);
  const [hr4, sethr4] = useState(15);
  const [hr5, sethr5] = useState(16);
  const [hr6, sethr6] = useState(29);
  const [dt1, setdt1] = useState("last week - " + 36);
  const [dt2, setdt2] = useState("last week - " + 8);
  const [dt3, setdt3] = useState("last week - " + 7);
  const [dt4, setdt4] = useState("last week - " + 5);
  const [dt5, setdt5] = useState("last week - " + 10);
  const [dt6, setdt6] = useState("last week - " + 2);
  
  const activities=[
    {
      title:'Work',
      hours: hr1+" hrs",
      date: dt1+ "hrs",
      icon: work,
      bgColor: 'rgb(254,138,100)'
    },
    {
      title:'Play',
      hours: hr2+" hrs",
      date: dt2+ "hrs",
      icon: play,
      bgColor:'rgb(84,189,225)'
    },
    {
      title:'Study',
      hours: hr3+" hrs",
      date: dt3+ "hrs",
      icon: study,
      bgColor:'rgb(255,94,125)'
    },
    {
      title:'Exercice',
      hours: hr4+" hrs",
      date: dt4+ "hrs",
      icon: exercice,
      bgColor:'rgb(75,207,131)'
    },
    {
      title:'Social',
      hours: hr5+" hrs",
      date: dt5+ "hrs",
      icon: social,
      bgColor:'rgb(114,53,208)'
    },
    {
      title:'Self Care',
      hours: hr6+" hrs",
      date: dt6+ "hrs",
      icon: selfCare,
      bgColor:'rgb(241,199,91)'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
        <Report/>
        <Button content={'Daily'} onClick={()=>{
          sethr1(1);
          sethr2(3);
          sethr3(6);
          sethr4(1);
          sethr5(2);
          sethr6(7);
          setdt1("last day - " + 2);
          setdt2("last day - " + 1);
          setdt3("last day - " + 3);
          setdt4("last day - " + 6);
          setdt5("last day - " + 1);
          setdt6("last day - " + 2);
        }}/>
            <Button content={'Weekly'} onClick={()=>{
              sethr1(32);
              sethr2(10);
              sethr3(4);
              sethr4(4);
              sethr5(5);
              sethr6(2);
              setdt1("last week - " + 36);
              setdt2("last week - " + 8);
              setdt3("last week - " + 7);
              setdt4("last week - " + 5);
              setdt5("last week - " + 10);
              setdt6("last week - " + 2);
            }}/>
            <Button content={'Monthly'} onClick={()=>{
               sethr1(20);
               sethr2(25);
               sethr3(6);
               sethr4(12);
               sethr5(14);
               sethr6(56);
               setdt1("last month - " + 25);
               setdt2("last month - " + 35);
               setdt3("last month - " + 20);
               setdt4("last month - " + 30);
               setdt5("last month - " + 52);
               setdt6("last month - " + 20);
            }}/>
        </div>
        <div className='activities'>
          {
            activities.length>0 && activities.map((activity)=>(
              <Activity title={activity.title} hours={activity.hours} 
              date={activity.date} icon={activity.icon} bgColor={activity.bgColor}/>
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
