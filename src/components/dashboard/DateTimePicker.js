import React, { useState,useRef } from "react";
import DatePicker from "react-multi-date-picker";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";

function DateTimePicker(props) {
    return (  <>
     <DatePicker
              calendar={persian}
              locale={persian_fa}
              plugins={[weekends()]}
              inputClass="form-control"
              disableYearPicker
              hideYear
              animations={[transition()]} 
              buttons={false}
              onChange={(date)=> props.getDate(date)}
              value={props.date}
              name="date"
            />
    </>);
}

export default DateTimePicker;