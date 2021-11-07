import IPFSHTTPClient from "ipfs-http-client";
import IPFSCtl from "ipfsd-ctl";
import GoIPFS from "go-ipfs";

const GO_IPFS_PATH: string = GoIPFS.path();

export default async function createIPFS() {
    // Test if IPFS is installed and running.
    let ipfs = IPFSHTTPClient.create();

    try {
        await ipfs.version();
    } catch {
        // Running go-ipfs on node.js
        const ipfsd = await IPFSCtl.createController({
            ipfsHttpModule: IPFSHTTPClient,
            ipfsBin: GO_IPFS_PATH
        });

        //@ts-ignore
        ipfs = ipfsd.api;
    }

    return ipfs;
}