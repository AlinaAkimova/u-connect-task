import { runInAction, makeObservable, observable, configure } from "mobx";
configure({ enforceActions: "observed" });

// Types
import { PC } from "types/pc";

// mock
import { mocki } from "mock";

class PCStore {
  pc: PC[] = [];
  num: number = 0;

  constructor() {
    makeObservable(this, {
      pc: observable,
      num: observable,
    });
  }

  loadPC = async (nameStarts: string | null, pageNum: number, pageSize: number) => {
    try {
      let data: PC[] = mocki;
      if (nameStarts) {
        data = mocki.filter((mock) => mock.name.startsWith(nameStarts));
      }

      const indexLastElem =
        (data.length < pageSize ? data.length : pageSize) + 1;
      data = data.slice(pageSize * pageNum, indexLastElem);

      runInAction(() => {
        this.num = mocki.length;
        this.pc = data;
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const pcStore = new PCStore();

export default pcStore;
