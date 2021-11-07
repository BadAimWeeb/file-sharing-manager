type AsyncReturnType<T extends (...args: any) => any> =
	T extends (...args: any) => Promise<infer U> ? U :
	T extends (...args: any) => infer U ? U :
	any

import API from "./api/index";
import Storage from "./storage/index";
import Interface from "./interface/index";

export class FileSharingServer {
    api?: AsyncReturnType<typeof API>;
    storage?: AsyncReturnType<typeof Storage>;
    interface?: AsyncReturnType<typeof Interface>;

    constructor() {}

    async start() {
        this.api = await API(this);
    }
}

const instance = new FileSharingServer();
instance.start();

export default instance;
