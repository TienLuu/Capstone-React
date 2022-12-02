import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const InputSelect = ({ itemName, sd, children, size }) => {
   const [itemSelect, setItemSelect] = React.useState("");

   const handleChange = (event) => {
      console.log(event.target.value);
      setItemSelect(event.target.value);
   };
   return (
      <>
         <FormControl sx={sd} size={size}>
            <InputLabel id="demo-select-small">{itemName}</InputLabel>
            <Select
               labelId="demo-select-small"
               id="demo-select-small"
               value={itemSelect}
               label={itemName}
               onChange={handleChange}
               sx={{ display: "flex", alignItems: "center" }}
            >
               {children}
            </Select>
         </FormControl>
      </>
   );
};

export default InputSelect;
