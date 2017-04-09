import organisationTmpl from './organisation.tmpl.html';
import styles from './organisation.scss';

export default {
  templateUrl: organisationTmpl,
  controller: function () {
      this.$onInit = function() {
          let vm = this;
          vm.heroes = [
              {
                  name: 'Peter Parker',
                  alias: 'Spider-man'
              },
              {
                  name: 'Bruce Banner',
                  alias: 'Hulk',
              },
              {
                  name: 'Tony Stark',
                  alias: 'Iron-man'
              }
          ];
      }
  },
  controllerAs: 'vm',
  bindings: {
      name: '@'
  }
};
