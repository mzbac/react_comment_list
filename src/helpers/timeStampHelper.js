import moment from 'moment';

export default function (dateString) {
  return moment(dateString, moment.ISO_8601).fromNow();
};