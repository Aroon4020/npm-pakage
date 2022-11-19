import { ContractTransaction, Contract } from '@ethersproject/contracts';
import { Signer } from '@ethersproject/abstract-signer';
//import erc20Abi from "../"
// const  erc20Abi = require("../abi/import  erc20Abi  from '../abi/erc20.abi';")  
//import  erc20Abi  from '../abi/erc20.abi.ts';
const erc20Abi = require("../abi/erc20.abi");
export class Token  {
  
  readonly signer: Signer;
    protected contract: Contract;    
    constructor(_signer: Signer, _address: string) {
        this.signer = _signer;
        this.contract = new Contract(
          _address,
          erc20Abi,
          this.signer
        );
    }

    async tranfer(to: string, amount: number): Promise<ContractTransaction> {
      return await this.contract.tranfer(to,amount)
      
  }

  // constructor(){

  // }
};
