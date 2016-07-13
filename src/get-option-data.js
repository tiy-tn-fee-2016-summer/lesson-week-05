import parseJson from 'parse-json';

export default function () {
  return fetch('http://tiny-tn.herokuapp.com/collections/lunch')
    .then(parseJson);
}
