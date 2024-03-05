import React, { useState, useEffect } from "react";
import { WoodieMainContainer, WoodieTitle, WoodieStack, WoodieYear } from "./styles";

import './index.css';

function WoodieMainPage () {

  return (
    <WoodieMainContainer>
      <WoodieStack>
        <WoodieYear>
          FIRST 2024
        </WoodieYear>
        <WoodieTitle>
          CRESCENDO
        </WoodieTitle>
      </WoodieStack>
    </WoodieMainContainer>
  );
}

export default WoodieMainPage;