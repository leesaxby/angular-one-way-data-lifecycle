import memberTmpl from './member.tmpl.html';
import styles from './member.scss';


export default {
  templateUrl: memberTmpl,
  controller: function () {

  },
  controllerAs: 'vm',
  bindings: {
      heroes: '<'
  }
};
