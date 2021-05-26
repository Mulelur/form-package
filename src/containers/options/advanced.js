import React from "react";
import { AdvancedOptions } from "../../components";
import {
  BoxShadow,
  Label,
  OutLineColor,
} from "../../components/options/advancedOptions";

export default function AdvancedContainer() {
  return (
    <AdvancedOptions>
      <BoxShadow></BoxShadow>
      <OutLineColor></OutLineColor>
      <Label>label</Label>
    </AdvancedOptions>
  );
}
