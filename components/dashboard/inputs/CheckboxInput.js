import React from "react";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";



const useStyles = makeStyles({
 
  icon: {
    borderRadius: 4,
    width: 20,
    height: 20,
    backgroundColor: "#FFDBA8",
 
  },
  checkedIcon: {
    backgroundColor: "#F26144",
    "&:before": {
      display: "block",
      width: 16,
	  height: 16,
	  backgroundRepeat: "no-repeat",
	  backgroundPosition: "center",
	  margin: "auto",
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
 
  },
});
function CheckboxInput({label}, props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedLVault: false,
    checkedLStorage: false,
    checkedLaundry: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedVault}
              onChange={handleChange}
              name="checkedVault"
              className={classes.root}
              disableRipple
              color="default"
              checkedIcon={
                <span className={clsx(classes.icon, classes.checkedIcon)} />
              }
              icon={<span className={classes.icon} />}
              inputProps={{ "aria-label": "decorative checkbox" }}
              {...props}
            />
          }
          label={label}
        />
      </FormGroup>
  );
}

CheckboxInput.propTypes = {
  label : PropTypes.string,
};

export { CheckboxInput };
