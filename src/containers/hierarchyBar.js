import React, { useContext } from "react";
import { HierarchyBar } from "../components";
import {
  HierarchyItem,
  HierarchyItemSelected,
} from "../components/layout/hierarchyBar";
import { FormContext } from "../context/FormContext";

export default function HierarchyBarContainer() {
  const { state } = useContext(FormContext);
  return (
    <HierarchyBar>
      {state.activeFildes.map((item) => {
        return state.selectedFilde.id === item.id ? (
          <HierarchyItemSelected draggable>
            {item.fildeType}
          </HierarchyItemSelected>
        ) : (
          <HierarchyItem draggable>{item.fildeType}</HierarchyItem>
        );
      })}
    </HierarchyBar>
  );
}
