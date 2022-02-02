import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

function CreateRecipe() {
  const { id } = useParams();

  return <Box>{`recipe ${id}`}</Box>;
}

export default CreateRecipe;
