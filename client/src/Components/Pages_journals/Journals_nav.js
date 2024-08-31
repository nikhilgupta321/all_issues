import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import JournalsFilterButton from './pages/JournalsFilterButton';


const Journals_nav = () => {

  const [isAgents, setIsAgents] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [isMade, setIsMade] = useState(false);

  const agents = () => {
    setIsAgents(!isAgents);
  };
  const published = () => {
    setIsPublished(!isPublished);
  };
  const made = () => {
    setIsMade(!isMade);
  };
  return (
    <>
      <div className="bar-nav justify-between">
        <div className='space-x-1'>
          <JournalsFilterButton type="pending" label="Pending" />
          <JournalsFilterButton type="published" label="published" />
          <JournalsFilterButton type="withdraw" label="withdraw" />
          <JournalsFilterButton type="notmade" label="notmade" />
          <JournalsFilterButton type="made" label="made" />
          <JournalsFilterButton type="urgent" label="urgent" />
          <JournalsFilterButton type="today" label="today" />
          <JournalsFilterButton type="probmailsent" label="probmailsent" />
          <JournalsFilterButton type="probmailreceived" label="probmailreceived" />
          <JournalsFilterButton type="wrongentry" label="wrongentry" />
          <JournalsFilterButton type="remindersent" label="remindersent" />
          <JournalsFilterButton type="reminder" label="reminder" />
          <JournalsFilterButton type="noreply" label="noreply" />
          <JournalsFilterButton type="remarks" label="remarks" />

          <div className="relative inline-block text-center">
            <button
              onClick={made}
              className="w-auto px-1 py-2 text-center bg-gray-300 rounded text-black-200 text-xs uppercase">
              Made By
            </button>
             {isMade && (
              <div className=" absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1 ">
                  <Link to={"/issues/journals/entries/made_by"} state={{ type: 'abhinav' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Abhinav</button>
                  </Link>
                  <Link to={"/issues/journals/entries/made_by"} state={{ type: 'aman' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Aman</button>
                  </Link>
                  <Link to={"/issues/journals/entries/made_by"} state={{ type: 'hitanshu' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Hitanshu</button>
                  </Link>
                  <Link to={"/issues/journals/entries/made_by"} state={{ type: 'mahesh' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Mahesh</button>
                  </Link>
                  <Link to={"/issues/journals/entries/made_by"} state={{ type: 'pawan' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Pawan</button>
                  </Link>
                  <Link to={"/issues/journals/entries/made_by"} state={{ type: 'pratap' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Pratap</button>
                  </Link>
                  <Link to={"/issues/journals/entries/made_by"} state={{ type: 'priyanshu' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Priyanshu</button>
                  </Link>
                  <Link to={"/issues/journals/entries/made_by"} state={{ type: 'sachin' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Sachin</button>
                  </Link>
                  <Link to={"/issues/journals/entries/made_by"} state={{ type: 'shashank' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Shashank</button>
                  </Link>
                  <Link to={"/issues/journals/entries/made_by"} state={{ type: 'sonu' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Sonu</button>
                  </Link>
                  <Link to={"/issues/journals/entries/made_by"} state={{ type: 'sonukumar' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Sonukumar</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
           <div className="relative inline-block text-center">
            <button
              onClick={published}
              className="w-auto px-1 py-2 text-center bg-gray-300 rounded text-black-200 text-xs uppercase">
              Published By
            </button>
            {isPublished && (
              <div className=" absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                <Link to={"/issues/journals/entries/published_by"} state={{ type: 'mahesh' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Mahesh</button>
                  </Link>
                  <Link to={"/issues/journals/entries/published_by"} state={{ type: 'partap' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Partap</button>
                  </Link>
                  <Link to={"/issues/journals/entries/published_by"} state={{ type: 'pawan' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Pawan</button>
                  </Link>
                  <Link to={"/issues/journals/entries/published_by"} state={{ type: 'priyanshu' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Priyanshu</button>
                  </Link>
                  <Link to={"/issues/journals/entries/published_by"} state={{ type: 'sachin' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Sachin</button>
                  </Link>
                  <Link to={"/issues/journals/entries/published_by"} state={{ type: 'sonu' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Sonu</button>
                  </Link>
                  <Link to={"/issues/journals/entries/published_by"} state={{ type: 'sonukumar' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Sonukumar</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="relative inline-block text-center">
            <button
              onClick={agents}
              className="w-auto px-1 py-2 text-center bg-gray-300 rounded text-black-200 text-xs uppercase">
              Agents
            </button>
            {isAgents && (
              <div className=" absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1 ">
                <Link to={"/issues/journals/entries/agent"} state={{ type: 'akbar (indonesia)' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Akbar (Indonesia)</button>
                  </Link>
                  <Link to={"/issues/journals/entries/agent"} state={{ type: 'emoleila Ejiya (nigeria)' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Emoleila Ejiya (Nigeria)</button>
                  </Link>
                  <Link to={"/issues/journals/entries/agent"} state={{ type: 'elsherbini (saudi arabia)' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Elsherbini (Saudi Arabia)</button>
                  </Link>
                  <Link to={"/issues/journals/entries/agent"} state={{ type: 'abaynew jemal jenber (ethiopia)' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Abaynew Jemal Jenber (Ethiopia)</button>
                  </Link>
                  <Link to={"/issues/journals/entries/agent"} state={{ type: 'debashis kumar mondal (bangladesh)' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Debashis Kumar Mondal (Bangladesh)</button>
                  </Link>
                  <Link to={"/issues/journals/entries/agent"} state={{ type: 'sumon karmakar (bangladesh)' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Sumon Karmakar (Bangladesh)</button>
                  </Link>
                  <Link to={"/issues/journals/entries/agent"} state={{ type: 'marwa ahmed (egypt)' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Marwa Ahmed (Egypt)</button>
                  </Link>
                  <Link to={"/issues/journals/entries/agent"} state={{ type: 'mujittafa saidu (nigeria)' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Mujittafa Saidu (Nigeria)</button>
                  </Link>
                  <Link to={"/issues/journals/entries/agent"} state={{ type: 'faruk maradun hassan (nigeria)' }} >
                    <button className="block py-2 text-sm hover:bg-gray-200">Faruk Maradun Hassan (Nigeria)</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div className='flex'>
          <div className="w-auto  mr-2 py-2 text-center rounded text-green-700 text-sm">50-100 to 2000<hr /></div>
          <button className="w-auto mr-1 px-1 py-1 text-center bg-gray-300 rounded text-black-200 text-xs uppercase">start</button>
          <button className="w-auto mr-1 px-1 py-1 text-center bg-gray-300 rounded text-black-200 text-xs uppercase">prev</button>
          <button className="w-auto mr-1 px-1 py-1 text-center bg-gray-300 rounded text-black-200 text-xs uppercase">next</button>
          <button className="w-auto mr-1 px-1 py-1 text-center bg-gray-300 rounded text-black-200 text-xs uppercase">last</button>
        </div> */}
      </div>
    </>
  )
}

export default Journals_nav



