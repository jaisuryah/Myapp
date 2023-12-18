import { Link } from "react-router-dom"
import StateHoldObject from "./Hooks/StateHoldObject"
import StateHookFuntion from "./Hooks/StateHookFunction"
import TwoWayBinding from "./Hooks/TwoWayBinding"
import DynamicRendering from "./ParentChild/DynamicRendering"
import Parent from "./ParentChild/ParentChildComponent"
import ArrowProps from "./Props/ArrowProps"
import PropsClass from "./Props/PropsClass"
import PropsDirectFunctional from "./Props/PropsDirectFunctional"
import PropsFunctional from "./Props/PropsFunctional"
import StateClassCom from "./States/StateClassCom"
import ClassComponent from "./component/ClassComponent"
import FunctionalComponent from "./component/FunctionalComponent"
import List from "./List/List"
import ListProp from "./List/ListusingProps"
import ListObject from "./List/ListObject"
import InputFileUpload from "./GoogleMaterialUI/button"
import IndeterminateCheckbox from "./GoogleMaterialUI/button"
import IconButtons from "./GoogleMaterialUI/button"
import SignInSide from "./GoogleMaterialUI/Signin"
import ToggleButton from "./States/StateToggle"
import ErrorBoundary from "./exception/ErrorBoundary"
import Car from "./exception/Car"
import Hero from "./exception/Hero"
import ComponentLifeCycle from "./LifeCycle/ComponentLifeCycle"

export default function App()
{
   return (
    <div>
    <PropsFunctional name="Deepak" age="19"></PropsFunctional>
   <PropsDirectFunctional name ="Jaisuryah" age="20"></PropsDirectFunctional>
    <PropsClass college="SKCT"></PropsClass>
    <ArrowProps name="Darshan"  age="-1"></ArrowProps>
    <StateClassCom></StateClassCom>
    <StateHookFuntion></StateHookFuntion>
    <StateHoldObject></StateHoldObject>
      <Parent></Parent>
      <DynamicRendering></DynamicRendering>
      <TwoWayBinding></TwoWayBinding>
      <List></List>
      <ListProp></ListProp>
      <ListObject></ListObject>
      <ToggleButton></ToggleButton>
      <ErrorBoundary>
              <Car carName="Thar"></Car>
              <Hero heroName="hero"></Hero>
      </ErrorBoundary>
      <ComponentLifeCycle></ComponentLifeCycle>
    </div>
   )
}