require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember slow guess castle off slow'; 
let testAccounts = [
"0x5a6c00138ec7e756fdf3de539b2858599972a496862e4feb886bbdfdf3efd005",
"0x2dd26c500e6f46a63423f18b04e27bc258e1f4349bb58dd2767c6a24a773f0ab",
"0x21983f23f84ca425dec1ba8e922da539ddc667d98897373899528e93698b4b5b",
"0x1ee32185c2484f7b758d7928d5888c6c0c44aec497055b4b37953eade63147b7",
"0xaa470c1559aabb961aad199e1d9053fa21332cd3d3933d5bc3da6239e2e52f65",
"0xbb5d66805fdbfee9d9610e817377cb2645ea1b91668621a7a16c527da19da887",
"0x95ee9f14761def21e74272f51ad431d297e3439b109d55464ba9be4092ae8683",
"0x0fe97d533148404cc07b90540c130d1d8773894d0ea7c811ccfbb5addaaf314d",
"0xb3a9c4015a312012fd423c69a8fdfe161a184834e8a67bd57406eec3a36542fc",
"0x2e6044bd5f204ab0fa6b367ae5059e3d16b9b060db71712f67b52f0beb06ed17"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


