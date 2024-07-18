import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useHistory, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

const RecipeTable = ({ data }) => {
  const navigate = useNavigate();

  function handleRecipeClick(id) {
    navigate(`/recipe/${id}`);
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        muiTableHeadCellProps: { style: { color: "green" } }, // Custom props
        enableHiding: false, // Disable a feature for this column
      },
      {
        accessorKey: "main_ingredient",
        header: "Main Ingredients",
      },
      {
        accessorKey: "image",
        header: "Image",
      },
      {
        id: "actions",
        header: "Actions",
        Cell: ({ row }) => (
          <Button
            variant="contained"
            color="primary"
            // onClick={() => navigate(`/recipe/${row.original.id}`)}
            onClick={() => handleRecipeClick(row.original.id)}
          >
            Details
          </Button>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, // Must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowSelection: true, // Enable some features
    enableColumnOrdering: true, // Enable a feature for all columns
    enableGlobalFilter: false, // Turn off a feature
  });

  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default RecipeTable;
