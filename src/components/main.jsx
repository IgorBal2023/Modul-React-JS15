import "../css/main.css";
import { ChooseColor } from "./chooseColor";
import { MainContent } from "./mainContent";

export const Main = () => {
  return (
    <div className="container">
      <ChooseColor />
      <MainContent />
    </div>
  );
};
