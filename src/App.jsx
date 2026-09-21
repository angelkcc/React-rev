import "./App.css";
import UserCard from "./components/cards/user.card";
import Greet from "./components/cards/greet.card";
import ProductCard from "./components/cards/product.card";
import { Button } from "./components/buttons/button";
import Counter from "./components/counter";
import Register from "./components/forms/register.form";
import Login from "./components/forms/login.form";
//import Positions from "./components/positions";
import UserList from "./components/userlist";

function App() {
  // let x = 34;
  // let y = 14;

  //* without jsx
  // const ele = React.createElement("h1", null, "Hello world");
  // const ele1 = React.createElement(
  //   "div",
  //   null,
  //   React.createElement("p", null, "jsx"),
  //   React.createElement("p", null, "jsx"),
  // );

  //* with jsx
  // const head = <h1>Hello world</h1>;
  // const obj = {
  //   a: "a",
  //   b: "b",
  // };

  const onLoginClick = () => {
    console.log("Login clicked");
  };
  const onRegClick = () => {
    console.log("Register clicked");
  };

  return (
    <div
    // onClick={(e) => {
    //   console.log("outer div clicked -> target", e.target);
    //   console.log("outer div clicked -> current target", e.currentTarget);
    // }}
    >
      {/* {head}
      {ele}
      {ele1} */}
      <Counter />
      <Register />
      <UserList/>
      {/* <Positions/> */}

      <div
        style={{ border: "1px solid gray", height: "100px" }}
        // onClick={(e) => {
        //   console.log("parent clicked -> target", e.target);
        //   console.log("parent clicked -> current target", e.currentTarget);
        // }}
      //  onMouseEnter={() => {
      //    console.log("mouse enter");
      //  }}
       // onMouseLeave={() => {
         // console.log("mouse leave");
        //}}
        // onMouseMove={() => {
        //   console.log("mouse move");
        // }}
      >
        <Button label="Login" onClick={onLoginClick} />
        <Login/>
      </div>
      <Button label="Register" onClick={onRegClick} />
      <Button label="Submit" />

      {/* <Greet userName={"Ram"} age={28} isAdmin={true} obj={obj} />
      <Greet userName={"John"} /> */}
      <Greet />
      {/*  <Greet /> */}
      {/* user */}
      {/* {UserCard()} */}
      <UserCard
        user={{ name: "John Doe", email: "Johndoe@gmal.com" }}
        skills={["HTML", "CSS"]}
      />
      <UserCard
        user={{ name: "Alice Doe", email: "Johndoe@gmal.com" }}
        skills={["HTML", "CSS", "Js", "React"]}
      />
      {/* <input
        type="text"
        placeholder="enter your name"
        onChange={handleChange}
        onFocus={(e) => {
          console.log(e);
          console.log("name input focused");
        }}
        onBlur={() => {
          console.log("name input blurred");
        }}
      /> */}
      <br />
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="password"
      />
      <br />
      {/* <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="email"
      />
      <br />
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="color"
      />
      <br />
      <input type="number" min={0} max={10} />
      <br />
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="date"
      />
      <br />
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="time"
      />
      <br />
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="datetime-local"
      />
      <br />
      <input type="month" />
      <br />
      <input type="week" />
      <br />
      <input
        onChange={(e) => {
          console.log(e.target.files);
        }}
        multiple={false}
        type="file"
      />
      <br /> */}
      {/* <input
        onChange={(e) => {
          console.log(e.target.checked);
        }}
        type="checkbox"
      />
      <br />
      <input type="radio" />
      <br />
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="range"
        min={0}
        max={100}
      />
      <br />
      <input type="url" />
      <br />
      <select
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        <option>Choose an option</option>
        <option value={"A"}>A</option>
        <option value={"B"}>B</option>
        <option value={"C"}>C</option>
      </select> */}
      {/* <UserCard />
      <UserCard />
      <UserCard /> */}
      {/* ul -> 2/4 */}
      <ul
        onClick={(e) => {
          const element = e.target.closest(".item");
          const id = element.dataset.id;
          const name = element.dataset.name;
          //! delete logic
          console.log(id, name);
        }}
      >
        <li className="item" data-id={"1"} data-name="Apple">
          <span>Apple</span>
          <button>Delete</button>
        </li>
        <li className="item" data-id={"2"} data-name="Banana">
          <span>Banana</span>
          <button>Delete</button>
        </li>
        <li className="item" data-id={"3"} data-name="Kiwi">
          <span>Kiwi</span>
          <button>Delete</button>
        </li>
      </ul>
      <ProductCard />
    </div>
  );
}

