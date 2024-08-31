import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Pages_journals/Navbar';
import Login from './Components/Login';
import Journals from './Components/Pages_journals/Journals';
import Indexing from './Components/pages_Indexing/Indexing';
import Editors from './Components/Pages_editors/Editors';
import Add_Editers from './Components/Pages_editors/Add_Editers';
import Journals_allbutton from './Components/Pages_journals/Journals_allbutton';
import Journals_issues from './Components/Pages_journals/Journals_issues';
import Journals_nav from './Components/Pages_journals/Journals_nav';
import Addarticles from './Components/Pages_journals/Addarticles';
import Addissues from './Components/Pages_journals/Addissues';
import Addjouranls from './Components/Pages_journals/Addjouranls';
import GlobalProvider from "./Components/context/GlobalContext";
import Year_Journal_list from './Components/Pages_journals/Year_Journal_list';




function App() {
  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route exact path="/issues/" element={<Navbar />} >
            <Route index element={<Dashboard />} />
            <Route path="journals" element={<Journals />} />
            <Route path="journals" element={<Journals_nav />} />
            <Route path="journals/entries/status" element={<Journals_allbutton />} />
            <Route path="journals/entries/status/1" element={<Journals_issues />} />
            <Route path="journals/entries/status/149/add" element={<Addissues />} />
            <Route path="journals/entries/status/149/2023" element={<Addarticles />} />
            <Route path="journals/entries/status/149/2023/1" element={<Addjouranls />} />
            <Route path="journals/entries/status/1/2020/" element={<Year_Journal_list />} />
            <Route path="indexing" element={<Indexing />} />
            <Route path="editors" element={<Editors />} />
            <Route path="editors/add" element={<Add_Editers />} />
            
          </Route>
          <Route path="/issues/login" element={<Login />} />

        </Routes >
      </GlobalProvider>
    </>
  );
}

export default App;
