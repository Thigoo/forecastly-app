import moment, { Moment } from "moment";

export const formatDate = (date: Moment) => {
  return moment(date).format("ddd, DD MMM");
};
