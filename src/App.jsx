import "./App.css";
import DragContainer from "./components/containers/DragContainer";
import DragIcon from "./components/draggables/DragIcon";
import DragWindow from "./components/draggables/DragWindow";
import profilePhoto from "./assets/profile_pic.jpg";
import reactLogo from "./assets/react.svg";
import { useEffect, useState } from "react";
import {
  CategoryScale,
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
} from "chart.js";

Chart.register([
  CategoryScale,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
]);

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const Data = [
      {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823,
      },
      {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345,
      },
      {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 555,
      },
      {
        id: 4,
        year: 2019,
        userGain: 90000,
        userLost: 4555,
      },
      {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 234,
      },
    ];

    const ctx = document.getElementById("myChart").getContext("2d");

    const mychart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Data.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      },
    });
    return () => {
      mychart.destroy();
    };
  }, []);

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
          <DragIcon
            posX={250}
            posY={50}
            icon={reactLogo}
            title={"Chart"}
            onClick={() => {
              setShowResume(true);
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
          <DragWindow
            posX={getScreenCenter().x + 30}
            posY={getScreenCenter().y + 30}
            show={showResume}
            setShow={setShowResume}
            icon={"📄"}
            title="Resume"
            content={
              <>
                <div>
                  <h2 className="text-white text-2xl mb-4">Resume</h2>
                  <p className="text-white">
                    This is a placeholder for the resume content.
                  </p>
                  <ul className="list-disc list-inside text-white mt-2">
                    <li>Experience 1: Software Developer at XYZ Corp</li>
                    <li>Experience 2: Frontend Engineer at ABC Inc</li>
                    <li>Education: B.S. in Computer Science</li>
                  </ul>

                  <canvas id="myChart"></canvas>
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
