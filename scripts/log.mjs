import { getPortNameFromArgs, listenForLogInput } from "./utils/index.mjs";

const portName = getPortNameFromArgs();
listenForLogInput(portName);
