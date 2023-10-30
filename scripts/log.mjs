import { getPortNameFromArgs, listenForInput } from "./utils/index.mjs";

const portName = getPortNameFromArgs();
listenForInput(portName);
