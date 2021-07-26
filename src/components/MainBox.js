import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";
function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? <MainBox />
    - Which component should have methods to control state? <MenuBar />
    - Where should these methods be called? <MenuBar />
  */
 const [menuName, setMenuName] = useState("profile");

 

//  let detailsToDisplay 
//  if (menuName === "profile") {
//    detailsToDisplay = <Profile />
//  } else if (menuName === "photos") {
//   detailsToDisplay = <Photos />
//  } else if (menuName === "cocktails") {
//   detailsToDisplay = <Cocktails />
//  } else if (menuName === "pokemon") {
//   detailsToDisplay = <Pokemon />
//  }

//  function toggleClick(menuSelect){
//   setMenuName(menuSelect) 
// }

let detailsToDisplay = {
  profile: <Profile />,
  photos : <Photos />,
  cocktails : <Cocktails />,
  pokemon : <Pokemon />
}
const toggleClick = (usersChoice) => setMenuName(usersChoice)

  return (
    <div>
      <MenuBar  toggleClick={toggleClick} menuName={menuName}/>
      {detailsToDisplay[menuName]}
    </div>
  );
}
export default MainBox;