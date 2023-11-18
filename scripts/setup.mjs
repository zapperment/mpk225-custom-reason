import { bundle } from "luabundle";
import fs from "fs-extra";
import {
  getIsMac,
  getDebugModeFromArgs,
  getRemoteDir,
  success,
  failure,
  getRootDir,
} from "./utils/index.mjs";

const isDebugMode = getDebugModeFromArgs();

if (isDebugMode) {
  console.log(
    "Debug mode: deploying codec with extra output port for debug messages",
  );
}

let isMac;
try {
  isMac = getIsMac();
} catch (err) {
  failure(err);
}
console.log(`Platform: ${isMac ? "Mac" : "Windows"}`);

const remoteDir = getRemoteDir(isMac);

if (fs.existsSync(remoteDir)) {
  if (fs.statSync(remoteDir).isDirectory()) {
    console.log(`Reason is installed, using remote dir: ${remoteDir}`);
  } else {
    failure(`Error: remote dir ${remoteDir} exists, but it is not a directory`);
  }
} else {
  failure(
    `Reason does not seem to be installed on this system – remote dir not found: ${remoteDir}`,
  );
}

const vendor = "Akai";

const codecsTargetDir = `${remoteDir}/Codecs/Lua Codecs/${vendor}`;

if (fs.existsSync(codecsTargetDir)) {
  if (fs.statSync(codecsTargetDir).isDirectory()) {
    console.log(`Using existing codecs dir: ${codecsTargetDir}`);
  } else {
    failure(
      `Error: codecs dir ${codecsTargetDir} exists, but it is not a directory`,
    );
  }
} else {
  console.log(`Creating codecs dir: ${codecsTargetDir}`);
  fs.mkdirSync(codecsTargetDir, { recursive: true });
}

const mapsTargetDir = `${remoteDir}/Maps/${vendor}`;

if (fs.existsSync(mapsTargetDir)) {
  if (fs.statSync(mapsTargetDir).isDirectory()) {
    console.log(`Using existing maps dir: ${mapsTargetDir}`);
  } else {
    failure(
      `Error: maps dir ${mapsTargetDir} exists, but it is not a directory`,
    );
  }
} else {
  console.log(`Creating maps dir: ${mapsTargetDir}`);
  fs.mkdirSync(mapsTargetDir, { recursive: true });
}

const rootDir = getRootDir();
const distDir = `${rootDir}/dist`;
const srcDir = `${rootDir}/src`;
const codecsSourceDir = `${srcDir}/codecs`;
const mapsSourceDir = `${srcDir}/maps`;
const codecsDistDir = `${distDir}/codecs`;
const mapsDistDir = `${distDir}/maps`;

if (fs.existsSync(distDir)) {
  console.log(`Removing existing dist dir: ${distDir}`);
  fs.removeSync(distDir);
}

console.log(`Creating fresh dist dir: ${distDir}`);
fs.mkdirSync(distDir);

console.log("Copying files to dist dir");

fs.copySync(codecsSourceDir, codecsDistDir);
fs.copySync(mapsSourceDir, mapsDistDir);

console.log("Bundling Lua code");

const mainCodecFile = "MPK225.lua";
const mainCodecDistPath = `${codecsDistDir}/${mainCodecFile}`;

const bundledLuaCode = bundle(mainCodecDistPath);

console.log(`Writing bundled Lua code: ${mainCodecDistPath}`);

try {
  fs.writeFileSync(mainCodecDistPath, bundledLuaCode, "utf8");
} catch (err) {
  failure(
    `Error writing file with bundled Lua code ${mainCodecDistPath}:`,
    err,
  );
}

if (isDebugMode) {
  console.log(
    "Using debug version of .luacodec file, replacing production version",
  );
  fs.moveSync(
    `${codecsDistDir}/MPK225.debug.luacodec`,
    `${codecsDistDir}/MPK225.luacodec`,
    { overwrite: true },
  );
} else {
  console.log(
    "Using production version of .luacodec file, removing debug version",
  );
  fs.removeSync(`${codecsDistDir}/MPK225.debug.luacodec`);
}

console.log("Copying files to Reason remote dirs");
fs.copySync(codecsDistDir, codecsTargetDir);
fs.copySync(mapsDistDir, mapsTargetDir);

success("Installation successful!");
