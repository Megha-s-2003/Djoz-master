// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import DiscographyPage from "./Pages/DiscographyPage";
// import Tours from "./Pages/Tours";
// import Videos from "./Pages/Videos";
// import Blog from "./Pages/Blog";
// import Contact from "./Pages/Contact";
// function App() {
//   return (
   
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/discography" element={<DiscographyPage />} />
//         <Route path="/tours" element={<Tours />} />
//         <Route path="/videos" element={<Videos />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact/>} />
//       </Routes>
   
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import DiscographyPage from "./Pages/DiscographyPage";
import Tours from "./Pages/Tours";
import Videos from "./Pages/Videos";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/discography" element={<DiscographyPage />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
     
    </Routes>
    </>
  );
}

export default App;
