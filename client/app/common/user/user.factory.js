const UserFactory = function ($http, $log, NLUMEndpoint) {
  return {
    submitQuery,
  };

  function submitQuery(q) {
    return $http.post(`${NLUMEndpoint}/parse`, { q })
      .then(onComplete)
      .catch(onFailed);

    function onComplete(response) {
      return response.data;
    }

    function onFailed(error) {
      $log.error('XHR Failed for submitQuery.' + error.data);
    }
  }
};

UserFactory.$inject = ['$http', '$log', 'NLUMEndpoint'];

export default UserFactory;
