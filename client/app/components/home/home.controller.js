class HomeController {
  constructor(User) {
    this.name = 'home';
    this.loading = false;

    this.userFactory = User;
  }

  submit() {
    this.loading = true;
    this.userFactory.submitQuery(this.q)
      .then((result) => {
        this.loading = false;
        this.result = result
      })
  }
}

HomeController.$inject = ['User'];

export default HomeController;