export default App;

//* jsx [js + html] -> js extended syntax for xml

//* functional component
//: js function  -> return jsx
//? function name -> always start with capital
//? return single [parent] jsx

//* jsx fragment -> <React.Fragment> </React.Fragment>  , <></>

//* props -> properties
// object
// parent -> child

//* children prop

//* events ->
//? button -> click event
//? input -> change ''
//? form -> submit

//* event propagation
//? event bubbling -> target -> parent ->
//todo: event capturing

//* input -> change , blur , focus
//* form -> submit event

//todo: state & list rendering
//* state -> data
//* useSate()
//hooks
//any function which starts with use is called hook
//? useState() -> react hook -> to manage state in functional component
//? useEffect() -> react hook -> to manage side effects in functional component-> to work outside the rendering of react component
//useEffect->api call, webapis, timer, dom manipulation, event listener, cleanup
//useRef()_>dom reference
//useContext() -> to manage global state in react app --> any component can access the global state without prop drilling
//prop drilling -> passing props from parent to child to grandchild and so on
//useCallback() -> to memorize a function->>it memorizes the function and returns the same function reference on every render
//useMemo() -> to memorize a function or a value->->memorizes function ,calculates value and renders result and it memorizes the result




//SPA and MPA-> in spa, page reload is not required, in MPA page reload is required
//? SPA -> single page application
//? MPA -> multi page application
//firstly mpa is used but now a days spa is used because of its speed and performance
//rendering/rerendering -> when the state changes, the component re-renders and updates the UI accordingly
//spa is rerendered without page reload, but mpa is reloaded with page reload

//DOM-> document object model
//VDOM-> virtual document object model->without page reload -> only update the changed part of the page that is why react is fast
//reconciliaton-> means react will compare the new vdom with the old vdom and update the dom accordingly
//diffing algorithm-> react will compare the new vdom with the old vdom and update the dom accordingly with the use of diffing algorithm

//? event delegation ->
// list -> 100 ->
// 100 item -> 100 event handler create -> 100 ref

// ul -> parent -> items -> 100 -> 100 ref
// 1-> handler -> 1 ref -> ul [parent] ->

// parent
// nav + aside -> dynamic

// layout.jsx
// navbar
// dynamic/children
// footer

//! html tags

//* semantic
//* non semantic

//* typography
//? p , small , span
//? i,em , b , strong ,
// heading -> h1-h6

//* layout
//? div , section, nav, footer, header , aside, main , article

//* link
//? a

//* list
//? ul , ol , li

//* table
//? table , thead , tbody , tr , td ..

//* multimedia
//? img , video , audio

//*form
//* from , input  , button , label

//block , inline , inline-block element

//* css
//typography
//font->size,weight,style,family
//layout
//box model
//flex box
//grid

//position-> static,relative,absolute,fixed,sticky
//static-> in this positioning context, the element is positioned according to the normal flow of the document. The top, right, bottom, and left properties have no effect on a statically positioned element.
//relative-> in this positioning context, the element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left. The element's original position in the normal flow is preserved, and it can still affect the layout of other elements.
//absolute-> in this positioning context, the element is positioned relative to its nearest positioned ancestor (if any) or to the initial containing block. The top, right, bottom, and left properties have an effect on an absolutely positioned element.
//fixed-> in this positioning context, the element is positioned relative to the viewport. The top, right, bottom, and left properties have an effect on a fixed-positioned element.
//sticky-> in this positioning context, the element is positioned based on the user's scroll position. It behaves like a relatively positioned element until it crosses a specified threshold, at which point it becomes fixed.