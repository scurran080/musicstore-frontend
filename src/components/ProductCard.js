import React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  SpeedDial,
  SpeedDialIcon,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const ProductCard = () => {
  return (
    
    <div className="adminpage">
      <Card variant="outlined" sx={{ maxWidth: 350, minWidth: 350, maxHeight: 400, minHeight: 400 }}>
        <CardContent>
          <SpeedDial
            ariaLabel="addItem"
            
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          ></SpeedDial>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
