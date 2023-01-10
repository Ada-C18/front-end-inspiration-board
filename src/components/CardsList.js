import axios from "axios";
import { useEffect } from "react";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

const CardsList = (props) => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        console.log("API is working!!!!", response.data);
      })
      .catch((error) => {
        console.log(
          "API broken :(. no 2xx status code",
          error.response.data.status
        );
        console.log("Repsonse to broken api", error.response.data);
      });
  }, []);
};
