import "../css/techSpecs.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const TechSpecs = () => {
  return (
    <div className="techSpecs">
      <Link to="/">
        <button className="buttonHome">Home</button>
      </Link>
      <div className="techspecs-section">
        <div className="techspecs-row">
          <div className="techspecs-rowheader">Audio Technology</div>
          <div className="techspecs-column">
            <ul className="techspecs-list">
              <li>Apple-designed dynamic driver</li>
              <li>Active Noise Cancellation</li>
              <li>Transparency mode</li>
              <li>Personalized Spatial Audio with dynamic head tracking</li>
              <li>Adaptive EQ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="techspecs-section">
        <div className="techspecs-row">
          <div className="techspecs-rowheader">Sensors</div>
          <div className="techspecs-column">
            <ul className="techspecs-list">
              <li>Optical sensor (each ear cup)</li>
              <li>Position sensor (each ear cup)</li>
              <li>Case-detect sensor (each ear cup)</li>
              <li>Accelerometer (each ear cup)</li>
              <li>Gyroscope (left ear cup)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="techspecs-section">
        <div className="techspecs-row">
          <div className="techspecs-rowheader">Microphones</div>
          <div className="techspecs-column">
            <ul className="techspecs-list">
              <li>Nine microphones total:</li>
              <br />
              <li>Eight microphones for Active Noise Cancellation</li>
              <li>
                Three microphones for voice pickup (two shared with Active Noise
                Cancellation and one additional microphone)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="techspecs-section">
        <div className="techspecs-row">
          <div className="techspecs-rowheader">Chip</div>
          <div className="techspecs-column">
            <ul className="techspecs-list">
              <li>Apple H1 headphone chip (each ear cup)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="techspecs-section">
        <div className="techspecs-row">
          <div className="techspecs-rowheader">Controls</div>
          <div className="techspecs-column">
            <ul className="techspecs-list">
              <li>
                <h3>Digital Crown:</h3>
              </li>
              <li>Turn for volume control</li>
              <li>Press once to play or pause media</li>
              <li>Press once to answer a call or mute or unmute</li>
              <li>Press twice to end a call</li>
              <li>Press twice to skip forward</li>
              <li>Press three times to skip back</li>
              <li>Press and hold for Siri</li>
              <br />
              <li>
                <h3>Noise control button:</h3>
              </li>
              <li>
                Press to switch between Active Noise Cancellation and
                Transparency mode
              </li>
              <br />
              <li>
                <h3>Hey Siri:</h3>
              </li>
              <li>
                Say “Hey Siri” to do things like play a song, make a call, or
                get directions
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="environment">
        <div className="environment-div">
          <header className="environment-header">
            <div className="environment-header-title-div">
              <h2 className="environment-header-title">
                AirPods Max and the Environment
              </h2>
              <img
                className="apple_icon_green"
                src="src/assets/img/apple_icon__green.png"
                alt="apple"
              />
            </div>
            <p>
              Apple takes a complete product life cycle approach to determining
              our environmental impact.
            </p>
          </header>
          <hr />
          <div className="environment-content">
            <h3>
              AirPods Max are designed with the following features to reduce
              environmental impact:
            </h3>
            <ul className="environment-list">
              <li>Brominated flame retardant–free</li>
              <li>PVC-free</li>
              <li>Beryllium-free</li>
              <li>Mercury-free</li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="environment-footer"></footer>
    </div>
  );
};
