import "./App.css";

import HomePage from "./components/pages/home.page";
import AboutPage from "./components/pages/about.page";
import ContactUsPage from "./components/pages/contactus.page";
import UsersPage from "./components/pages/users.page";
import UserDetailPage from "./components/pages/userdetail.page";

import {BrowserRouter as Router, Routes, Route} from "react-router";

import PageNotFound from "./components/pages/notfound.page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
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
//empty dependency array-> runs only once when the component is mounted
//dependencies array-> runs when the dependencies change
//state change -> component re-render -> useEffect runs after the render is committed to the screen
//cleanup function -> runs when the component is unmounted or when the dependencies change
//next effect start hunu agadi, cleanup function run huncha--runs when component is unmount or when component is re-rendered
//useRef()->dom reference
//useContext() -> to manage global state in react app --> any component can access the global state without prop drilling
//prop drilling -> passing props from parent to child to grandchild and so on
//useCallback() -> to memorize a function->>it memorizes the function and returns the same function reference on every render
//useMemo() -> to memorize a function or a value->->memorizes function ,calculates value and renders result and it memorizes the result


//custom hook->reuse logic

//A->Z
//context: {state:3}
//a-d
//e-g

//state lifting-> when we want to share state between components, we lift the state up to the common parent component and pass it down as props to the child components
//Suppose we have App-counter{count:0}-counter
// - counter2
//app is parent and they have same state, so we lift the state up to the common parent component and pass it down as props to the child components



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