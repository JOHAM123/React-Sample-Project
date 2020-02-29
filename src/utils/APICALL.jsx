import React from "react";
import PropTypes from "prop-types";
import { BASEURL } from "../constants/Url";
import axios from "axios";

const defaultProps = {
  url: BASEURL,
  type: "GET",
  data: {}
};

const APICALL = ({ URL, type, data, config }) => {
  return new Promise(function(resolve, reject) {
    switch (type) {
      case "GET":
        return resolve(axios.get(`${BASEURL}${URL}`, config));
      case "POST":
        return resolve(axios.post(`${BASEURL}${URL}`, data, config));
      case "DELETE":
        return resolve(axios.delete(`${BASEURL}${URL}`,config));
      case "PUT":
        return;
      default:
        reject("Request type not matched. ");
    }
    reject();
  }).catch(error => {
    throw error;
  });
};
export default APICALL;
