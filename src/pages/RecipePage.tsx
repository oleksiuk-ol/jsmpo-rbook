import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const CreateRecipe: React.FC = () => {
  const { id } = useParams();

  return <Box>{`recipe ${id}`}</Box>;
};

export default CreateRecipe;
