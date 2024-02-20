import { observable, action } from 'mobx';

class TitleStore {
  @observable title = "test";

  @action addTitle(titlePage:string) {
    this.title = titlePage;
  }
}

export default TitleStore;