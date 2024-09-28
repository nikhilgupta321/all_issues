import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import JournalsDropdown from "./pages/JournalsDropdown";

const Journals_allbutton = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({});
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [type, setType] = useState(location.state.type);
  const [showNo, setShowNo] = useState({ first: 0, last: 20 });
  const [isAgents, setIsAgents] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [isMade, setIsMade] = useState(false);

  // const agents = () => {
  //   setIsAgents(!isAgents);
  // };
  // const published = () => {
  //   setIsPublished(!isPublished);
  // };
  // const made = () => {
  //   setIsMade(!isMade);
  // };

  const agents = () => {
    setType(isAgents ? "" : "agents");
    setIsAgents(!isAgents);
  };
  
  const published = () => {
    setType(isPublished ? "" : "published");
    setIsPublished(!isPublished);
  };
  
  const made = () => {
    setType(isMade ? "" : "made");
    setIsMade(!isMade);
  };
  

  console.log(location.state);
  let url = "https://stocksgainer.com/api/entries";
  const fetchData = () => {
    try {
      axios
        .get(url, {
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then((resp) => {
          if (resp.status == 200) {
            // setData(resp.data)
            setAllData(resp.data);
          }
        });
    } catch (error) {}
  };
  useEffect(() => {
    if (allData.length > 0) {
      // if (type == 'pending') {
      let newData = allData.filter((val) => val.status == type);
      console.log(newData);
      setData(newData);
      // }
    }
  }, [type, allData.length]);

  useEffect(() => {
    fetchData();
  }, []);

  // format Date and time
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };

  // Pagination (first 0-----Last 5)
  const { first, last } = showNo;
  const handlePagination = (typ) => {
    if (typ === "start") {
      setShowNo({ first: 0, last: 20 });
    } else if (typ === "last") {
      const totalItems = data.length;
      const newFirst = Math.max(0, totalItems - 10);
      setShowNo({ first: newFirst, last: totalItems });
    } else if (typ === 0) {
      setShowNo({ first: first - 20, last: data.length - 20 });
    } else {
      setShowNo({ first: first + 20, last: data.length });
    }
  };

  // REMARKS input Post data
  const handleSaveClick = async (id) => {
    debugger;
    try {
      const response = await axios.patch(`${url}/${id}`, {
        remarks: inputValues[id],
      });
      console.log("Save successful:", response.data);
      fetchData();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  const handleInputChange = (id, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: value,
    }));
  };

  // Handle Change Status
  const handleChangeStatus = async (e, value) => {
    const status = { status: e.target.value };
    try {
      const response = await axios.put(`${url}/${value.id}`, status, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      if (response.status == 200) {
        fetchData();
      }
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100";
      case "published":
        return " ";
      case "withdraw":
        return "bg-orange-400";
      case "notmade":
        return "bg-blue-300";
      case "today":
        return "bg-lime-300";
      case "made":
        return "bg-golden-300";
      case "probmailsent":
        return "bg-teal-300";
      case "wrongentry":
        return "bg-red-400";
      case "reminder":
        return "bg-blue-300";
      case "noreply":
        return "bg-pink-300";
      default:
        return "";
    }
  };
  const handleClick = (type) => {
    setType(type);
    // You can use react-router-dom's useHistory to programmatically navigate
    navigate(`/issues/journals/entries/status/${type}`);
  };
   const handleButtonClick = (type) => {
    // Navigate to the correct route when a button is clicked
    navigate(`/issues/journals/entries/status/${type}`);
  };

  return (
    <>
      <div className="justify-between bar-nav">
        <div className="space-x-1">
          <button
            onClick={() => setType("pending")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Pending
          </button>
          <button
            onClick={() => setType("published")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Published
          </button>
          <button
            onClick={() => setType("withdraw")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Withdraw
          </button>
          <button
            onClick={() => setType("notmade")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Not Made
          </button>
          <button
            onClick={() => setType("made")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Made
          </button>
          <button
            onClick={() => setType("urgent")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Urgent
          </button>
          <button
            onClick={() => setType("today")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Today
          </button>
          <button
            onClick={() => setType("probmailsent")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Prob Mail Sent
          </button>
          <button
            onClick={() => setType("probmailreceived")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Prob Mail Received
          </button>
          <button
            onClick={() => setType("wrongentry")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Wrong Entry
          </button>
          <button
            onClick={() => setType("remindersent")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Reminder Sent
          </button>
          <button
            onClick={() => setType("reminder")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Reminder
          </button>
          <button
            onClick={() => setType("noreply")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            No Reply
          </button>
          <button
            onClick={() => setType("remarks")}
            className="w-auto px-1 py-2 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
          >
            Remarks
          </button>
          <JournalsDropdown
            options={[
              "Abhinav",
              "Aman",
              "Hitanshu",
              "Mahesh",
              "Pawan",
              "Pratap",
              "Priyanshu",
              "Sachin",
              "Shashank",
              "Sonu",
              "Sonukumar",
            ]}
            label="Made By"
            onOptionSelect={(selectedOption) => setType(selectedOption)}
          />
          <JournalsDropdown
            options={[
              "Mahesh",
              "Partap",
              "Pawan",
              "Priyanshu",
              "Sachin",
              "Sonu",
              "Sonukumar",
            ]}
            label="Published By"
            onOptionSelect={(selectedOption) => setType(selectedOption)}
          />
          <JournalsDropdown
            options={[
              "Akbar (Indonesia)",
              "Emoleila Ejiya (Nigeria)",
              "Elsherbini (Saudi Arabia)",
              "Abaynew Jemal Jenber (Ethiopia)",
              "Debashis Kumar Mondal (Bangladesh)",
              "Sumon Karmakar (Bangladesh)",
              "Marwa Ahmed (Egypt)",
              "Mujittafa Saidu (Nigeria)",
              "Faruk Maradun Hassan (Nigeria)",
            ]}
            label="Agents"
            onOptionSelect={(selectedOption) => setType(selectedOption)}
          />
        </div>

        <div className="flex">
          <div className="w-auto py-2 mr-2 text-sm text-center text-green-700 rounded">
            {first} - {last} of {data.length}
            <hr />
          </div>
          <button
            className="w-auto px-1 py-1 mr-1 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
            onClick={() => handlePagination("start")}
          >
            Start
          </button>
          <button
            className="w-auto px-1 py-1 mr-1 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
            disabled={first <= 1}
            onClick={() => handlePagination(0)}
          >
            Prev
          </button>
          <button
            className="w-auto px-1 py-1 mr-1 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
            disabled={data.length <= last}
            onClick={() => handlePagination(1)}
          >
            Next
          </button>
          <button
            className="w-auto px-1 py-1 mr-1 text-xs text-center uppercase bg-gray-300 rounded text-black-200"
            onClick={() => handlePagination("last")}
          >
            Last
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-16">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block w-full py-2 sm:px-6 lg:px-2 ">
            <div className="overflow-hidden">
              <table className="min-w-full text-sm font-light border border-slate-700">
                <thead className="font-normal uppercase border-b">
                  <tr className="bg-gray-100">
                    <th scope="col" className="p-1 text-xs border ">
                      S.No.
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Type
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Txn Id
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Ref. No.
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Email
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Title
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Created At
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Payment Check On
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Date
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Made On
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Published On
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Remarks
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Raw File
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Main File
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Withdraw On
                    </th>
                    <th scope="col" className="p-1 text-xs border ">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(first, last).map((val, ind) => {
                    return (
                      <tr
                        className={`border border-black ${getStatusColorClass(
                          val.status
                        )}`}
                        key={ind}
                        id={ind}
                      >
                        <td className="p-1 font-normal text-center border">
                          {ind + 1}
                        </td>
                        <td className="p-1 font-normal uppercase border">
                          {val.type}
                        </td>
                        <td className="p-1 font-normal border">{val.txnid}</td>
                        <td className="p-1 font-normal border">
                          {val.refnumber}
                        </td>
                        <td className="w-2 p-2 font-normal border">
                          {val.email.slice(0, 3)}...
                        </td>
                        <td className="p-1 font-normal border">{val.title}</td>
                        <td className="p-1 font-normal border text-end">
                          {val.created_by}
                          <br />
                          <span className="whitespace-nowrap">
                            {formatDate(val.created_at)}{" "}
                          </span>{" "}
                        </td>
                        <td className="p-1 font-normal border text-end">
                          {val.payment_received_by} <br />
                          <span className="whitespace-nowrap">
                            {formatDate(val.payment_received_at)}
                          </span>
                        </td>
                        <td className="p-1 font-normal border">
                          <button type="submit">
                            <i>{val.date}</i>
                          </button>
                        </td>
                        <td className="p-1 font-normal border text-end">
                          {val.made_by}
                          <br />
                          <span className="whitespace-nowrap">
                            {formatDate(val.made_at)}
                          </span>{" "}
                        </td>
                        <td className="p-1 font-normal border text-end">
                          {val.published_by}
                          <br />
                          <span className="whitespace-nowrap">
                            {formatDate(val.published_at)}
                          </span>
                        </td>
                        <td className="font-normal border">
                          <div className="text-end ">
                            <button
                              className="px-1 text-xs text-white uppercase bg-green-700 rounded"
                              onClick={() => handleSaveClick(val.id)}
                            >
                              save
                            </button>
                          </div>
                          <div className="w-full">
                            <input
                              type="text"
                              value={inputValues[val.id] || ""}
                              onChange={(e) =>
                                handleInputChange(val.id, e.target.value)
                              }
                              className="w-20 h-4 p-1 outline-none"
                            />
                            {/* <input type='text' value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)} className='w-20 h-4 p-1 outline-none' /> */}
                          </div>
                        </td>
                        <td className="p-2 font-normal text-center uppercase border">
                          <a href="https://www.royalpublications.net/issues/uploads/archives/Plant Science/vol5-issue1/rawfile-PlantScience5048-1695797758.docx">
                            <b>Download</b>
                          </a>
                          <br />
                          <button
                            type="button"
                            className="p-1 uppercase bg-gray-300 rounded"
                          >
                            Upload
                          </button>
                        </td>
                        <td className="p-2 font-normal text-center uppercase border">
                          <a href="https://www.royalpublications.net/issues/uploads/archives/Plant Science/vol5-issue1/mainfile-PlantScience5048-1695981104.doc">
                            <b>Download</b>
                          </a>
                          <br />
                          <button
                            type="button"
                            className="p-1 uppercase bg-gray-300 rounded"
                          >
                            Upload
                          </button>
                        </td>
                        <td className="p-2 font-normal border "></td>
                        <td className="p-2 font-normal border">
                          <select
                            value={val.status}
                            onChange={(e) => handleChangeStatus(e, val)}
                            className="border-2 border-gray-500 rounded focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select Status</option>
                            <option value="probmailsent">Prob Mail Sent</option>
                            <option value="probmailreceived">
                              Prob Mail Received
                            </option>
                            <option value="remindersent">Reminder Sent</option>
                            <option value="withdraw">Withdraw</option>
                            <option value="urgent">Urgent</option>
                            <option value="today">Today</option>
                            <option value="notmade">Not Made</option>
                            <option value="wrongentry">Wrong Entry</option>
                            <option value="published">Published</option>
                            <option value="pending">Pending</option>
                            <option value="reminder">Reminder</option>
                            <option value="remindersent">Reminder Sent</option>
                            <option value="notmade">Not Made</option>
                            <option value="noreply">No Reply</option>
                          </select>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journals_allbutton;


