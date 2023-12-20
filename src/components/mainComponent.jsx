import "../css/main.css";
import { ChooseColor } from "./chooseColor";
import { MainContent } from "./mainContent";

export const Main = ({contentItem}) => {
  return (
    <div className="container">
      <ChooseColor contentItem={contentItem}/>
      <MainContent />
    </div>
  );
};
