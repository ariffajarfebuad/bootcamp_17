// function App() {
//   const navbar = (
//     <nav className="navbar container">
//       <ul className="navbar-menu">
//         <li>BOOTCAMP BATCH 17 : EXPERIMENT WITH REACT JS</li>
//         <li><a href="/">Home</a></li>
//         <li><a href="/contacts">Contacts</a></li>
//         <li><a href="/about">About</a></li>
//       </ul>
//     </nav>
//   );
  
//     const batch = 17;
//     const materi = "React JS";
//     const mentor = "isa";
//     const topic = ["<li>React + vite</li>", "<li>JSX</li>", "<li>Variable in JSX</li>"];

//     return (
//       <div>
//         {navbar}
//         <h1>Bootcamp Batch {batch} : Experiment with reactjs</h1>
//         <p>Batch: {batch}</p>
//         <p>materi: {materi}</p>
//         <p>Mentor: {mentor}</p>

//         <h2>Topik hari ini:</h2>
//         <ul dangerouslySetInnerHTML={{ __html: topic.join('') }} />
//       </div>
//     );

    
// }
// export default App;   



import "./App.css";
import Comment from "./Comment.jsx";

function App() {
  const batch = 17;
  const materi = "React JS";
  const mentor = "Nisa";

  const topikHariIni = ["React + Vite", "JSX", "Variable in JSX"];

  return (
    <div className="container">
      <nav className="full-nav">
        <div className="nav-left">
          BOOTCAMP Batch 17 : Experiment with REACTJS
        </div>
        <div className="nav-right">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>
      </nav>

      <h1>BOOTCAMP React</h1>

      <p>Batch: {batch}</p>
      <p>Materi: {materi}</p>
      <p>Mentor: {mentor}</p>

      <h3>Topik Hari Ini:</h3>
      <ul>
        {topikHariIni.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    <h1>Comments section</h1>
    <Comment />
   
    </div>
  );
}

export default App;



