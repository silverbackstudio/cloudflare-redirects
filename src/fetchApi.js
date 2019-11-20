export default function fetchApi(path, payload, config){
  
  const API_PROXY = '';
  const API_ENDPOINT = `/client/v4/accounts/${config.cfAccount}/storage/kv/`;
  
  let url = API_PROXY + API_ENDPOINT + path;
  let options = Object.assign(
    {
      method: "GET",
      headers: {}
    },
    payload
  );

  options.headers['X-Auth-Email'] = config.cfEmail;
  options.headers['X-Auth-Key'] = config.cfKey;

  return fetch(url, options);

}