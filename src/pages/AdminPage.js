import React from "react";
import {
  Button,
  Typography,
  Item,
  Grid,
} from "@mui/material";
import ProductCard from "../components/ProductCard";

const gridStyle = {
    paddingTop: '20px',
    paddingLeft: 5,
    alignItems: "center",
    justifyContent: "center"
}

const AdminPage = () => {
  return (
    <div className="adminpage">
      <Grid container spacing={2} direction="row" align = "center" justifyContent = "center" sx={{...gridStyle}}>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        
        
        
       
       
      </Grid>
    </div>
  );
};

export default AdminPage;
