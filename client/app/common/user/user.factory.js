const UserFactory = function ($http, $log) {
  return {
    submitQuery,
  };

  function submitQuery(q) {
    return $http.post('http://127.0.0.1:5000/parse', { q })
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

UserFactory.$inject = ['$http', '$log'];

export default UserFactory;
