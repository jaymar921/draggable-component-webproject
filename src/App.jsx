import "./App.css";
import DragContainer from "./components/containers/DragContainer";
import DragIcon from "./components/draggables/DragIcon";
import DragWindow from "./components/draggables/DragWindow";
import profilePhoto from "./assets/profile_pic.jpg";
import { useState } from "react";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const getScreenCenter = () => {
    const centerX = window.innerWidth / 2 - 200;
    const centerY = window.innerHeight / 2 - 150;
    return { x: centerX, y: centerY };
  };
  return (
    <>
      <div>
        <DragContainer>
          <DragIcon
            posX={150}
            posY={50}
            icon={profilePhoto}
            title={"Jayharron"}
            onClick={() => {
              setShowPortfolio(true);
            }}
          />
          <DragWindow
            posX={getScreenCenter().x}
            posY={getScreenCenter().y}
            show={showPortfolio}
            setShow={setShowPortfolio}
            icon={"📚"}
            title="Jayharron's Portfolio"
            content={
              <>
                <div>
                  <h2 className="text-white text-2xl mb-4">Portfolio</h2>
                  <p className="text-white">
                    Welcome to my portfolio! Here are some of my projects:
                  </p>
                  <ul className="list-disc list-inside text-white mt-2">
                    <li>Project 1: Draggable Components Web App</li>
                    <li>Project 2: React Portfolio Website</li>
                    <li>Project 3: Interactive UI Designs</li>
                  </ul>
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="mt-4 p-2 rounded-md w-full"
                  />
                </div>
              </>
            }
          />
        </DragContainer>
      </div>
    </>
  );
}

export default App;
