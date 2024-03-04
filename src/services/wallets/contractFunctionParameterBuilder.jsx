import { ContractFunctionParameters } from "@hashgraph/sdk";

export class ContractFunctionParameterBuilder {
  constructor() {
    this.params = [];
  }

  addParam(param) {
    this.params.push(param);
    return this;
  }

  buildAbiFunctionParams() {
    return this.params.map((param) => `${param.type} ${param.name}`).join(", ");
  }

  buildEthersParams() {
    return this.params.map((param) => param.value.toString());
  }

  buildHAPIParams() {
    const contractFunctionParams = new ContractFunctionParameters();
    for (const param of this.params) {
      const alphanumericIdentifier = /^[a-zA-Z][a-zA-Z0-9]*$/;
      if (!param.type.match(alphanumericIdentifier)) {
        throw new Error(
          `Invalid type: ${param.type}. Type must only contain alphanumeric characters.`
        );
      }
      const type = param.type.charAt(0).toUpperCase() + param.type.slice(1);
      const functionName = `add${type}`;
      if (functionName in contractFunctionParams) {
        contractFunctionParams[functionName](param.value);
      } else {
        throw new Error(
          `Invalid type: ${param.type}. Could not find function ${functionName} in ContractFunctionParameters class.`
        );
      }
    }

    return contractFunctionParams;
  }
}
