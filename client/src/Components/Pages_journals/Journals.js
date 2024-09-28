import React, { useEffect, useState } from "react";
import Journals_nav from "./Journals_nav";
import axios from "axios";
import { Link } from "react-router-dom";

const Journals = () => {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  let url = "https://stocksgainer.com/api/journals";

  const handleChange = async (e,value) => {
    try {
      const response = await axios.put(
        `${url}/${value.id}`,
        { samplefile: `${e.target.files[0].name}` },
        {
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("error while uploading document", error);
    }
  };

  // Get Api

  const GetData = () => {
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
          if (resp.status === 200) {
            setData(resp.data);
            // console.log(resp.data);
          }
        });
    } catch (error) {}
  };
  useEffect(() => {
    GetData();
  }, []);

  // Function to handle click event and add unique IDs
  const handleShortNameClick = (id) => {
    // Check if the ID is already in the list, if not, add it
    if (!selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // console.log(data);
  return (
    <>
      <Journals_nav />
      <div className="flex flex-col mt-16">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full text-sm font-light border border-slate-700">
                <thead className="font-medium border-b ">
                  <tr className="bg-gray-100">
                    <th scope="col" className="p-2 text-sm border" nowrap="">
                      S. NO.
                    </th>
                    <th scope="col" className="p-2 text-sm border">
                      SHORT NAME
                    </th>
                    <th scope="col" className="p-2 text-sm border">
                      FULL NAME
                    </th>
                    <th scope="col" className="p-2 text-sm border">
                      DOMAIN
                    </th>
                    <th scope="col" className="p-2 text-sm border">
                      EMAIL
                    </th>
                    <th scope="col" className="p-2 text-sm border">
                      SAMPLE FILE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val, ind) => {
                    return (
                      <tr class="border  border-black">
                        <td className="p-2 font-medium border ">{ind + 1}</td>
                        <td className="p-2 font-medium text-blue-500 border">
                          <Link
                            to={`/issues/journals/entries/status/${val.id}`}
                            onClick={() => handleShortNameClick(val.id)}
                          >
                            {val.short_name}
                          </Link>
                        </td>
                        {/* <td onClick={() => handleSortNameClick(val)} className="p-2 font-medium text-blue-500 border">
                            <Link to={"/issues/journals/entries/status/149"}>
                              {val.short_name}
                            </Link>
                          </td> */}
                        <td className="p-2 font-medium border ">
                          {val.full_name}
                        </td>
                        <td className="p-2 font-medium text-blue-500 border">
                          <a href={val.domain}>{val.domain.substr(8)}</a>
                        </td>
                        <td className="p-2 font-medium border ">{val.email}</td>
                        <td className="p-2 font-medium border ">
                          {/* DOWNLOAD | UPLOAD */}
                          <input
                            type="file"
                            accept="file/*"
                            onChange={(e) => {
                              handleChange(e, val);
                            }}
                          />
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

export default Journals;
