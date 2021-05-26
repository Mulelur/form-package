import React, { useContext, useState } from "react";
import { Column, Filde, Grid, InputTextField } from "../components";
import Demo from "../components/demo";
import { FormContext } from "../context/FormContext";

export default function GridContainer() {
  const { state, dispatch, act, setAct, isEdit } = useContext(FormContext);
  function handleSelectFilde(e, i) {
    dispatch({ type: "selectFilde", payload: i });
  }

  function handleDrop(e) {
    // let type = e.dataTransfer.getData("type");
    const selected = state.selectedFilde;
    setAct([...act, selected]);
    dispatch({ type: "addFilde" });
    console.log(act);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <Grid>
      <Column
        onDrop={(e) => {
          handleDrop(e);
        }}
        onDragOver={(e) => {
          handleDragOver(e);
        }}
      >
        {act.map((item) => {
          return isEdit ? (
            <Filde
              onClick={(e) => {
                handleSelectFilde(e, item);
              }}
            >
              {item.filde}
            </Filde>
          ) : (
            <Demo>{item.filde}</Demo>
          );
        })}
      </Column>
    </Grid>
  );
}
