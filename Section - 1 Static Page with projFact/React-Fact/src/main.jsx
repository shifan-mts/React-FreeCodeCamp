import './index.css';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.querySelector("#root"));

root.render(<>
  <img src="./react-logo.png" alt="" width={"40px"} />
  <h1>Fun facts about React</h1>
  <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100k stars on Github</li>
    <li>Us maintained by Meta</li>
    <li>Powers thousands of enterprise apps,including mobile apps</li>
  </ul>

</>
);